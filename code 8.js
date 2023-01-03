const languages = document.querySelectorAll("#SIvCob a"); //target <a> elements
languages.forEach((element, index) => {
  //check index is even or not, if ture remove element
  if (index % 2 == 0) {
    element.remove();
  }
});
