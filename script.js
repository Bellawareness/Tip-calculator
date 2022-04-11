//How the idea started I wanted a simplier functional tip website. 
//possible ideas currency and answer in spanish, round to decimal 2
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
	var bill = Number(prompt(" ¿Cual es tu total? - What is your total? "));
	//element.style.backgroundColor = "black";
  //element.style.color = "pink";
  element.innerHTML = "Tip 30% "; 
    let amount = (bill * .30).toFixed(2); 
	 let totalbill = (+bill + +amount);

														 
console.log('Hicieron todo lo posible por ti y se lo merecen, dales una propina : $'+ amount + ' Tu total es: $' +  totalbill);

}
//element.onclick = excellent;
//console.log(excellent());


 let element1 = document.querySelector(".great");

 function great (){
	var bill = Number(prompt("¿Cual es tu total? - What is your total? "));
	    let amount = (bill * .20).toFixed(2); 
	 let totalbill = (+bill + +amount);

  element1.innerHTML = "Tip 20% "; 
	 
	 
	 console.log('Lo intentaron por ti y se lo merecen, dales propina: $'+ tip + ' Tu total es $:' +  totalbill);
 }
// element1.onclick = veryGood;
 //console.log(veryGood());


 let element2 = document.querySelector(".good");

 function good (){
var bill = Number(prompt("¿Cual es tu total? - What is your total? "));
	   let amount = (bill * .15).toFixed(2); 
	 let totalbill = (+bill + +amount);
  element2.innerHTML = "Tip 15% "; 
	 
	 
	 console.log('Hicieron un buen trabajo y se lo merecen, dales propina: $'+ amount + ' Tu total es: $' +  (totalbill));
 }
// element1.onclick = veryGood;
 //console.log(veryGood());


 let element3 = document.querySelector(".bad");

 function bad (){
	 var bill = Number(prompt("¿Cual es tu total? - What is your total? "));
   let amount = (bill * .05).toFixed(2); 
	 let totalbill = (+bill + +amount);
  element3.innerHTML = "Tip 5% "; 
	 
	 
	 console.log('Hicieron un trabajo terrible y apenas se lo merecen, déles una propina:$'+ amount + ' Tu total es: $' +  (totalbill));
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




//created an object with list of attributes 
const Iam = {
  Name: "Bella",
  Skills : "CSS, HTML, Javascript and Git/Github.",

  //a function to call list and input info needed for homework 
  //considering translating in spanish 
  myPortfoilo : function() {
    return "Hi, it's Bella I am enhancing my skills by participating in Google's UX Designer Certificate course. I recently learned " + this.Skills + " You may see my potfolio at the link below" ; 
  }
};


//print to console t
//console.log(Iam.myPortfoilo());



//code to take log answers to html in a typewriter effect

var i = 0;
var txt = Iam.myPortfoilo();
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("thediv").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
