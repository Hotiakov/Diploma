(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){var e,t,i,n,o,c,r,l,s,u,a;l=document.querySelector(".header-contacts__phone-number-accord"),s=document.querySelector(".header-contacts__arrow"),u=l.querySelector(".header-contacts__phone-number"),a=!0,s.addEventListener("click",(function(){a?(l.style.top="25px",u.style.opacity=1,s.style.transform="rotate(-180deg)"):(l.style.top="0",u.style.opacity=0,s.style.transform="rotate(0deg)"),a=!a})),n=document.querySelector(".menu__icon"),o=document.querySelector(".popup-dialog-menu"),c=o.querySelector(".close-menu"),r=document.querySelector(".popup-menu"),n.addEventListener("click",(function(){r.style.visibility="inherit",o.classList.add("active")})),c.addEventListener("click",(function(){r.style.visibility="hidden",o.classList.remove("active")})),r.addEventListener("click",(function(e){e.target===r&&(r.style.visibility="hidden",o.classList.remove("active"))})),function(){var e=document.querySelector(".popup-menu-nav"),t=document.querySelector(".button-footer"),i=document.querySelector(".popup-dialog-menu");e.addEventListener("click",(function(e){if(e.target.classList.contains("menu-link")){e.preventDefault(),i.classList.remove("active");var t=e.target.getAttribute("href").substring(1),n=document.getElementById(t).getBoundingClientRect().top-0;window.scrollBy({top:n,behavior:"smooth"})}})),t.addEventListener("click",(function(e){e.preventDefault();var i=t.querySelector("a").getAttribute("href");document.querySelector(i).scrollIntoView({behavior:"smooth",block:"start"})}))}(),function(){var e=document.querySelector(".popup-repair-types"),t=document.querySelectorAll(".link-list"),i=document.querySelector(".popup-dialog-menu"),n=e.querySelector(".close");t.forEach((function(t){t.addEventListener("click",(function(t){console.log(t.target),i.classList.remove("active"),document.querySelector(".popup-menu").style.visibility="hidden",e.style.visibility="inherit"}))})),n.addEventListener("click",(function(){e.style.visibility="hidden"})),e.addEventListener("click",(function(t){t.target===e&&(e.style.visibility="hidden")}))}(),function(){var e=document.querySelector(".popup-privacy"),t=e.querySelector(".close");document.querySelectorAll(".link-privacy").forEach((function(t){t.addEventListener("click",(function(){e.style.visibility="inherit"}))})),t.addEventListener("click",(function(){e.style.visibility="hidden"})),e.addEventListener("click",(function(t){t.target===e&&(e.style.visibility="hidden")}))}(),document.querySelector(".formula>.wrapper_small").addEventListener("mouseover",(function(e){var t=e.target.closest(".formula-item__icon");if(t){var i=t.querySelector(".formula-item-popup");i.getBoundingClientRect().top<0&&i.classList.add("reverse"),i.style.visibility="inherit",i.style.opacity=1,t.addEventListener("mouseout",(function e(){i.style.visibility="hidden",i.style.opacity=.1,i.classList.remove("reverse"),t.removeEventListener("mouseout",e)}))}})),(i=document.querySelector(".accordion")).addEventListener("click",(function(e){console.log(e.target);var t=e.target.closest(".title_block");if(t)if(t.classList.contains("msg-active"))t.classList.remove("msg-active");else{var n=i.querySelector(".msg-active");n&&n.classList.remove("msg-active"),t.classList.add("msg-active")}})),e=document.querySelectorAll(".button_wide"),(t=document.querySelector(".popup-consultation")).querySelector(".popup-close"),e.forEach((function(e){e.addEventListener("click",(function(e){t.style.visibility="inherit"}))}))}))})();