var tambahData = function(){
    var data = document.createElement("p");
    var textnode = document.createTextNode("WaIni data Baru");
    data.appendChild(textnode);
    document.getElementById("tambah").appendChild(data);
    console.log("Jalan");
}
var kurangData = function(){
    var component =  document.getElementById("tambah");
    component.removeChild(component.lastChild);
}

var tampilan = {
    header  : {
        image : "https://juaracoding.ptdika.com/public/uploads/settings/LhZzlwzLkgChQGw.png"
    },
    navigasi : {
        menu : ["Main Menu","Register", "About"]
    },
    body :{
        content : "Selamat Datang Juaracoding"
    }
}

var edit = function() {
    var judul = document.getElementById('header');
    var kontent = document.getElementById('content');
    var menu = document.getElementById('menu');
    var daftar = document.getElementById('daftar');
    var tentang = document.getElementById('tentang');

    var img = tampilan.header.image;
    judul.style.backgroundImage = 'url(img)';
    kontent.innerHTML = tampilan.body.content;
    menu.innerHTML = tampilan.navigasi.menu[0];
    daftar.innerHTML = tampilan.navigasi.menu[1];
    tentang.innerHTML = tampilan.navigasi.menu[2];
}

console.log(tampilan);