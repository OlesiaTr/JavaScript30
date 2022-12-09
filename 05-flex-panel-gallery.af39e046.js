const e={panels:document.querySelector(".panels"),panel:document.querySelectorAll(".panel")};function n(){this.classList.toggle("open")}function t(e){e.propertyName.includes("flex")&&this.classList.toggle("is-active")}e.panel.forEach((e=>e.addEventListener("click",n))),e.panel.forEach((e=>e.addEventListener("transitionend",t)));
//# sourceMappingURL=05-flex-panel-gallery.af39e046.js.map
