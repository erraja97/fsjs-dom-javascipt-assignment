const lists = document.querySelectorAll(".as-imagegrid-item-title");
const resultArr = [];
lists.forEach((listitem) => {
  const result = listitem.innerText.replace("\nSupport", "");
  console.log(result);
});
