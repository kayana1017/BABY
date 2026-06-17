// ======================
// LOVE RAIN
// ======================

function createLoveRain(id){

const container =
document.getElementById(id);

for(let i=0;i<50;i++){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML =
["❤️","💖","💕","💗","💘"]
[Math.floor(Math.random()*5)];

heart.style.left =
Math.random()*100+"%";

heart.style.animationDuration =
(3 + Math.random()*5)+"s";

heart.style.animationDelay =
Math.random()*5+"s";

container.appendChild(heart);

}

}

createLoveRain("loveRain");
createLoveRain("loveRain2");


// ======================
// COUNTDOWN
// ======================

let count = 3;

const countText =
document.getElementById("countText");

const timer =
setInterval(()=>{

count--;

if(count > 0){

countText.innerHTML = count;

}else{

clearInterval(timer);

document
.getElementById("countdown")
.classList
.add("hidden");

document
.getElementById("birthday")
.classList
.remove("hidden");

startBirthday();

}

},1000);


// ======================
// SHOW / HIDE
// ======================

function show(id,time){

setTimeout(()=>{

document
.getElementById(id)
.classList
.remove("hidden");

},time);

}

function hide(id,time){

setTimeout(()=>{

document
.getElementById(id)
.classList
.add("hidden");

},time);

}


// ======================
// BIRTHDAY ANIMATION
// ======================

function startBirthday(){

show("happy",1000);
hide("happy",2500);

show("birth",3000);
hide("birth",4500);

show("my",5000);
hide("my",6500);

show("name",7000);

setTimeout(()=>{

document
.getElementById("birthday")
.classList
.add("hidden");

document
.getElementById("messagePage")
.classList
.remove("hidden");

},10000);

}


// ======================
// NEXT BUTTON
// ======================

document
.getElementById("nextBtn")
.addEventListener("click",()=>{

document
.getElementById("bgm")
.play();

const page =
document.getElementById("messagePage");

page.classList.add("fade-out");

setTimeout(()=>{

page.classList.add("hidden");

document
.getElementById("transitionPage")
.classList
.remove("hidden");

setTimeout(()=>{

document
.getElementById("transitionPage")
.classList
.add("hidden");

const gallery =
document.getElementById("gallery");

gallery.classList.remove("hidden");

gallery.classList.add("fade-in");

startSlideshow();

},2500);

},800);

});


// ======================
// PHOTO LIST
// ======================

const photos = [

"photos/1.jpeg",
"photos/2.jpeg",
"photos/3.jpeg",
"photos/4.jpeg",
"photos/5.jpeg",
"photos/6.jpeg",
"photos/7.jpeg",
"photos/8.jpeg",
"photos/9.jpeg",
"photos/10.jpeg",

"photos/11.jpeg",
"photos/12.jpeg",
"photos/13.jpeg",
"photos/14.jpeg",
"photos/15.jpeg",
"photos/16.jpeg",
"photos/17.jpeg",
"photos/18.jpeg",
"photos/19.jpeg",
"photos/20.jpeg",

"photos/21.jpeg",
"photos/22.jpeg",
"photos/23.jpeg",
"photos/24.jpeg"

];


// ======================
// SLIDESHOW
// ======================

function startSlideshow(){

let current = 0;

const slide =
document.getElementById("slide");

slide.src = photos[0];

const slideshow =
setInterval(()=>{

current++;

if(current >= photos.length){

clearInterval(slideshow);

showPhotoGrid();

return;

}

slide.src =
photos[current];

},1500);

}


// ======================
// SIDE HEARTS
// ======================

function createSideHeart(){

const container =
document.getElementById("sideHearts");

const heart =
document.createElement("div");

heart.classList.add("floatingHeart");

heart.innerHTML =
["❤️","💕","💖","💗","💘"]
[Math.floor(Math.random()*5)];

const side =
Math.random() > 0.5;

if(side){

heart.style.left =
Math.random()*15 + "%";

}else{

heart.style.left =
85 + Math.random()*10 + "%";

}

heart.style.animationDuration =
(4 + Math.random()*4) + "s";

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createSideHeart,300);


// ======================
// PHOTO GRID
// ======================

function showPhotoGrid(){

document
.getElementById("gallery")
.classList
.add("hidden");

document
.getElementById("photoGridPage")
.classList
.remove("hidden");

const grid =
document.getElementById("photoGrid");

grid.innerHTML = "";

photos.forEach(photo=>{

const img =
document.createElement("img");

img.src = photo;

grid.appendChild(img);

});

}
