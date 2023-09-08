// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

function executeAccordion(){
    const mediaQuery = window.matchMedia('(max-width: 980px)');
    const accordionSections = document.querySelectorAll('.col-accordion');
    accordionSections.forEach((section) => {
      const heading = section.querySelector('.col-list-heading');
      const content = section.querySelector('.col-list-content');
        
      if(mediaQuery.matches){
        heading.addEventListener('click', () => {
            console.log('clicked');
            console.log(content.style.display !== 'block');
            content.style.display = content.style.display !== 'block' ? 'block' : 'none';
        });
      }else{
        heading.removeEventListener('click',()=>{});
      }
      
    });
}

window.addEventListener('resize', (event) => {
    executeAccordion();
});