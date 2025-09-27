let numbers = [];
for (let i = 1; i <= 15; i++) {
  numbers.push(i);
}

let sum = 0;
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
    count++;
  }
}

let average = sum / count;
console.log("Среднее арифметическое четных чисел:", average);
