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
      output += "\n";
    }
    return output;
  }
  segitiga() {
    let output = "";
    for (let i = 1; i <= this.i; i++) {
      for (let j = i; j <= this.j; j++) {
        output += "#";
      }
      output += "\n";
    }
    return output;
  }
  segitigaTerbalik() {
    let output = "";
    for (let i = 1; i <= this.i; i++) {
      for (let j = 1; j <= i; j++) {
        output += "#";
      }
      output += "\n";
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
      output += "\n";
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
      output += "\n";
    }
    return output;
  }
}
let x = new Draw(5,5);
console.log(x.kotak());
console.log(x.segitigaTerbalik());
console.log(x.segitiga());
console.log(x.selangSeling());
console.log(x.kotakPola());
