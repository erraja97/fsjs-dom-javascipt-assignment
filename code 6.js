//target search bar
const searchBar = document.querySelector(".searchinput-wrapper___3YrvF input");
//change searchbar background to red when pointer is over it
searchBar.addEventListener(
  "mouseover",
  () => (searchBar.style.background = "red")
);
//change searchbar background to red when pointer is away from it
searchBar.addEventListener("mouseout", () => (searchBar.style.background = ""));
