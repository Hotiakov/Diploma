(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){var e,t,i,o,c,n,r,s,l;n=document.querySelector(".header-contacts__phone-number-accord"),r=document.querySelector(".header-contacts__arrow"),s=n.querySelector(".header-contacts__phone-number"),l=!0,r.addEventListener("click",(function(){l?(n.style.top="25px",s.style.opacity=1,r.style.transform="rotate(-180deg)"):(n.style.top="0",s.style.opacity=0,r.style.transform="rotate(0deg)"),l=!l})),t=document.querySelector(".menu__icon"),i=document.querySelector(".popup-dialog-menu"),o=i.querySelector(".close-menu"),c=document.querySelector(".popup-menu"),t.addEventListener("click",(function(){c.style.visibility="inherit",i.classList.add("active")})),o.addEventListener("click",(function(){i.classList.remove("active")})),c.addEventListener("click",(function(e){e.target===c&&i.classList.remove("active")})),function(){var e=document.querySelector(".popup-menu-nav"),t=document.querySelector(".button-footer"),i=document.querySelector(".popup-dialog-menu");e.addEventListener("click",(function(e){if(e.target.classList.contains("menu-link")){e.preventDefault(),i.classList.remove("active");var t=e.target.getAttribute("href").substring(1),o=document.getElementById(t).getBoundingClientRect().top-0;window.scrollBy({top:o,behavior:"smooth"})}})),t.addEventListener("click",(function(e){e.preventDefault();var i=t.querySelector("a").getAttribute("href");document.querySelector(i).scrollIntoView({behavior:"smooth",block:"start"})}))}(),function(){var e=document.querySelector(".popup-repair-types"),t=document.querySelectorAll(".link-list"),i=document.querySelector(".popup-dialog-menu");e.querySelector(".close"),t.forEach((function(t){t.addEventListener("click",(function(t){console.log(t.target),i.classList.remove("active"),document.querySelector(".popup-menu").style.visibility="hidden",e.style.visibility="inherit"}))}))}(),function(){var e=document.querySelector(".popup-privacy"),t=e.querySelector(".close");document.querySelectorAll(".link-privacy").forEach((function(t){t.addEventListener("click",(function(){e.style.visibility="inherit"}))})),t.addEventListener("click",(function(){e.style.visibility="hidden"})),e.addEventListener("click",(function(t){t.target===e&&(e.style.visibility="hidden")}))}(),document.querySelector(".formula>.wrapper_small").addEventListener("mouseover",(function(e){var t=e.target.closest(".formula-item__icon");if(t){var i=t.querySelector(".formula-item-popup");i.getBoundingClientRect().top<0&&i.classList.add("reverse"),i.style.visibility="inherit",i.style.opacity=1,t.addEventListener("mouseout",(function e(){i.style.visibility="hidden",i.style.opacity=.1,i.classList.remove("reverse"),t.removeEventListener("mouseout",e)}))}})),(e=document.querySelector(".accordion")).addEventListener("click",(function(t){console.log(t.target);var i=t.target.closest(".title_block");if(i)if(i.classList.contains("msg-active"))i.classList.remove("msg-active");else{var o=e.querySelector(".msg-active");o&&o.classList.remove("msg-active"),i.classList.add("msg-active")}})),document.querySelectorAll(".popup").forEach((function(e){var t=e.querySelector(".close");t&&t.addEventListener("click",(function(){e.style.visibility="hidden"})),e.addEventListener("click",(function(t){t.target===e&&(e.style.visibility="hidden")}))}))}))})();