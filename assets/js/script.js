const vingadores = document.querySelector(".vingadores");
const homemAranha = document.querySelector(".homem-aranha");
const thor = document.querySelector(".thor");
const capitaMarvel = document.querySelector(".capita-marvel");
const homemDeFerro = document.querySelector(".homem-de-ferro");
const capitaoAmerica = document.querySelector(".capitao-america");
const viuvaNegra = document.querySelector(".viuva-negra");
const eternos = document.querySelector(".eternos");
const panteraNegra = document.querySelector(".pantera-negra");
const doutorEstranho = document.querySelector(".doutor-estranho");
const guardioesDaGalaxia = document.querySelector(".guardioes-da-galaxia");
const shangChi = document.querySelector(".shang-chi");
const homemFormiga = document.querySelector(".homem-formiga");

const header = document.querySelector("header");
const logo = document.querySelector(".logo");

logo.addEventListener("click", ()=>{
    header.style.backgroundImage = "url('./assets/img/marvel.jpg')";
})
vingadores.addEventListener("click", ()=>{
    header.style.backgroundImage = "url('./assets/img/vingadores.png')";
})

homemAranha.addEventListener("click", ()=>{
    header.style.backgroundImage = "url('./assets/img/homem-aranha.jpg')"
    
})
thor.addEventListener("click", ()=>{
    header.style.backgroundImage = "url('./assets/img/thor.png')"
})
capitaMarvel.addEventListener("click", ()=>{
    header.style.backgroundImage = "url('./assets/img/capita-marvel.jpg')"
})
homemDeFerro.addEventListener("click", ()=>{
    header.style.backgroundImage = "url('./assets/img/homem-de-ferro.jpg')"
})
capitaoAmerica.addEventListener("click", ()=>{
    header.style.backgroundImage = "url('./assets/img/capitao-america.jpg')"
})
viuvaNegra.addEventListener("click", ()=>{
    header.style.backgroundImage = "url('./assets/img/viuva-negra.jpg')"
})
eternos.addEventListener("click", ()=>{
    header.style.backgroundImage = "url('./assets/img/eternos.jpg')"
})
panteraNegra.addEventListener("click", ()=>{
    header.style.backgroundImage = "url('./assets/img/pantera-negra.jpg')"
})
doutorEstranho.addEventListener("click", ()=>{
    header.style.backgroundImage = "url('./assets/img/doutor-estranho.jpg')"
})
guardioesDaGalaxia.addEventListener("click", ()=>{
    header.style.backgroundImage = "url('./assets/img/guardioes-da-galaxia.jpg')"
})
shangChi.addEventListener("click", ()=>{
    header.style.backgroundImage = "url('./assets/img/shang-chi.jpg')"
})
homemFormiga.addEventListener("click", ()=>{
    header.style.backgroundImage = "url('./assets/img/homem-formiga.jpg')"
})

