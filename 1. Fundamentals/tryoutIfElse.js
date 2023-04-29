/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika score bernilai 90 atau lebih
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika score bernilai 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika score bernilai 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika score bernilai 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika score bernilai di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 */

const { stdin, stdout } = require('process');
let readline = require('readline');
const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

rl.question("Masukan nilai : ", (score) => {
    if (score >= 90) {
        console.log("Selamat! Anda mendapatkan nilai A.");
    } else if (score >= 80) {
        console.log("Anda mendapatkan nilai B.");
    } else if (score >= 70) {
        console.log("Anda mendapatkan nilai C.");
    } else if (score >= 60) {
        console.log("Anda mendapatkan nilai D.");
    } else if (score < 60) {
        console.log("Anda Mendapatkan nilai E.");
    }
    rl.close();
})
