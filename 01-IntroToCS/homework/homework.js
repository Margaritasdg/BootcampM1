'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let str = 0;
let nuevoArray = num.split("").reverse();
  for (let i = 0; i < nuevoArray.length; i++) {
     str += Number(nuevoArray[i]) * Math.pow (2, i);
  }
  return nuevoArray;
    
   }
  

function DecimalABinario(num) {
  // tu codigo aca
  var binario = [];
  let decimalNumero = Numero (num)
  while (decimalNumero> 0) {
   binario.unshift(decimalNumero % 2);
   decimalNumero = MAth.floor(decimalNumero/2);
  }
  
  return binario.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}