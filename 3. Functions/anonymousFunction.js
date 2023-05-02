(function () {
    console.log("Hallo, dari function anonymous");
})();


// Fungsi yang menerima fungsi anonim sebagai argumen
function prosesData(data, callback) {
    // Lakukan sesuatu pada data
    // Panggil fungsi anonim callback
    callback();
  }
  
  // Panggil fungsi prosesData dengan fungsi anonim sebagai argumen
  prosesData("data", function() {
    console.log("Data diproses.");
  });