!function(){var e={second:document.querySelector(".second-hand"),minute:document.querySelector(".min-hand"),hour:document.querySelector(".hour-hand")};function t(){var t=new Date,n=t.getSeconds()/60*360+90;e.second.style.transform="rotate(".concat(n,"deg)");var o=t.getMinutes()/60*360+90;e.minute.style.transform="rotate(".concat(o,"deg)");var r=t.getHours()/12*360+90;e.hour.style.transform="rotate(".concat(r,"deg)")}setInterval(t,1e3),t()}();
//# sourceMappingURL=02-js-and-css-clock.2ab8a2fe.js.map