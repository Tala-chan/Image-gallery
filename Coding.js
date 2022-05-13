let x;
let y;
y = 0;
x = 0;
function nextImg() {
  x++;
  if (x > 7) {
    x = 0;
  }
  document.getElementById("nextArrow").style.display = "none";
  document.getElementById("Pr").style.display = "block";
  var delayInMilliseconds = 200;
  setTimeout(function () {
    document.getElementById("nextArrow").style.display = "block";
  }, delayInMilliseconds);
  setTimeout(function () {
    document.getElementById("Pr").style.display = "none";
  }, delayInMilliseconds);

  let ss;

  for (let s = 0; s < 8; s++) {
    ss = "0" + s;

    if (x == s) {
      document.getElementById(s).classList.add("gridLit");
      document.getElementById(ss).style.display = "block";
    } else {
      document.getElementById(s).classList.remove("gridLit");
      document.getElementById(ss).style.display = "none";
    }
  }
}
function prevImg() {
  x--;
  if (x == -1) {
    x = 7;
  }
  document.getElementById("prevArrow").style.display = "none";
  document.getElementById("Pl").style.display = "block";
  var delayInMilliseconds = 200; //1 second
  setTimeout(function () {
    document.getElementById("prevArrow").style.display = "block";
  }, delayInMilliseconds);
  setTimeout(function () {
    document.getElementById("Pl").style.display = "none";
  }, delayInMilliseconds);

  let ss;

  for (let s = 0; s < 8; s++) {
    ss = "0" + s;

    if (x == s) {
      document.getElementById(s).classList.add("gridLit");
      document.getElementById(ss).style.display = "block";
    } else {
      document.getElementById(s).classList.remove("gridLit");
      document.getElementById(ss).style.display = "none";
    }
  }
}
function clickInput(input) {
  y = input.id;
  x = y;
  let ss;

  for (let s = 0; s < 8; s++) {
    ss = "0" + s;

    if (y == s) {
      document.getElementById(s).classList.add("gridLit");
      document.getElementById(ss).style.display = "block";
    } else {
      document.getElementById(s).classList.remove("gridLit");
      document.getElementById(ss).style.display = "none";
    }
  }
}
