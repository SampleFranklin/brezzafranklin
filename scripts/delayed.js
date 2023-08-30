// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
// var script1 = document.createElement('script');
// script1.src = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
// document.getElementsByTagName('head')[0].appendChild(script1);

// var script1 = document.createElement('script');
// script1.src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
// document.getElementsByTagName('head')[0].appendChild(script1);