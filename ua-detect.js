//Detect Internet Explorer from the userAgent 

const ua = navigator.userAgent;
const msie = ua.indexOf('MSIE');
const trident = ua.indexOf('Trident');

if (msie > 0  || trident > 0) {
   document.location = "https://kinetikfoundation.org/unsupported.html";
}