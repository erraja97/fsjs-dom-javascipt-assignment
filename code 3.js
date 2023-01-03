//targeting section element from faqs
const element = document.querySelector(".accordion-homepage");
//create new <section> element
const section = document.createElement("section");
//append new section to faq
element.appendChild(section);
//add class "parent" to section
section.classList.add("parent");
//create new element <h3>
const h3 = document.createElement("h3");
//add text to <h3>
h3.innerHTML = "My new added FAQ";
//append <h3> to new <section> in faq
section.appendChild(h3);
