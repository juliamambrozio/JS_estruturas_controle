//IF

function PassouDeAno(nota){
    if(nota > 7){
        console.log(nota + " Passou de ano") //exibe apenas a sintaxe verdadeira
    }
}

PassouDeAno(8)
PassouDeAno(6)

function PassouDeAno(nota){
    if(nota > 7)
        console.log(nota + " Passou de ano") //quando tem apenas uma sentença pode ser removida as chaves
    
}

PassouDeAno(8)
PassouDeAno(6)

function PassouDeAno(nota){
    if(nota > 7); { //utilizando o ponto e vírgula, a sentença que vem após ela não é considerada da condição if
        console.log(nota + " Passou de ano")
    }
    
}

PassouDeAno(6)

//IF/ELSE (Quando você quer fazer uma tomada de decisão quando retornar falso e true

function PassouDeAno(nota){
    if(nota > 7){
        console.log(nota + " Passou de ano")
    }else{
        console.log(nota + "Não passou de nao")
    }
    
}

PassouDeAno(6)
PassouDeAno(8)

//ELSE IF

Number.prototype.entre = function(inicio, fim){ //number prototype = pega o número atual
    return this >= inicio && this <= fim //retornando o valor informado com uma condição
} //forma mais rápida de fazer a condição ao ínves de fazer em cada else if

//Number.prototype.entre == nota.entre

const imprimeResultado = function(nota) {
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    }else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    }else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    }else{
        console.log('Nota inválida')
    }
}

imprimeResultado(9)
imprimeResultado(7)
imprimeResultado(5)
imprimeResultado(0)
imprimeResultado(11)
