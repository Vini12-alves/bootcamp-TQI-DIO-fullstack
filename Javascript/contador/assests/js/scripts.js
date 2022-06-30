var currentNumberWrapper = document.querySelector(".currentNumber");

var adicionar = document.querySelector(".adicionar");

adicionar.disabled = false;
var currentNumber = 0 ; 


function increment() {
        
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
   if ( currentNumberWrapper.innerHTML == 10){
   adicionar.disabled = true;
   }
}


    


function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}