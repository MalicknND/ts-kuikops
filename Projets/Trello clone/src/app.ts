const itemsContainer = document.querySelectorAll(
  ".items-container",
) as NodeListOf<HTMLDivElement>;

function addContainerListerner(currentContainer: HTMLDivElement) {
  const currentContainerDeleteBtn = currentContainer.querySelector(
    ".delete-container-btn",
  ) as HTMLButtonElement;

  deleteBtnListeners(currentContainerDeleteBtn);
}

function deleteBtnListeners(deleteBtn: HTMLButtonElement) {
  deleteBtn.addEventListener("click", handleContainerDelete);
}

function handleContainerDelete(event: MouseEvent) {
  const btn = event.target as HTMLButtonElement;
  const btnsArray = [
    ...document.querySelectorAll(".delete-container-btn"),
  ] as HTMLButtonElement[];
  const containers = [
    ...document.querySelectorAll(".items-container"),
  ] as HTMLDivElement[];
  containers[btnsArray.indexOf(btn)].remove();
}
