//BOTÕES
const contMais = document.getElementById("contMais");
const reset = document.getElementById("reset");
const contLabel = document.getElementById("contLabel");
let contador = 100;

contMais.onclick = function(){
    contador++;
    contLabel.textContent = contador;
}

reset.onclick = function(){
    contador = 0;
    contLabel.textContent = contador;
}
//FIM DA FUNÇÃO DOS BOTÕES

const Loja1 = document.getElementById("Loja1");

Loja1.onclick = function(){
    if (contador >= 100){
        contador -= 100;
        contLabel.textContent = contador;
        contMais.onclick = function(){
            contador += 2;
            contLabel.textContent = contador;
        }
    }
}