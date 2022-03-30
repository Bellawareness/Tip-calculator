//How the idea started I wanted a simplier functional tip website. 
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
//

let element = document.querySelector(".excellent");

function excellent (){
	var total = prompt("What is your total? ");
	//element.style.backgroundColor = "black";
  //element.style.color = "pink";
  element.innerHTML = "Tip 30% "; 
              
console.log('They went above and beyond for you and they deserve it. Tip them : $'+ Math.floor(total)* .30);

}
//element.onclick = excellent;
//console.log(excellent());


 let element1 = document.querySelector(".great");

 function great (total){
 		  var total = prompt("What is your total? ");
 //	element1.style.backgroundColor = "black";
  // element1.style.color = "green";
  element1.innerHTML = "Tip 20% "; 
	 
	 console.log('They tried  for you and they deserve it. Tip them : $'+ (total)* .20);
 }
// element1.onclick = veryGood;
 //console.log(veryGood());


 let element2 = document.querySelector(".good");

 function good (total){
 		  var total = prompt("What is your total? ");
 //	element1.style.backgroundColor = "black";
  // element1.style.color = "green";
  element2.innerHTML = "Tip 15% "; 
	 
	 console.log('They did a good job and they deserve it. Tip them : $'+ (total)* .15);
 }


 let element3 = document.querySelector(".bad");

 function good (total){
 		  var total = prompt("What is your total? ");
 //	element1.style.backgroundColor = "black";
  // element1.style.color = "green";
  element3.innerHTML = "Tip 10% "; 
	 
	 console.log('They did a terrible job and barely deserve it. Tip them : $'+ (total)* .10);
 }


//code to take log answers to html 

(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
      logger.innerHTML += arguments[i] + '<br />';
        }
      }
    }
})();
