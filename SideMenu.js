import { gsap } from 'https://cdn.skypack.dev/gsap'; // Or another CDN
const sideMenuMouseHover = document.getElementById("SideMenuMouseHover");
const sideMenu = document.getElementById("SideMenu");
sideMenuMouseHover.addEventListener("mouseover", () => {
    console.log("mouseover");
    gsap.to(sideMenu, {x: 30});
})
sideMenuMouseHover.addEventListener("mouseleave", () => {
    console.log("mouseleave");
    gsap.to(sideMenu, {x: -10});
})
sideMenuMouseHover.addEventListener("click", () => {
    console.log("click");
    gsap.to(sideMenu, { scaleX: 4,  ease: "linear"});
})