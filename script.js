/* ========================= */
/* REVELAÇÃO DOS ELEMENTOS */
/* ========================= */

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("ativo");

}

});

},{
threshold:0.15
});

document.querySelectorAll(".revelar").forEach((el)=>{

observer.observe(el);

});


/* ========================= */
/* BOTÃO VOLTAR AO TOPO */
/* ========================= */

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.className = "voltar-topo";

document.body.appendChild(botaoTopo);


window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

botaoTopo.classList.add("mostrar-topo");

}else{

botaoTopo.classList.remove("mostrar-topo");

}

});


botaoTopo.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* ========================= */
/* FRASES ROTATIVAS */
/* ========================= */

const frases = [

"Compras inteligentes. Vida mais leve 🌿",

"Tecnologia com propósito ✨",

"Natureza e inovação caminhando juntas 🍃",

"Achados para uma vida mais zen 🌙"

];

const descricao = document.querySelector(".descricao");

let indice = 0;

setInterval(()=>{

descricao.style.opacity = "0";

setTimeout(()=>{

indice++;

if(indice >= frases.length){

indice = 0;

}

descricao.innerHTML = frases[indice];

descricao.style.opacity = "1";

},400);

},5000);



/* ========================= */
/* EFEITO 3D NAS CATEGORIAS */
/* ========================= */

if(window.innerWidth > 900){

document.querySelectorAll(".categoria").forEach((card)=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateY = ((x / rect.width)-0.5)*8;

const rotateX = ((y / rect.height)-0.5)*-8;

card.style.transform =

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});


card.addEventListener("mouseleave",()=>{

card.style.transform = "";

});

});

}


/* ========================= */
/* PARALLAX SUAVE */
/* ========================= */

window.addEventListener("scroll",()=>{

const y = window.scrollY;

document.body.style.backgroundPositionY = -(y*0.05)+"px";

});
