//elementos html onde ficam os valores clicados e o total
let totalHTML = document.getElementById('totalSpan')
let spanHTML = document.getElementById('operationsSpan')


let conta = [] //guarda os valores para a conta
let valores = ''  //valores escolhidos
let operations = '' //string que mostra os valores escolhidos
let resultado = 0 //resultado final de conta


function add(number){

    if(conta.length == 0 && valores == ''){
        spanHTML.innerHTML = 'iu'
        operations = ''
    }

    operations = operations + number
    spanHTML.innerHTML = operations

    valores = valores + number

}

function calcular(operation){
    if(valores != ''){
        conta.push(Number(valores))
    }


    conta.push(operation)

    operations = operations + operation
    spanHTML.innerHTML = operations

    valores = ''
}

function remove(){
    if(operations.length > conta.length){
        valores = valores.substr(0, valores.length - 1)
        operations = operations.substr(0, operations.length - 1)
        spanHTML.innerHTML = operations

    }else{
        conta.pop()
        operations = operations.substr(0, operations.length - 1)
        spanHTML.innerHTML = operations
    }

}

function removeAll(){
    conta = []
    valores = ''
    resultado = 0
    operations = ''
    spanHTML.innerHTML = ''
    totalHTML.innerHTML = 0
}

function calcularTotal(){
    conta.push(Number(valores))
        
    console.log(conta)

    for(let i=0;i<conta.length;i++){
        if(conta[i] == '+'){
            i++
            resultado = resultado+conta[i]

        }else if(conta[i] == '-'){
            i++
            resultado = resultado-conta[i]
        
        }else if(conta[i] == 'x'){
            i++
            resultado = resultado*conta[i]
        
        }else if(conta[i] == '/'){
            i++
            resultado = resultado/conta[i]
        
        }else if(conta[i] == '%'){
            i++
            resultado = resultado%conta[i]

        }
        else{
            resultado = resultado+conta[i]
        }
    }

    totalHTML.innerHTML = resultado
    conta = []
    valores = ''
    resultado = 0
}