// Récupère toutes les colonnes/listes déjà présentes au chargement de la page
const itemsContainer = document.querySelectorAll(".items-container");
// Variables "globales" pour garder en mémoire la colonne et les éléments actifs
// (la colonne sur laquelle on agit actuellement)
let actualContainer, actualBtn, actualUL, actualForm, actualTextInput, actualValidation;
// Ajoute tous les écouteurs à une colonne donnée
function addContainerListeners(currentContainer) {
    const currentContainerDeletionBtn = currentContainer.querySelector(".delete-container-btn");
    const currentAddItemBtn = currentContainer.querySelector(".add-item-btn");
    const currentCloseFormBtn = currentContainer.querySelector(".close-form-btn");
    const currentForm = currentContainer.querySelector("form");
    // Événements liés à la colonne
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
    closingFormBtnListeners(currentCloseFormBtn);
    addFormSubmitListeners(currentForm);
    // Drag & drop sur la colonne
    addDDListeners(currentContainer);
}
// Applique les comportements à toutes les colonnes déjà présentes
itemsContainer.forEach((container) => {
    addContainerListeners(container);
});
// Supprime une colonne
function deleteBtnListeners(btn) {
    btn.addEventListener("click", handleContainerDeletion);
}
// Ouvre le formulaire d'ajout d'item
function addItemBtnListeners(btn) {
    btn.addEventListener("click", handleAddItem);
}
// Ferme le formulaire d'ajout d'item
function closingFormBtnListeners(btn) {
    btn.addEventListener("click", () => toggleForm(actualBtn, actualForm, false));
}
// Gère l'envoi du formulaire d'ajout d'item
function addFormSubmitListeners(form) {
    form.addEventListener("submit", createNewItem);
}
// Ajoute les événements drag & drop à un élément
function addDDListeners(element) {
    element.addEventListener("dragstart", handleDragStart);
    element.addEventListener("dragover", handleDragOver);
    element.addEventListener("drop", handleDrop);
    element.addEventListener("dragend", handleDragEnd);
}
// Supprime la colonne correspondant au bouton cliqué
function handleContainerDeletion(e) {
    const btn = e.target;
    // On récupère tous les boutons de suppression et toutes les colonnes
    // pour retrouver l'index du bouton cliqué
    const btnsArray = [
        ...document.querySelectorAll(".delete-container-btn"),
    ];
    const containers = [
        ...document.querySelectorAll(".items-container"),
    ];
    // Supprime la colonne à la même position que le bouton cliqué
    containers[btnsArray.indexOf(btn)]?.remove();
}
// Gère le clic sur "Add an item"
function handleAddItem(e) {
    const btn = e.target;
    // Si un autre formulaire était ouvert, on le ferme avant d'en ouvrir un autre
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    // Mémorise la colonne active
    setContainerItems(btn);
    // Affiche le formulaire
    toggleForm(actualBtn, actualForm, true);
}
// Affiche ou masque le formulaire
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
// Récupère les éléments internes de la colonne active
function setContainerItems(btn) {
    actualBtn = btn;
    actualContainer = btn.parentElement;
    actualUL = actualContainer.querySelector("ul");
    actualForm = actualContainer.querySelector("form");
    actualTextInput = actualContainer.querySelector("input");
    actualValidation = actualContainer.querySelector(".validation-msg");
}
// Crée un nouvel item dans la colonne active
function createNewItem(e) {
    e.preventDefault();
    // Validation simple : le texte ne doit pas être vide
    if (actualTextInput.value.length === 0) {
        actualValidation.textContent = "Must be at least 1 character long";
        return;
    }
    else {
        actualValidation.textContent = "";
    }
    // Création du HTML de l'item
    const itemContent = actualTextInput.value;
    const li = `<li class="item" draggable="true">
    <p>${itemContent}</p>
    <button>X</button>
    </li>`;
    // Ajoute l'item à la fin de la liste
    actualUL.insertAdjacentHTML("beforeend", li);
    // Récupère le nouvel item créé pour lui ajouter ses événements
    const item = actualUL.lastElementChild;
    const liBtn = item.querySelector("button");
    // Bouton de suppression de l'item
    handleItemDeletion(liBtn);
    // Drag & drop sur l'item
    addDDListeners(item);
    // Reset de l'input
    actualTextInput.value = "";
}
// Ajoute la suppression sur un bouton d'item
function handleItemDeletion(btn) {
    btn.addEventListener("click", () => {
        const elToRemove = btn.parentElement;
        elToRemove.remove();
    });
}
// -------------------------
// Drag and Drop
// -------------------------
// Élément actuellement déplacé
let dragSrcEl;
// Début du drag
function handleDragStart(e) {
    e.stopPropagation();
    // Ferme un formulaire ouvert pendant le drag
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    dragSrcEl = this;
    // Stocke le contenu HTML de l'élément dans le drag
    e.dataTransfer?.setData("text/html", this.innerHTML);
}
// Autorise le drop
function handleDragOver(e) {
    e.preventDefault();
}
// Gère le drop
function handleDrop(e) {
    e.stopPropagation();
    const receptionEl = this;
    // Cas 1 : on déplace un item vers une colonne
    if (dragSrcEl.nodeName === "LI" &&
        receptionEl.classList.contains("items-container")) {
        receptionEl.querySelector("ul").appendChild(dragSrcEl);
        addDDListeners(dragSrcEl);
        handleItemDeletion(dragSrcEl.querySelector("button"));
    }
    // Cas 2 : on échange deux éléments de même type
    if (dragSrcEl !== this && this.classList[0] === dragSrcEl.classList[0]) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer?.getData("text/html");
        // Si on drop sur une colonne, il faut réattacher les événements à ses enfants
        if (this.classList.contains("items-container")) {
            addContainerListeners(this);
            this.querySelectorAll("li").forEach((li) => {
                handleItemDeletion(li.querySelector("button"));
                addDDListeners(li);
            });
        }
        else {
            addDDListeners(this);
            handleItemDeletion(this.querySelector("button"));
        }
    }
}
// Fin du drag
function handleDragEnd(e) {
    e.stopPropagation();
    // Si l'élément est une colonne, on réinitialise ses listeners
    if (this.classList.contains("items-container")) {
        addContainerListeners(this);
        if (this.querySelectorAll("li")) {
            this.querySelectorAll("li").forEach((li) => {
                handleItemDeletion(li.querySelector("button"));
                addDDListeners(li);
            });
        }
    }
    else {
        addDDListeners(this);
    }
}
// -------------------------
// Ajouter une nouvelle colonne
// -------------------------
const addContainerBtn = document.querySelector(".add-container-btn");
const addContainerForm = document.querySelector(".add-new-container form");
const addContainerFormInput = document.querySelector(".add-new-container input");
const validationNewContainer = document.querySelector(".add-new-container .validation-msg");
const addContainerCloseBtn = document.querySelector(".close-add-list");
const addNewContainer = document.querySelector(".add-new-container");
const containersList = document.querySelector(".main-content");
// Ouvre le formulaire de création de colonne
addContainerBtn.addEventListener("click", () => {
    toggleForm(addContainerBtn, addContainerForm, true);
});
// Ferme le formulaire de création de colonne
addContainerCloseBtn.addEventListener("click", () => {
    toggleForm(addContainerBtn, addContainerForm, false);
});
// Validation du formulaire de création de colonne
addContainerForm.addEventListener("submit", createNewContainer);
function createNewContainer(e) {
    e.preventDefault();
    // Validation : nom obligatoire
    if (addContainerFormInput.value.length === 0) {
        validationNewContainer.textContent = "Must be at least 1 character long";
        return;
    }
    else {
        validationNewContainer.textContent = "";
    }
    // Récupère une colonne existante pour servir de modèle
    const itemsContainer = document.querySelector(".items-container");
    // cloneNode() sans argument clone juste le noeud, pas son contenu
    const newContainer = itemsContainer.cloneNode();
    // Contenu HTML de la nouvelle colonne
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
    </form>`;
    newContainer.innerHTML = newContainerContent;
    // Insère la nouvelle colonne avant le bloc "add new container"
    containersList.insertBefore(newContainer, addNewContainer);
    // Reset du formulaire
    addContainerFormInput.value = "";
    // Ajoute tous les listeners à la nouvelle colonne
    addContainerListeners(newContainer);
}
export {};
