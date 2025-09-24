// Animação dos Sabores
let divAnima = []; // Obtendo conteiner de animação
let imgSabores = []; // Imagens de sabores;
let tempoAnima = "2s"; // Duração das animações;

// Atribuindo elementos a listas
for(let i = 1; i<=5;i++){
    divAnima.push(document.getElementById("anima0"+i));
    imgSabores.push(document.getElementById("Pizza0"+i));
}
// Alterando tamanho de cada img e div quando  img é hoverada;
imgSabores.forEach((e,i)=>{

    e.addEventListener("mouseover",()=>{
        // Verifica se ja tem uma imagem hoverada
        divAnima.forEach((div)=>{
            if(div.style.width != "0%"){
                div.style.width = "0%";
                div.style.transition = tempoAnima;
            }
        });
        
        // Muda o  tamanho do contênier das respectiva imagem;
        (divAnima[i]).style.display = "flex";
        (divAnima[i]).style.width = "10%"; // ou 20%
        (divAnima[i]).style.height = "100%";
        (divAnima[i]).style.transition = tempoAnima;
        
        //Atribuindo valores a largura das imagens
        imgSabores.forEach((el)=>{
            if(e==el){ // Se for a primeira imagem;
                el.style.width = "10%"; // ou 20%
            }else{
                el.style.width = "20%"; // ou 15%
            }
            el.style.transition = tempoAnima;
        });
        
    });
});

// Fechando as imagens e div's quando o mouse sai
imgSabores.forEach((e)=>{
    e.addEventListener("mouseleave",()=>{
        imgSabores.forEach((img,i)=>{
            img.style.width = "20%";
            if((divAnima[i]).style.width != "0%"){
                (divAnima[i]).style.width = "0%";
                (divAnima[i]).style.transition = "1s";
                
            }
            
        });
    });

});