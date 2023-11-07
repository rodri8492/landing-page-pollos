// declarando e inicializando variables

// links
const linkPrimeraParte = document.getElementById("link-primera-parte");
const linkSegundaParte = document.getElementById("link-segunda-parte");

const linkHome = document.getElementById("link-home");
const linkMenu = document.getElementById("link-menu");
const linkLocations = document.getElementById("link-locations");
const linkAbout = document.getElementById("link-about");
const linkContact = document.getElementById("link-contact");

// partes de la pagina
const primeraParte = document.getElementById("primera-parte");
const segundaParte = document.getElementById("segunda-parte");

const rutaMenu = document.getElementById("menu");
const rutaLocations = document.getElementById("locations");
const rutaAbout = document.getElementById("about");
const rutaContact = document.getElementById("contact");

// otros elementos
const nav = document.querySelector("nav");

let scrollY = window.scrollY;

// agregando event listener a los links de la primera y segunda parte

linkSegundaParte.addEventListener("click", ()=>{
    event.preventDefault();
    primeraParte.style.display = "none";
    nav.style.display = "none";
    segundaParte.style.display = "block";
    window.scrollTo(0,0);
});

linkPrimeraParte.addEventListener("click", ()=>{
    event.preventDefault();
    segundaParte.style.display = "none";
    nav.style.display = "flex";
    primeraParte.style.display = "block"; 
    window.scrollTo(0,0);
});
