let btn = document.getElementById("klik");
btn.onclick = function resultShow() {
  let resultKubus = document.getElementById("kubus");
  let resultPrisma = document.getElementById("prisma");
  var bangunRuang = {
    panjang: document.getElementById("inputPanjang").value,
    lebar: document.getElementById("inputLebar").value,
    tinggi: document.getElementById("inputTinggi").value,
    vKubus: function (p, l, t) {
      return p * l * t;
    },
    vPrisma: function (p, l, t) {
      return 0.5 * p * l * t;
    },
  };
  let string_Kubus = bangunRuang.vKubus(bangunRuang.panjang, bangunRuang.lebar, bangunRuang.tinggi).toString();
  let string_primsa = bangunRuang.vPrisma(bangunRuang.panjang, bangunRuang.lebar, bangunRuang.tinggi).toString();
  resultKubus.innerHTML = string_Kubus;
  resultPrisma.innerHTML = string_primsa;
};
