function calcIMC (){
	var imc, massa, altura, nome;

	nome = document.getElementById('nome').value;
	massa = document.getElementById('massa').value;
	altura = document.getElementById('altura').value;

	imc = (massa / (altura * altura)).toFixed(2);
	document.getElementById('resultado').innerHTML = nome + " seu IMC é: " + imc;

	if(imc > 0 && imc < 41 && altura >= 0.54 && altura <= 2.51) 
	{

	if (imc < 18.5) {
	document.getElementById('resultado').innerHTML = nome + " seu IMC é magro: " + imc;
	}
	else if (imc > 18.5 && imc < 25) {
	document.getElementById('resultado').innerHTML = nome + " seu IMC é médio: " + imc;		
	}	
	else if (imc > 25 && imc < 29.9) {
	document.getElementById('resultado').innerHTML = nome + " seu IMC é sobrepeso: " + imc;		
	}	
	else if (imc > 30) {
	document.getElementById('resultado').innerHTML = nome + " seu IMC é obeso: " + imc;		
	}
  }else {
  	document.getElementById('resultado').innerHTML = "valor inválido";
  }
}