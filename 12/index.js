let C = 60000; 
let M = 90000;
let n = 24;

let taxa = (M/C) ** (1/n) - 1
let juros = taxa * 100

console.log(`O seu financiamento de ${C} reais teve uma taxa de juros de ${juros.toFixed(3)}%, pois após ${n} meses você teve que pagar ${M} reais`)


