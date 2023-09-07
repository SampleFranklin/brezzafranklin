// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');


const tagList = document.getElementById("tags-list");
if (tagList) {
    tagList.addEventListener("click", function (e) {
        if (e.target.nodeName === 'LI') {
            e.target.classList.toggle("bg-blue");
        }
    });
} 