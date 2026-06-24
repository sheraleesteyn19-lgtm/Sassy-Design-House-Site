/ js/script.js

document.addEventListener("DOMContentLoaded", () => {

```
console.log("Website Loaded Successfully");
```

});

/* Future Features */

function scrollToTop(){

```
window.scrollTo({
    top:0,
    behavior:"smooth"
});
```

}

window.addEventListener("load",()=>{

```
setTimeout(()=>{

    const loader =
    document.getElementById("loader");

    loader.style.opacity="0";

    setTimeout(()=>{
        loader.style.display="none";
    },1000);

},1200);
```

});


/ particles

const particles =
document.getElementById("particles");

for(let i=0;i<25;i++){

```
const particle =
document.createElement("div");

particle.classList.add("particle");

particle.style.left =
Math.random()*100+"vw";

particle.style.top =
Math.random()*100+"vh";

particles.appendChild(particle);
```

}

/ darkmode

document
.getElementById("theme-toggle")
.addEventListener("click",()=>{

document.body.classList.toggle(
"dark-mode"
);

});

/ cursor

const cursor =
document.querySelector(".cursor");

document.addEventListener(
"mousemove",
e=>{

cursor.style.left =
e.clientX+"px";

cursor.style.top =
e.clientY+"px";

});

function portalNavigate(url){

```
const portal =
document.getElementById(
    "portal-transition"
);

portal.classList.add("active");

setTimeout(()=>{

    window.location.href=url;

},700);
```

}

const butterflyContainer =
document.getElementById(
"butterfly-container"
);

setInterval(()=>{

```
const butterfly =
document.createElement("div");

butterfly.className =
"butterfly";

butterfly.innerHTML="🦋";

butterfly.style.top =
Math.random()*100+"vh";

butterflyContainer
.appendChild(butterfly);

setTimeout(()=>{

    butterfly.remove();

},20000);
```

},4000);

const stars =
document.getElementById("stars");

for(let i=0;i<100;i++){

const star =
document.createElement("div");

star.classList.add("star");

star.style.left =
Math.random()*100+"vw";

star.style.top =
Math.random()*100+"vh";

stars.appendChild(star);

}

const audio =
document.getElementById(
"ambient-audio"
);

const musicBtn =
document.getElementById(
"music-btn"
);

musicBtn.addEventListener(
"click",
()=>{

if(audio.paused){

audio.play();

}else{

audio.pause();

}

});

document
.querySelectorAll(".gallery-card img")
.forEach(img=>{

img.addEventListener("click",()=>{

document.getElementById(
"lightbox"
).style.display="flex";

document.getElementById(
"lightbox-image"
).src=img.src;

});

});

document
.getElementById("close-lightbox")
.addEventListener("click",()=>{

document.getElementById(
"lightbox"
).style.display="none";

});

