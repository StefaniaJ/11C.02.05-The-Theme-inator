"use strict";

const root = document.documentElement;
const select = document.querySelector("select");
root.dataset.theme = "default";
select.addEventListener("click", findIndex);

function findIndex() {
  let value = select[select.selectedIndex].value;
  root.dataset.theme = value;
}
