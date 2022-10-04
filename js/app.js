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
// add , remove the class

// on window scroll
window.addEventListener('scroll', (e) => {

  // get all sections on the page
  const sections = document.querySelectorAll('section');

  // loop through each section
  sections.forEach( sec => {

    // get px distance from top
    const topDistance = sec.getBoundingClientRect().top;

    // if the distance to the top is between 0-100px
    if (topDistance > 0 && topDistance < 100) {
      sec.classList.add('your-active-class');

    // otherwise, remove the class
    } else {
      sec.classList.remove('your-active-class');
    }
  });
});


// smooth when scrolling 

window.scrollBy({ 
  top: 100,
  left: 0, 
  behavior: 'smooth' 
});




 //disappear the header after 8 seconds and appear again when scrolling.
 
let isScrolling;
document.onscroll = () => {
  header.style.display = "block"
  clearTimeout(isScrolling)
   isScrolling = setTimeout(() => {
    header.style.display = "none";
  }, 4000);

}



