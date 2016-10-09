/**
 * Created by lance on 10/7/2016.
 */
var logo = document.getElementById('logo');
var banner = document.getElementById('head-banner');
var intro1 = document.getElementById('gsap-intro-text-1');
var intro2 = document.getElementById('gsap-intro-text-2');
var header = document.getElementById('header');
var pastor = document.getElementById('pastor');
var welcome = document.getElementById('welcome');

$(document).ready(function(){
    startGSAP();
});

function startGSAP(){
    TweenMax.to(banner, 12, {delay:2,opacity:1});
    TweenMax.to(logo, 1, {opacity:1});
    TweenMax.to(intro1, 2, { opacity:1, ease:Power2.easeInOut });
    TweenMax.to(intro2, 6, { opacity:1, ease:Power2.easeInOut });
    TweenMax.to(header, 3, { delay:3, opacity:1, ease:Power0.easeInOut });
    TweenMax.to(pastor, 3, { delay:3, opacity:1, ease:Power0.easeInOut });
    TweenMax.to(welcome, 3, { delay:3, opacity:1, ease:Power0.easeInOut });
}