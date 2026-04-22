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
  actualTextInput.value = "";
}

function handleAddItemDeletion(btn: HTMLButtonElement) {
  btn.addEventListener("click", () => {
    const elToRemove = btn.parentElement as HTMLLIElement;
    elToRemove.remove();
  });
}
