const navBar = document.getElementById('navbar__list')
const sections = Array.from(document.querySelectorAll('section'))
const header = document.querySelector(".page__header");


//create li for navbar (sections) 
/* 

first required

1- create li of section
2- link section to li
3- click of sec to section id (like click section1 li arrive to section1)
4- edit in html with js through innerHTML
5- build navbar menu
*/

function createList() {
    for (sec of sections){
        list  = document.createElement("li");
        list.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a></li>`
        navBar.appendChild(list);
    }
}
createList()

// second required
// activated section on scroll 
// add , remove

window.onscroll = function(){
    document.querySelectorAll("section").forEach(function(active){
        if(   active.getBoundingClientRect().top  >= -400 
            && active.getBoundingClientRect().top <=150
        
         ){
            active.classList.add("your-active-class")
        } else{
            active.classList.remove("your-active-class")
       }
    });
};

// smooth when scrolling and set timeout to go
navBar.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.dataset.nav) {
      document
        .getElementById(`${e.target.dataset.nav}`)
        .scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        location.hash = `${e.target.dataset.nav}`;
      }, 200);
    }
  });



/**
 * disappear the header after 8 seconds and appear again when scrolling.
 */
let isScrolling;
document.onscroll = () => {
  header.style.display = "block"
  clearTimeout(isScrolling)
   isScrolling = setTimeout(() => {
    header.style.display = "none";
  }, 4000);

};
