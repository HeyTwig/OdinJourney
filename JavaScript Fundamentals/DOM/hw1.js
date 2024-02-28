const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const myItem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listTxt = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listTxt);
  listTxt.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  list.appendChild(listItem);

  listBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
});
