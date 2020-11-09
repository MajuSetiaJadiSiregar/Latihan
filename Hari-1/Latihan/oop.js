var bangunRuang = {
    panjang: document.getElementById('inputTinggi').value,
    lebar: document.getElementById('inputLebar').value,
    tinggi : document.getElementById('inputTinggi').value,
    vKubus : function() {
        return this.panjang*this.lebar*this.tinggi;
    },
    vPrisma: function() {
        return 0,5*this.panjang*this.lebar*this.tinggi;
    }
    
}
let klik = document.getElementById('klik');
klik.onclick = function show() {
    resultKubus = document.getElementById('kubus');
    resultPrisma = document.getElementById('prisma');
    resultKubus.innerHTML = bangunRuang.vKubus().toString();
}
// console.log(bangunRuang.lebar);

// klik.onclick = function show() {
//     let x = document.getElementById('inputPanjang').value;
//     console.log(x);
// }

