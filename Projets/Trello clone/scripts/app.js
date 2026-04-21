const itemsContainer = document.querySelectorAll(".items-container");
let actualContainer, actualBtn, actualUl, actualForm, actualTextInput, actualValidateBtn;
function addContainerListerner(currentContainer) {
    const currentContainerDeleteBtn = currentContainer.querySelector(".delete-container-btn");
    const currentAddItemBtn = currentContainer.querySelector(".add-item-btn");
    deleteBtnListeners(currentContainerDeleteBtn);
    addItemBtnListeners(currentAddItemBtn);
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
function handleContainerDelete(event) {
    const btn = event.target;
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
    const btn = event.target;
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
    actualUl = actualContainer.querySelector("ul");
    actualForm = actualContainer.querySelector("form");
    actualTextInput = actualForm.querySelector("input[type='text']");
    actualValidateBtn = actualForm.querySelector("button[type='submit']");
}
export {};
