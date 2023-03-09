const controle = document.querySelectorAll("[data-controle]");

controle.forEach(  (elemento)=> {
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    })
 });

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
        if (peca.value <= 0)  peca.value = 0;
    }else {
        peca.value = parseInt(peca.value) + 1;
    }
}

