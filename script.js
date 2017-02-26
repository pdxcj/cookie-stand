var l1 = new Object ();
l1.min = 17;
l1.max = 88;
l1.bought = 5.2;
l1.id = "locationOne";
var li = {
  min: 17,
  max: 88,
  avgCookies: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}

li.avgCookies();
var str = "string";
str.toUpperCase();
li.max;

var l2 = new Object ();
l2.min = 6
l2.max = 24
l2.bought = 1.2
l2.id = "locationTwo";

var l3 = new Object ();
l3.min = 11
l3.max = 38
l3.bought = 1.9
l3.id = "locationThree";

var l4 = new Object ();
l4.min = 20
l4.max = 48
l4.bought = 3.3
l4.id = "locationFour";

var l5 = new Object ();
l5.min = 3
l5.max = 24
l5.bought = 2.6
l5.id = "locationFive";

var stores = [l1, l2, l3, l4, l5];
function getStoreHours(t) {
  switch (t) {
    case 1:
    return "10:00-11:00: ";
    case 2:
    return "11:00-12:00: ";
    case 3:
    return "12:00-1:00: ";
    case 4:
    return "1:00-2:00: ";
    case 5:
    return "2:00-3:00: ";
    case 6:
    return "3:00-4:00: ";
    case 7:
    return "4:00-5:00: ";
    case 8:
    return "5:00-6:00: ";
  }
}

function cookiesBought (){
  for (i=0; i<stores.length; i++) { //for loop for each store location
    var storeList = document.getElementById(stores[i].id);
    var locationTotal = 0;
    for (t=1; t<=8; t++) {
      var quantity = Math.floor(getRandomIntInclusive(stores[i].min, stores[i].max)*stores[i].bought);
      locationTotal += quantity;
      storeList.innerHTML+="<li>" + getStoreHours(t) + quantity + "</>";
    }
    storeList.innerHTML+="<li> Total: " + locationTotal + "</>";
  }
}



//

//
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

cookiesBought();

//
//
//
// // var mapElement = document.getElementById
// //
// // var getAverage=Math.floor(l1.bought*(getRandomIntInclusive))
// //
//
//
// function l1Purchase() {
//
//   var l1Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l1t10").innerHTML +=l1Total;
//
//   var l1Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l1t11").innerHTML +=l1Total;
//
//   var l1Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l1t12").innerHTML +=l1Total;
//
//   var l1Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l1t1").innerHTML +=l1Total;
//
//   var l1Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l1t2").innerHTML +=l1Total;
//
//   var l1Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l1t3").innerHTML +=l1Total;
//
//   var l1Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l1t4").innerHTML +=l1Total;
//
//   var l1Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l1t5").innerHTML +=l1Total;
// }
//
// l1Purchase();
//
// function l2Purchase() {
//
//   var l2Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l2t10").innerHTML +=l2Total;
//
//   var l2Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l2t11").innerHTML +=l2Total;
//
//   var l2Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l2t12").innerHTML +=l2Total;
//
//   var l2Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l2t1").innerHTML +=l2Total;
//
//   var l2Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l2t2").innerHTML +=l2Total;
//
//   var l2Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l2t3").innerHTML +=l2Total;
//
//   var l2Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l2t4").innerHTML +=l2Total;
//
//   var l2Total = Math.floor(getRandomIntInclusive(l1.min, l1.max)*l1.bought);
//   document.getElementById("l2t5").innerHTML +=l2Total;
// }
//
// l2Purchase();
//
// /* Note: Stopping here for the night. It's glaringly obvious that I shold be able to pull out some of the reete code into variables, but I cannot make it work.
// */
