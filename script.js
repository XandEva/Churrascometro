


let adultos = document.getElementById("adultos");
let crianças = document.getElementById("criancas");
let inputDuracao  = document.getElementById("duração");
let resultado = document.getElementById('resultado');

function calcular(){
    let qdtAdultos = adultos.value;
    let qdtCriancas = crianças.value;
    let duracao = inputDuracao.value
    

    let qdtTotalCarne = carnePP(duracao) *qdtAdultos+(carnePP(duracao)/2 *qdtCriancas);
    let qdtTotalCerveja = cervejaPP(duracao) *qdtAdultos;
    let qdtTotalBebidas = bebidasPP(duracao) *qdtAdultos+(bebidasPP(duracao)/2 *qdtCriancas);
    
    resultado.innerHTML = `<p>${qdtTotalCarne / 1000}kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja /355)}latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de Bebidas</p>`
}

function carnePP(duracao){
    if(duracao >= 6){
         return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
         return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
         return 1500;
    }else{
        return 1000;
    }
}


