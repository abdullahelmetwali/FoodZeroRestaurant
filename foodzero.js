// Making Bars Function
let bars = document.querySelector(".bars")
bars.addEventListener("click", ()=>{
    document.querySelector(".solid").classList.toggle("none")
    document.querySelector(".staggered-solid").classList.toggle("block")
    document.querySelector(".links").classList.toggle("visible")
})
// Changing the Background Style 
// if(document.title.includes("Menu")){
//     document.querySelector("header").classList.add("menu")
// }else{
//     document.querySelector("header").style.background = "#233000"
// }

