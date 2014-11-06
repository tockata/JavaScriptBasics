var r1 = 7;
var r2 = 1.5;
var r3 = 20;

var firstCircleArea =r1 * r1 * Math.PI;
var secondCircleArea = r2 * r2 * Math.PI;
var thirdCircleArea = r3 * r3 * Math.PI;

document.getElementById("circle-one").innerHTML = "r = " + r1 + "; area = " + firstCircleArea;
document.getElementById("circle-two").innerHTML = "r = " + r2 + "; area = " + secondCircleArea;
document.getElementById("circle-three").innerHTML = "r = " + r3 + "; area = " + thirdCircleArea;