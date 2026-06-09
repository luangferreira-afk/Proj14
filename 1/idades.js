let idades = []
let posiçãomaior = 0; 
let maioridade = 0;

for( i = 0;i < 4; i++ ) 
{
    idades[i] = Number(prompt(`Digite a idade das pesssoas ${1+i}:`));
}

for( i = 0;i < 4; i++ )
{
    if (idades[i] > maioridade){
        maioridade = idades[i]
        posiçãomaior = i;
    }
    
}

alert(`A Maior idade é: ${maioridade}\n Ela foi digitada na posição : ${posiçãomaior + 1}`);


