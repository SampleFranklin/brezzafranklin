// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

function executeAccordion(){
    const accordionSections = document.querySelectorAll('.col-accordion');
    accordionSections.forEach((section) => {
      const heading = section.querySelector('.col-list-heading');
      const content = section.querySelector('.col-list-content');
        
      heading.addEventListener('click', () => {
        console.log('clicked');
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
      });
    });
}


function handleScreenSizeChange(mediaQuery) {
    if (mediaQuery.matches) {
      // Screen size is less than or equal to 980px
      executeAccordion();
    }
}
  
const mediaQuery = window.matchMedia('(max-width: 980px)');
mediaQuery.addEventListener('change', (event) => {
    handleScreenSizeChange(event.target);
  });
handleScreenSizeChange(mediaQuery);
