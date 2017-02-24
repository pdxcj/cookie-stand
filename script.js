var l1 = new Object ();
l1.min = 17;
l1.max = 88;
l1.bought = 5.2;

// var l2 = new Object ();
// l2.min = 6
// l2.max = 24
// l2.bought = 1.2
//
// var l3 = new Object ();
// l3.min = 11
// l3.max = 38
// l3.bought = 1.9
//
// var l4 = new Object ();
// l4.min = 20
// l4.max = 48
// l4.bought = 3.3
//
// var l5 = new Object ();
// l5.min = 3
// l5.max = 24
// l5.bought = 2.6

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var l1Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
document.getElementById("l1t10").innerHTML +=l1Total;

var l1Total = getRandomIntInclusive(l1.min, l1.max)*l1.bought;
document.getElementById("l1t11").innerHTML +=l1Total;

var l1Total = getRandomIntInclusive(l1.min, l1.max)*l1.bought;
document.getElementById("l1t12").innerHTML +=l1Total;

var l1Total = getRandomIntInclusive(l1.min, l1.max)*l1.bought;
document.getElementById("l1t1").innerHTML +=l1Total;
