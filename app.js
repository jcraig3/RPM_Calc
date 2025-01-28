//ratio vars
var trans = document.getElementById("trans");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");

//tire rear and speed vars
var width = document.getElementById("width");
var ratio = document.getElementById("ratio");
var rim = document.getElementById("rim");
var rear = document.getElementById("rear");
var speed = document.getElementById("speed");

//out RPM vars
var out1 = document.getElementById("out1");
var out2 = document.getElementById("out2");
var out3 = document.getElementById("out3");
var out4 = document.getElementById("out4");

var tireDiameter;

function selectClicked() {
  if (trans.value == "Muncie M20") {
    first.value = 2.56;
    second.value = 1.91;
    third.value = 1.48;
    fourth.value = 1.0;
  } else if (trans.value == "Muncie M21/22") {
    first.value = 2.2;
    second.value = 1.64;
    third.value = 1.28;
    fourth.value = 1.0;
  } else if (trans.value == "Powerglide") {
    first.value = 1.76;
    second.value = 1.0;
    third.value = NaN;
    fourth.value = NaN;
  } else if (trans.value == "TH350") {
    (first.value = 2), 52;
    second.value = 1.52;
    third.value = 1.0;
    fourth.value = NaN;
  } else if (trans.value == "TH400") {
    first.value = 2.48;
    second.value = 1.48;
    third.value = 1.0;
  } else if (trans.value == "200-4R") {
    first.value = 2.74;
    second.value = 1.57;
    third.value = 1.0;
    fourth.value = 0.67;
  } else if (trans.value == "700-R4") {
    first.value = 3.06;
    second.value = 1.63;
    third.value = 1.0;
    fourth.value = 0.7;
  }
}

function getTire() {
  let sidewalls = ((width.value * (ratio.value / 100)) / 25.4) * 2;
  tireDiameter = sidewalls + rim.value;
}

function getRPM(transRatio) {
  let out =
    (speed.value * rear.value * 336.13 * transRatio.value) / tireDiameter;
  if (out == NaN) {
    return "_ _ _";
  }
  console.log(transRatio.value.toString());
  return Math.trunc(out / 2.6935);
}

function entered() {
  getTire();

  out1.textContent = getRPM(first).toString();
  out2.textContent = getRPM(second).toString();
  out3.textContent = getRPM(third).toString();
  out4.textContent = getRPM(fourth).toString();

  console.log(
    width.value.toString() +
      " " +
      ratio.value.toString() +
      " " +
      rim.value.toString() +
      " " +
      rear.value.toString() +
      " " +
      speed.value.toString()
  );
}
