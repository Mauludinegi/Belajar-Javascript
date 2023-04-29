const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Nama = ", (nama) => {
    rl.question("Masukan Nilai = ", (nilai) => {
        console.log(`\nHallo ${nama}`);
        nilai = parseInt(nilai);
        switch (true) {
            case nilai >= 80:
                console.log(`Selamat anda lulus dengan nilai A`);
                break;
            case nilai >= 70:
                console.log("Selamat anda Lulus dengan nilai B");
                break;
            case nilai >= 60:
                console.log("Selamat anda Lulus dengan nilai C");
                break;
            case nilai >= 50:
                console.log("Selamat anda Lulus dengan nilai D");
                break;
            default:
                console.log("Tidak diketahui");
        }
        rl.close();
    })
})