//SWITCH CASE: executa códigos repetitivos, não retorna true ou false

const imprimeValor = function(nota){
    switch(Math.floor(nota)){
        case 10: //quando não coloca o break, a sentença abaixo é declarada junto
        case 9:
            console.log('Quadro de Honra')
        break;
        case 8:
        case 7:
        console.log('Aprovado')
        break;
        case 6:
        case 5:
        console.log('Recuperação')
        break;
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
        console.log('Reprovado')
        break;

        default: 
        console.log('Nota inválida')
    }
}

imprimeValor(9)
imprimeValor(7)
imprimeValor(4)
imprimeValor(11)