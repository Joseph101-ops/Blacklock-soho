// RESERVE BUTTON

document.querySelectorAll("button")
.forEach(button=>{

button.addEventListener("click",(e)=>{

e.preventDefault()

alert(
"Thanks for choosing us 🍽️ Reservation system coming soon!"
)

})

})



// HEADER EFFECT

window.addEventListener("scroll",()=>{

const header=
document.querySelector("header")

if(window.scrollY>80){

header.style.background=
"rgba(0,0,0,.95)"

header.style.padding=
"15px 8%"

}

else{

header.style.background=
"rgba(0,0,0,.85)"

header.style.padding=
"20px 8%"

}

})




// FADE IN

const sections=
document.querySelectorAll("section")

const reveal=()=>{

sections.forEach(sec=>{

const top=
sec.getBoundingClientRect().top

if(top<window.innerHeight-100){

sec.style.opacity="1"

sec.style.transform=
"translateY(0)"

}

})

}

sections.forEach(sec=>{

sec.style.opacity="0"

sec.style.transform=
"translateY(60px)"

sec.style.transition=
"1s"

})

window.addEventListener(
"scroll",
reveal
)

reveal()




// MENU CARD EFFECT

document
.querySelectorAll(".card")
.forEach(card=>{

card.addEventListener(
"mouseenter",

()=>{

card.style.transform=
"translateY(-12px)"

})

card.addEventListener(
"mouseleave",

()=>{

card.style.transform=
"translateY(0)"

})

})




// GALLERY CLICK

document
.querySelectorAll(
".gallery img"
)

.forEach(img=>{

img.addEventListener(
"click",

()=>{

window.open(
img.src,
"_blank"
)

})

})