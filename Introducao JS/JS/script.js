const nome = "Melissa";
let idade = 22;
/*var cpf = 1234567989;
console.log("Dados User:\n ");
console.log("Nome -  "+nome);
console.log("Idade - "+idade);
console.log("CPF - "+cpf);
console.log("------------------\n ");*/

console.log("Nome -  "+nome);

document.getElementById('nome').textContent = nome;
document.getElementById('idade').textContent = "Idade: " + idade;
function adicionar (){
    idade ++;
    document.getElementById('idade').textContent = "Idade: " + idade;
}

function diminuir (){
    idade --;
    document.getElementById('idade').textContent = "Idade: " + idade;
}

