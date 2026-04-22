const itemsContainer = document.querySelectorAll(".items-container");
let actualContainer, actualBtn, actualUL, actualForm, actualTextInput, actualValidation;
function addContainerListerner(currentContainer) {
    const currentContainerDeletionBtn = currentContainer.querySelector(".delete-container-btn");
    const currentAddItemBtn = currentContainer.querySelector(".add-item-btn");
    const currentCloseFormBtn = currentContainer.querySelector(".close-form-btn");
    const currentForm = currentContainer.querySelector("form");
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
    closingFormBtnListeners(currentCloseFormBtn);
    addFormSubmitListeners(currentForm);
    addDDlisteners(currentContainer);
}
itemsContainer.forEach((container) => {
    addContainerListerner(container);
});
function deleteBtnListeners(deleteBtn) {
    deleteBtn.addEventListener("click", handleContainerDelete);
}
function addItemBtnListeners(addItemBtn) {
    addItemBtn.addEventListener("click", handleAddItem);
}
function closingFormBtnListeners(closeFormBtn) {
    closeFormBtn.addEventListener("click", () => toggleForm(actualBtn, actualForm, false));
}
function addFormSubmitListeners(form) {
    form.addEventListener("submit", createNewItem);
}
function addDDlisteners(element) {
    element.addEventListener("dragstart", handleDragStart);
    element.addEventListener("dragover", handleDragOver);
    element.addEventListener("drop", handleDrop);
    element.addEventListener("dragend", handleDragEnd);
}
function handleContainerDelete(event) {
    const btn = event.currentTarget;
    const btnsArray = [
        ...document.querySelectorAll(".delete-container-btn"),
    ];
    const containers = [
        ...document.querySelectorAll(".items-container"),
    ];
    containers[btnsArray.indexOf(btn)]?.remove();
}
function handleAddItem(event) {
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    const btn = event.currentTarget;
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true);
}
function toggleForm(btn, form, action) {
    if (!action) {
        form.style.display = "none";
        btn.style.display = "block";
    }
    else if (action) {
        form.style.display = "block";
        btn.style.display = "none";
    }
}
function setContainerItems(btn) {
    actualBtn = btn;
    actualContainer = btn.parentElement;
    actualUL = actualContainer.querySelector("ul");
    actualForm = actualContainer.querySelector("form");
    actualTextInput = actualContainer.querySelector("input");
    actualValidation = actualContainer.querySelector(".validation-msg");
}
function createNewItem(event) {
    event.preventDefault();
    // Validation
    if (actualTextInput.value.length === 0) {
        actualValidation.textContent = "Must be at least 1 character long";
        return;
    }
    else {
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
    const item = actualUL.lastElementChild;
    const liBtn = item.querySelector("button");
    handleAddItemDeletion(liBtn);
    addDDlisteners(item);
    actualTextInput.value = "";
}
function handleAddItemDeletion(btn) {
    btn.addEventListener("click", () => {
        const elToRemove = btn.parentElement;
        elToRemove.remove();
    });
}
/// Drag and DroP
let dragSrcEl;
function handleDragStart(event) {
    event.stopPropagation();
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    dragSrcEl = this;
    event.dataTransfer?.setData("text/html", this.outerHTML);
}
function handleDragOver(event) {
    event.preventDefault();
}
function handleDrop(event) {
    event.stopPropagation();
    const receptionEl = this;
    if (dragSrcEl.nodeName === "LI" &&
        receptionEl.classList.contains("items-container")) {
        receptionEl.querySelector("ul").appendChild(dragSrcEl);
        addDDlisteners(dragSrcEl);
        handleAddItemDeletion(dragSrcEl.querySelector("button"));
    }
}
function handleDragEnd() {
    dragSrcEl = null;
}
/// Add New Container
const addContainerBtn = document.querySelector(".add-container-btn");
const addContainerForm = document.querySelector(".add-new-container form");
const addContainerFormInput = document.querySelector(".add-new-container input");
const validationNewContainer = document.querySelector(".add-new-container .validation-msg");
const addContainerCloseBtn = document.querySelector(".close-add-list");
const addNewContainer = document.querySelector(".add-new-container");
const containersList = document.querySelector(".main-content");
addContainerBtn.addEventListener("click", () => {
    toggleForm(addContainerBtn, addContainerForm, true);
});
addContainerCloseBtn.addEventListener("click", () => {
    toggleForm(addContainerBtn, addContainerForm, false);
});
addContainerForm.addEventListener("submit", createNewContainer);
function createNewContainer(event) {
    event.preventDefault();
    if (addContainerFormInput.value.length === 0) {
        validationNewContainer.textContent = "Must be at least 1 character long";
        return;
    }
    else {
        validationNewContainer.textContent = "";
    }
    const itemsContainer = document.querySelector(".items-container");
    const newContainer = itemsContainer.cloneNode(true);
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
export {};
