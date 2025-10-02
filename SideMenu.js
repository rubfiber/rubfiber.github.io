import { gsap } from "gsap";

const sideMenuMouseHover = document.getElementById("SideMenuMouseHover");
const sideMenu = document.getElementById("SideMenu");
sideMenuMouseHover.addEventListener("mouseover", () => {
    console.log("mouseover");
    gsap.to(sideMenu, {x: 10});
})
sideMenu.addEventListener("mouseout", () => {
    console.log("mouseout");
    gsap.to(sideMenu, {x: -10});
})
sideMenu.addEventListener("click", () => {
    console.log("click");
    gsap.to(sideMenu, { scaleX: 4,  ease: "linear"});
})