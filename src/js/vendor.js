import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';

svg4everybody();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');
// import 'owl.carousel';
// import 'lazysizes';
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// import '@fancyapps/fancybox';
// import './vendor/tweenMax';