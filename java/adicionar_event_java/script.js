let texto = document.getElementById("1");//selecionei o elemento com id= 1
texto.style.color = "blue"
texto.style.backgroundColor="red";
texto.style.fontSize ="50px";
texto.style.textAlign="center"
// adicionei estilo nelo atraves do javascript
let div= document.getElementById("2")//selecionei outro elemento com id
//adicionei nele um clase 
div.classList.toggle("clas");//usada para adicinar ou retirar um clase de um elemento 


// adicionado evento com addevent
let num =document.querySelector("h3");
let but = document.querySelector("button");
let cont = 0;
let meta = 10;
let mensagem = "";
function adicionar(){
    cont = cont + 1;
    num.innerText = cont;
    if (cont === meta){
        mensagem ="parabens voce chegou aos " +meta+ " clicks, consiga mais 10,sua meta agora e "+(meta+10);
    num.innerText= mensagem;
    meta = meta + 10;
    }
}
but.addEventListener("click", adicionar);
let butca1 = document.getElementById("butAc1");
let span = document.getElementById("spanAc1");
let sectAc1 = document.getElementById("sectAc1");
function monstrarSpan(){
    span.style.opacity = "100"
}
butca1.addEventListener("mouseover",monstrarSpan);
function esconderSpan(){
    span.style.opacity = "0"
}
butca1.addEventListener("mouseout",esconderSpan);
function fazerUmClick(){

    sectAc1.innerText = "Fez um click simples!"
  
  }
butca1.addEventListener("click", fazerUmClick);
function fazerDoisClicks(){

    sectAc1.innerText = "Fez um duplo click!"

}
butca1.addEventListener("dblclick", fazerDoisClicks);