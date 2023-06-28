
let capital = 1000;
let taxaJuros = 12.5;
let tempoAplicado = 5;

taxaJuros = taxaJuros/100;

let m = capital * Math.pow((1 + taxaJuros), tempoAplicado)

console.log(m.toFixed())
