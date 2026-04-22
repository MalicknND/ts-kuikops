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
    actualTextInput.value = "";
}
function handleAddItemDeletion(btn) {
    btn.addEventListener("click", () => {
        const elToRemove = btn.parentElement;
        elToRemove.remove();
    });
}
export {};
