const o=document.querySelector("p");o.addEventListener("click",(function(){o.style.color="#BADA55",o.style.fontSize="50px"})),console.log("hello"),console.log("hello I am a %s string","💩"),console.log("%c I am feeling great today","color:tomato; font-size:20px; text-shadow: 5px 5px 0 white"),console.warn("OH NOOOOO"),console.error("Shit!"),console.info("Crocodiles eat 3-4 people per year~"),console.assert(!0,"That is wrong"),console.clear(),console.dir(o),[{name:"Snickers",age:2},{name:"hugo",age:8}].forEach((o=>{console.group(`${o.name}`),console.log(`This is ${o.name}`),console.log(`${o.name} is ${o.age} years old`),console.log(`${o.name} is ${7*o.age} dog years old`),console.groupEnd(`${o.name}`)})),console.count("Kira");
//# sourceMappingURL=09-dev-tools-domination.fcba1851.js.map
