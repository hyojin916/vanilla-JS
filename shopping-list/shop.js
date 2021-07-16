"use strict";

const addBtn = document.querySelector(".footer_add");
const input = document.querySelector(".footer_input");
const items = document.querySelector(".items");
const delet = document.querySelector(".item_delet");

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ behavior: "smooth", block: "center" });
  input.value = "";
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const itemName = document.createElement("div");
  itemName.setAttribute("class", "item_name");
  itemName.innerHTML = text;

  const itemDelet = document.createElement("button");
  itemDelet.setAttribute("class", "item_delet");
  itemDelet.innerHTML = `지워져라!`;
  itemDelet.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const itemDevider = document.createElement("div");
  itemDevider.setAttribute("class", "item_divider");

  item.appendChild(itemName);
  item.appendChild(itemDelet);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDevider);

  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onAdd();
  }
});
