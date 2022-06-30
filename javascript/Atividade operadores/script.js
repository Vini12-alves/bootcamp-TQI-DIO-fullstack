var n1 = Number(prompt('Digite um numero: '));
var n2 = Number(prompt('Digite outro numero: '));


function operacao(primeiro, segundo){
    (n1 == n2) ?  alert('Numeros iguais'): soma = primeiro + segundo ; 
	
	if (soma > 10 ) {
	   var maior = 'maior' ; 
	} else {
	var maior = 'menor' ;
	} 


    if (soma > 20) {
	   var menor = 'maior' ;
	} else {
		var menor = 'menor' ;
	}
	
	
	
    alert('Os numeros ' + n1 +  ' e ' + n2 + ' não são iguais. Sua soma é ' + soma + ' que é ' + maior + ' que 10 e ' + menor + 	' que 20 ');
}

operacao(n1, n2);