//FOR

const nota = [1, 2, 3, 4, 5, 6];

for(let i = 0; i < nota.length; i++){
    console.log(`notas: ${nota[i]}`)
}

//FOR IN

const nota2 = [1, 2, 3, 4, 5, 6];

for(let i in nota2){ //i recebe o índice
    console.log(`notas: ${i} : ${nota2[i]}`)
}

const pessoa = {
    nome: 'Júlia',
    idade: 18
}



for (let atributo in pessoa){
    console.log(`${atributo} : ${pessoa[atributo]}`) //mesma coisa que pessoa.nome, pessoa.idade
}

//BREAK E CONTINUE

const nums = [2, 3, 6, 7, 8, 9, 10]

for(numero in nums){
    if(numero == 5){ 
        break //quando chega no 5 ele para de exibir e sai do laço para o mais próximo (for)
    }
    console.log(`${numero} : ${nums[numero]}`)

}

for(numero in nums){
    if(numero == 5){ 
        continue //pula e vai para a próxima repetição sem interromper
    }
    console.log(`${numero} : ${nums[numero]}`)

}

externo: for(numero in nums){
    if(numero == 5){ 
        break externo //sai do for
    }
    console.log(`${numero} : ${nums[numero]}`)

}