// type assertion : c'est une technique qui permet de dire au compilateur que nous savons mieux que lui le type d'une variable. Cela peut être utile lorsque nous avons des informations supplémentaires sur le type d'une variable qui ne sont pas évidentes pour le compilateur.

// const form: HTMLFormElement = document.querySelector("form")!;
// console.log(form.children);

// type casting : c'est une technique qui permet de convertir une variable d'un type à un autre. Cela peut être utile lorsque nous avons besoin de traiter une variable comme un type différent de celui qu'elle a actuellement.

const form = document.querySelector("form") as HTMLFormElement;
console.log(form.children);
const input = document.querySelector("input") as HTMLInputElement;
console.log(input.value);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event: Event) {
  event.preventDefault();
  console.log(input.value);
}

window.addEventListener("click", handleClick);

function handleClick(event: MouseEvent) {
  console.log(`Clicked at coordinates: (${event.clientX}, ${event.clientY})`);
}

const paragraphs = document.querySelectorAll("p");
