function funcao (){
    console.log( 'é uma função')
}

funcao;

function menssagem (primeiro, segundo) {
    console.log(primeiro, segundo);
} 

menssagem ('Bom dia', 'tudo bem ?');


 var funcao= () => {
    console.log('sou uma arrow funtion');
 }


function calculadora () {
    const operacao = Number(prompt('escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração  (-) \n 3 - Multiplicação (*)\n 4 - Divisão real (/) \n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));
    
    if(!operacao || operacao >= 7){
        alert ('Erro - operação invalida"');
        calculadora();
    }else {

        let n1 = Number(prompt('insira o primeiro numero: '));
        let n2 = Number(prompt('insira outro numero:'));
        let resultado;
    
        if (!n1 || !n2) {
            alert("Erro - parametro invalido!");
            calculadora();
        }else{
            function soma() {
                resultado = n1 + n2;
                alert ('${n1} + ${n2} = $resultado');
            }
        
            function subtracao() {
                resultado = n1 - n2;
                alert ('${n1} + ${n2} = $resultado');
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert ('${n1} + ${n2} = $resultado');
            }
        
            function divisaoReal() {
                resultado = n1 / n2;
                alert ('${n1} + ${n2} = $resultado');
            }
        
            function divisaoInteira() {
                resultado = n1 % n2;
                alert ("O resto da divisão ${n1} e ${n2} é igual a ${resultado}");
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert ('${n1} elevado a ${n2} é igual a ${resultado}');
            }
           
           function novaOperacao () {
            let opcao = prompt( 'Deseja fazer outra operação\n 1 - Sim\n 2 - Não');
        
            if(opcao == 1){
                calculadora();
            } else if (opcao == 2 ){
                alert( 'Até mais!')
            }else {
                alert('digite uma opção valida')
                novaOperacao();
            }
           }
        
            if(operacao ==1){
                soma();
            }else if (operacao == 2){
                subtracao();
            }else if (operacao == 3){
                multiplicacao();
            }else if (operacao == 4){
                divisaoReal();
            }else if (operacao == 5) {
                divisaoInteira();
            }else if (operacao == 6){
                potenciacao();
            }
        }
        
        
        calculadora();
        }
    
      
        }
        