let funcionarios =  []
let lista = "";
for( i = 0;i < 5; i++ ) 
{
    funcionarios[i] = {};
    funcionarios[i].nomes = prompt(`Digite o nome da ${i+1} pessoa:`);
     funcionarios[i].generos = prompt(`Digite o genero da ${i+1} pessoa:`);
        funcionarios[i].salários = Number(prompt(`Digite o salário da ${i+1} pessoa:`));
}

for (let i = 0; i < 5; i++ ) {

if (funcionarios[i].generos === "F" && funcionarios[i].salários > 5000) {

lista += `nome: ${funcionarios[i].nomes} | salários: R$ ${funcionarios[i].salários.toFixed(2)}\n`;
}

}

if (lista === ""){

alert("Nenhuma funcionaria mulher recebe mais de R$5000");
}else {
    alert(`Funcionarias mulheres que ganham mais de R$ 5 mil:\n\n${lista}`);
}
