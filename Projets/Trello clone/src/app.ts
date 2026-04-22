const itemsContainer = document.querySelectorAll(
  ".items-container",
) as NodeListOf<HTMLDivElement>;

let actualContainer: HTMLDivElement,
  actualBtn: HTMLButtonElement,
  actualUL: HTMLUListElement,
  actualForm: HTMLFormElement,
  actualTextInput: HTMLInputElement,
  actualValidation: HTMLSpanElement;

function addContainerListerner(currentContainer: HTMLDivElement) {
  const currentContainerDeletionBtn = currentContainer.querySelector(
    ".delete-container-btn",
  ) as HTMLButtonElement;
  const currentAddItemBtn = currentContainer.querySelector(
    ".add-item-btn",
  ) as HTMLButtonElement;
  const currentCloseFormBtn = currentContainer.querySelector(
    ".close-form-btn",
  ) as HTMLButtonElement;
  const currentForm = currentContainer.querySelector("form") as HTMLFormElement;

  deleteBtnListeners(currentContainerDeletionBtn);
  addItemBtnListeners(currentAddItemBtn);
  closingFormBtnListeners(currentCloseFormBtn);
  addFormSubmitListeners(currentForm);
  addDDlisteners(currentContainer);
}

itemsContainer.forEach((container: HTMLDivElement) => {
  addContainerListerner(container);
});
function deleteBtnListeners(deleteBtn: HTMLButtonElement) {
  deleteBtn.addEventListener("click", handleContainerDelete);
}

function addItemBtnListeners(addItemBtn: HTMLButtonElement) {
  addItemBtn.addEventListener("click", handleAddItem);
}

function closingFormBtnListeners(closeFormBtn: HTMLButtonElement) {
  closeFormBtn.addEventListener("click", () =>
    toggleForm(actualBtn, actualForm, false),
  );
}

function addFormSubmitListeners(form: HTMLFormElement) {
  form.addEventListener("submit", createNewItem);
}

function addDDlisteners(element: HTMLElement) {
  element.addEventListener("dragstart", handleDragStart);
  element.addEventListener("dragover", handleDragOver);
  element.addEventListener("drop", handleDrop);
  element.addEventListener("dragend", handleDragEnd);
}

function handleContainerDelete(event: MouseEvent) {
  const btn = event.currentTarget as HTMLButtonElement;
  const btnsArray = [
    ...document.querySelectorAll(".delete-container-btn"),
  ] as HTMLButtonElement[];
  const containers = [
    ...document.querySelectorAll(".items-container"),
  ] as HTMLDivElement[];
  containers[btnsArray.indexOf(btn)]?.remove();
}

function handleAddItem(event: MouseEvent) {
  if (actualContainer) toggleForm(actualBtn, actualForm, false);
  const btn = event.currentTarget as HTMLButtonElement;
  setContainerItems(btn);
  toggleForm(actualBtn, actualForm, true);
}

function toggleForm(
  btn: HTMLButtonElement,
  form: HTMLFormElement,
  action: boolean,
) {
  if (!action) {
    form.style.display = "none";
    btn.style.display = "block";
  } else if (action) {
    form.style.display = "block";
    btn.style.display = "none";
  }
}

function setContainerItems(btn: HTMLButtonElement) {
  actualBtn = btn;
  actualContainer = btn.parentElement as HTMLDivElement;
  actualUL = actualContainer.querySelector("ul") as HTMLUListElement;
  actualForm = actualContainer.querySelector("form") as HTMLFormElement;
  actualTextInput = actualContainer.querySelector("input") as HTMLInputElement;
  actualValidation = actualContainer.querySelector(
    ".validation-msg",
  ) as HTMLSpanElement;
}

function createNewItem(event: Event) {
  event.preventDefault();

  // Validation
  if (actualTextInput.value.length === 0) {
    actualValidation.textContent = "Must be at least 1 character long";
    return;
  } else {
    actualValidation.textContent = "";
  }
  // Create new item
  const itemContent = actualTextInput.value;
  const li = `
  <li class="item" draggable="true">
    <p>${itemContent}</p>
    <button class="delete-item-btn">X</button>
  </li>
  `;
  // Insert new item in the DOM
  actualUL.insertAdjacentHTML("beforeend", li);
  const item = actualUL.lastElementChild as HTMLLIElement;
  const liBtn = item.querySelector("button") as HTMLButtonElement;
  handleAddItemDeletion(liBtn);
  addDDlisteners(item);
  actualTextInput.value = "";
}

function handleAddItemDeletion(btn: HTMLButtonElement) {
  btn.addEventListener("click", () => {
    const elToRemove = btn.parentElement as HTMLLIElement;
    elToRemove.remove();
  });
}

/// Drag and DroP

let dragSrcEl: HTMLElement;

function handleDragStart(this: HTMLElement, event: DragEvent) {
  event.stopPropagation();
  if (actualContainer) toggleForm(actualBtn, actualForm, false);
  dragSrcEl = this;
  event.dataTransfer?.setData("text/html", this.outerHTML);
}

function handleDragOver(event: DragEvent) {
  event.preventDefault();
}

function handleDrop(this: HTMLElement, event: DragEvent) {
  event.stopPropagation();
  const receptionEl = this;
  if (
    dragSrcEl.nodeName === "LI" &&
    receptionEl.classList.contains("items-container")
  ) {
    (receptionEl.querySelector("ul") as HTMLUListElement).appendChild(
      dragSrcEl,
    );
    addDDlisteners(dragSrcEl);
    handleAddItemDeletion(
      dragSrcEl.querySelector("button") as HTMLButtonElement,
    );
  }
}

function handleDragEnd() {
  dragSrcEl = null as unknown as HTMLLIElement;
}

/// Add New Container

const addContainerBtn = document.querySelector(
  ".add-container-btn",
) as HTMLButtonElement;
const addContainerForm = document.querySelector(
  ".add-new-container form",
) as HTMLFormElement;
const addContainerFormInput = document.querySelector(
  ".add-new-container input",
) as HTMLInputElement;
const validationNewContainer = document.querySelector(
  ".add-new-container .validation-msg",
) as HTMLSpanElement;
const addContainerCloseBtn = document.querySelector(
  ".close-add-list",
) as HTMLButtonElement;
const addNewContainer = document.querySelector(
  ".add-new-container",
) as HTMLDivElement;
const containersList = document.querySelector(
  ".main-content",
) as HTMLDivElement;

addContainerBtn.addEventListener("click", () => {
  toggleForm(addContainerBtn, addContainerForm, true);
});
addContainerCloseBtn.addEventListener("click", () => {
  toggleForm(addContainerBtn, addContainerForm, false);
});

addContainerForm.addEventListener("submit", createNewContainer);

function createNewContainer(event: Event) {
  event.preventDefault();
  if (addContainerFormInput.value.length === 0) {
    validationNewContainer.textContent = "Must be at least 1 character long";
    return;
  } else {
    validationNewContainer.textContent = "";
  }
  const itemsContainer = document.querySelector(
    ".items-container",
  ) as HTMLDivElement;
  const newContainer = itemsContainer.cloneNode(true) as HTMLDivElement;
  const newContainerContent = `
         
        <div class="top-container">
          <h2>${addContainerFormInput.value}</h2>
          <button class="delete-container-btn">X</button>
        </div>
        <ul></ul>
        <button class="add-item-btn">Add an item</button>
        <form autocomplete="off">
          <div class="top-form-container">
            <label for="item">Add a new item</label>
            <button type="button" class="close-form-btn">X</button>
          </div>
          <input type="text" id="item" />
          <span class="validation-msg"></span>
          <button type="submit">Submit</button>
        </form>
      
  `;
  newContainer.innerHTML = newContainerContent;
  containersList.insertBefore(newContainer, addNewContainer);
  addContainerFormInput.value = "";
  addContainerListerner(newContainer);
}
