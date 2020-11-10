class Draw {
    constructor(i, j) {
      this.i = i;
      this.j = j;
    }
    kotak() {
      let output = "";
      for (let i = 1; i <= this.i; i++) {
        for (let j = 1; j <= this.j; j++) {
          output += "#";
        }
        output += "<br/>";
      }
      return output;
    }
    segitiga() {
      let output = "";
      for (let i = 1; i <= this.i; i++) {
        for (let j = i; j <= this.j; j++) {
          output += "#";
        }
        output += "<br/>";
      }
      return output;
    }
    segitigaTerbalik() {
      let output = "";
      for (let i = 1; i <= this.i; i++) {
        for (let j = 1; j <= i; j++) {
          output += "#";
        }
        output += "<br/>";
      }
      return output;
    }
    selangSeling() {
      let output = "";
      for (let i = 1; i <= this.i; i++) {
        for (let j = 1; j <= this.j; j++) {
          if((i+j)%2 == 0) {
              output += "!"
          } else {
              output += "#";
          }
        }
        output += "<br/>";
      }
      return output;
    }
    kotakPola() {
      let output = "";
      for (let i = 1; i <= this.i; i++) {
        for (let j = 1; j <= this.j; j++) {
          if(i%2 == 1 && j == 3) {
              output += "!"
          } else if (i%2 == 0 && j==2) {
              output += "!";
          } else {
              output += "#"
          }
        }
        output += "<br/>";
      }
      return output;
    }
  }
  let draw = new Draw(5,5);
  document.getElementById('kotak').innerHTML = draw.kotak();
  document.getElementById('segitiga').innerHTML = draw.segitiga();
  document.getElementById('segitigaTerbalik').innerHTML = draw.segitigaTerbalik();
  document.getElementById('selangSeling').innerHTML = draw.selangSeling();
  document.getElementById('kotakPola').innerHTML = draw.kotakPola();