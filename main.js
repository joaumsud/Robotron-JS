const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");
const controle = document.querySelectorAll(".controle-ajuste");

somar.addEventListener ("click", () => {manipulaDados("somar")});

subtrair.addEventListener ("click", () => {manipulaDados("subtrair")});

controle.forEach(  (elemento)=> {
    elemento.addEventListener("click", () =>{
        console.log(elemento);
    })
 });

function manipulaDados(operacao){
    if(operacao === "subtrair"){
        braco.value = parseInt(braco.value) - 1;
        if (braco.value <= 0)  braco.value = 0;
    }else {
        braco.value = parseInt(braco.value) + 1;
    }
}

