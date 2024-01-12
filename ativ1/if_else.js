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
