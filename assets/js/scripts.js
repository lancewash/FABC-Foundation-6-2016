/**
 * Created by lance on 10/7/2016.
 */

var intro1 = document.getElementById('gsap-intro-text-1');
var intro2 = document.getElementById('gsap-intro-text-2');
var header = document.getElementById('header');
var banner = document.getElementById('head-banner');
var logo = document.getElementById('logo');
var pastorImg = document.getElementById('pastor-img');
var pastorText = document.getElementById('pastor-txt');
var welcome1 = document.getElementById('welcome-1');
var welcome2 = document.getElementById('welcome-2');

$(document).ready(function(){
    startGSAP();
});

function startGSAP(){
   TweenMax.to(intro1, 1, { opacity:1, ease:Power0.easeInOut });
   TweenMax.to(intro2, 2.5, { delay:1, opacity:1, ease:Power0.easeInOut });
   TweenMax.to(header, 2, { delay:3, opacity:1 });
   TweenMax.to(banner, 3, {delay:3,opacity:1 });
   TweenMax.to(logo, 1.5, { delay:3, opacity:1 });
   TweenMax.to(pastorImg, 2, { delay:3, opacity:1, ease:Power0.easeInOut });
   TweenMax.to(pastorText, 2, { delay:2, opacity:1, ease:Power0.easeInOut });
   TweenMax.to(welcome1, 3, { delay:2, opacity:1, ease:Power0.easeInOut });
   TweenMax.to(welcome2, 2, { delay:3, opacity:1, ease:Power0.easeInOut });
}

// function startGSAP(){
//     TweenMax.to(header, 0, { opacity:1 });
//     TweenMax.to(banner, 0, { opacity:1});
//     TweenMax.to(logo, 0, { opacity:1 });
//     TweenMax.to(intro1, 0, { opacity:1, ease:Power0.easeInOut });
//     TweenMax.to(intro2, 0, { opacity:1, ease:Power2.easeInOut });
//     TweenMax.to(pastor, 0, { opacity:1, ease:Power0.easeInOut });
//     TweenMax.to(welcome, 0, { opacity:1, ease:Power0.easeInOut });
// }


// var elems = $(".gsap-intro-wrap");
// if (elems.length) {
//     var keep = Math.floor(Math.random() * elems.length);
//     for (var i = 0; i < elems.length; ++i) {
//         if (i !== keep) {
//             $(elems[i]).hide();
//         }
//     }
// }