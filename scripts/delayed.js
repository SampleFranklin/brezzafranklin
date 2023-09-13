// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

function executeAccordion(){
//     content.style.display = 'block';
//     if(mediaQuery.matches){
//         content.style.display = 'none';      
//         heading.addEventListener('click', () => {
//             content.style.display = content.style.display !== 'block' ? 'block' : 'none';
//         });
//     }else{
//         console.log("Here")
//         heading.replaceWith(heading.cloneNode(true));
//     }
// });
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    const accordionSections = document.querySelectorAll('.col-accordion');
    accordionSections.forEach((section,index) => {
    const heading = section.querySelector('.col-list-heading');
    const content = section.querySelector('.col-list-content');
      if(mediaQuery.matches && index !== 0){
        content.style.display = 'none';
        if(heading.getAttribute("init") !== "true"){
          heading.addEventListener('click', () => {
            content.style.display = content.style.display !== 'block' ? 'block' : 'none';
          });
          heading.setAttribute("init","true");
        }
      }else{
        content.style.display = 'block';
      }
    });
}


const tagList = document.getElementById("tags-list");
if (tagList) {
    tagList.addEventListener("click", function (e) {
        if (e.target.nodeName === 'LI') {
            e.target.classList.toggle("bg-blue");
        }
    });
} 
window.addEventListener('resize', (event) => {
    executeAccordion();
});
executeAccordion();