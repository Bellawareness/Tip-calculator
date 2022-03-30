// const tipCalculator = (quality, total) => {
// 	  var text;
//   var quality = prompt("How was this service? ");
//     switch (quality) {
//         case 'bad':
//             return total * .05;
//         case 'good':
//             return total * .15;
//         case 'Very good':
//             return total * .20;
//         case 'excellent':
//             return total * .30;
//         default:
//             return total * .10;

//     }
// }
//console.log(tipCalculator('excellent', 100))

let element = document.querySelector(".excellent");


function excellent (total){
	var total = prompt("What is your total? ");
	element.style.backgroundColor = "black";
  element.style.color = "pink";
  //element.innerHTML = "Tip 30% "; 
            return total * .30;
}
//element.onclick = excellent;
//console.log(excellent());


 let element1 = document.querySelectorAll(".veryGood");

 function veryGood (total){
 		  var total = prompt("What is your total? ");
 //	element1.style.backgroundColor = "black";
  // element1.style.color = "green";
  //element1.innerHTML = "Tip 15% "; 
            return total * .20;
 }
// element1.onclick = veryGood;
 //console.log(veryGood());
