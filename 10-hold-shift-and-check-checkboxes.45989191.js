const e=document.querySelectorAll("input[type=checkbox]");let c;function t(t){let h=!1;t.shiftKey&&this.checked&&e.forEach((e=>{e!==this&&e!==c||(h=!h),h&&(e.checked=!0)})),c=this}e.forEach((e=>e.addEventListener("click",t)));
//# sourceMappingURL=10-hold-shift-and-check-checkboxes.45989191.js.map
