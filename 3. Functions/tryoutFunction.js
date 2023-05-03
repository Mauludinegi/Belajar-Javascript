/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */


// TODO
function minimal(a, b) {
   return a < b ? a : b;
}

console.log(minimal(3, 1));

const power = (a, b) => a ** b;

function minMax(arrayOfNumbers) {
   let currentMin = arrayOfNumbers[0];
   let currentMax = arrayOfNumbers[0];
   for (value of arrayOfNumbers) {
       if (value < currentMin) {
           currentMin = value;
       } else if (value > currentMax) {
           currentMax = value;
       }
   }

   console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

function calculate(value) {
   return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(4));