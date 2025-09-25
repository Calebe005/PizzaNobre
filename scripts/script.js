// Animação dos Sabores
let divAnima = []; // Obtendo conteiner de animação
let imgSabores = []; // Imagens de sabores;
let tempoAnima = "2s"; // Duração das animações;
let elementoPizza = [];

// Atribuindo elementos a listas
for(let i = 1; i<=5;i++){
    divAnima.push(document.getElementById("anima0"+i));
    imgSabores.push(document.getElementById("Pizza0"+i));
    elementoPizza.push(document.getElementById("elementoPizza0"+i));
}

function abrirElementos(i){
    
}

// Alterando tamanho de cada img e div quando  img é hoverada;
imgSabores.forEach((e,i)=>{

    
    e.addEventListener("mouseover",(event)=>{

        // Verificando se não tem outra img aberta
        divAnima.forEach((e)=>{
            if(e.style.width != "0%"){
                e.style.width = "0%"
                e.style.transition = tempoAnima;
            }
        });
        imgSabores.forEach((e)=>{
            if(e.style.width != "100%"){
                e.style.width = "100%"
                e.style.transition = tempoAnima;
            }
        });
        elementoPizza.forEach((e)=>{
            if(e.style.width != "20%"){
                e.style.width = "20%"
                e.style.transition = tempoAnima;
            }
        });

        // Abrindo animação
        elementoPizza[i].style.width = "40%";
        elementoPizza[i].style.transition = tempoAnima;
        imgSabores[i].style.width = "50%";
        imgSabores[i].style.transition = tempoAnima;
        divAnima[i].style.display = "flex";
        divAnima[i].style.width = "50%";
        divAnima[i].style.transition = tempoAnima;
    });
});

// Fechando as imagens e div's quando o mouse sai
elementoPizza.forEach((e)=>{
    e.addEventListener("mouseleave",()=>{
        imgSabores.forEach((img)=>{
            img.style.width = "100%";
        });
        divAnima.forEach((div)=>{
            div.style.width = "0%";
        });
        elementoPizza.forEach((img)=>{
            img.style.width = "20%";
        });
    });

});
