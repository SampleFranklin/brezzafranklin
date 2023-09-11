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
    accordionSections.forEach((section) => {
    const heading = section.querySelector('.col-list-heading');
    const content = section.querySelector('.col-list-content');
      if(mediaQuery.matches ){
        heading.addEventListener('click', () => {
            content.style.display = content.style.display !== 'block' ? 'block' : 'none';
        });
      }
    });
}


window.addEventListener('resize', (event) => {
    window.location.reload();
    executeAccordion();
});
executeAccordion();