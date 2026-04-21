const itemsContainer = document.querySelectorAll(
  ".items-container",
) as NodeListOf<HTMLDivElement>;

let actualContainer: HTMLDivElement,
  actualBtn: HTMLButtonElement,
  actualUl: HTMLUListElement,
  actualForm: HTMLFormElement,
  actualTextInput: HTMLInputElement,
  actualValidateBtn: HTMLButtonElement;

function addContainerListerner(currentContainer: HTMLDivElement) {
  const currentContainerDeleteBtn = currentContainer.querySelector(
    ".delete-container-btn",
  ) as HTMLButtonElement;
  const currentAddItemBtn = currentContainer.querySelector(
    ".add-item-btn",
  ) as HTMLButtonElement;

  deleteBtnListeners(currentContainerDeleteBtn);
  addItemBtnListeners(currentAddItemBtn);
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

function handleContainerDelete(event: MouseEvent) {
  const btn = event.target as HTMLButtonElement;
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
  const btn = event.target as HTMLButtonElement;
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
  actualUl = actualContainer.querySelector("ul") as HTMLUListElement;
  actualForm = actualContainer.querySelector("form") as HTMLFormElement;
  actualTextInput = actualForm.querySelector(
    "input[type='text']",
  ) as HTMLInputElement;
  actualValidateBtn = actualForm.querySelector(
    "button[type='submit']",
  ) as HTMLButtonElement;
}
