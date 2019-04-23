
var computerChoice; 
var correctAnswer = prompt("do you want to play a game?");
var rockPaperScissors; 

while(correctAnswer === "yes") {

computerChoice = Math.floor(Math.random()*10);
rockPaperScissors = prompt("Rock, Paper, Scissors?");

 if(computerChoice <= 3) {
 	console.log("Computer plays Rock ");
 	if(rockPaperScissors === "paper"){
 		console.log("You Win!");
 		alert("You Win!");		
 	}
 	if(rockPaperScissors === "scissors"){
 			console.log("You Lose!");
 			alert("You Lose!");
 		}
 		if(rockPaperScissors === "rock"){
 			console.log("You Tie!");
 			alert("You Tie!");
 		}
 }
 
else if(computerChoice > 3 && computerChoice <= 6) {
	console.log("Computer Plays Paper");
	if(rockPaperScissors === "scissors"){
 		console.log("You Win!");
 		alert("You Win!");
 	}
 	if(rockPaperScissors === "rock"){
 			console.log("You Lose!");
 			alert("You Lose!");
 		}
 		if(rockPaperScissors === "paper"){
 			console.log("You Tie!");
 			alert("You Tie!");
 		}
}


else if(computerChoice > 6) {
	console.log("Computer Plays Scissors");
	if(rockPaperScissors === "rock"){
 		console.log("You Win!");
 		alert("You Win!");
 	}
 	if(rockPaperScissors === "paper"){
 			console.log("You Lose!");
 			alert("You Lose!");
 		}
 		if(rockPaperScissors === "scissors"){
 			console.log("You Tie!");
 			alert("You Tie!");
 		}
}
correctAnswer = prompt("do you want to play again?");
}
alert("Thanks For Playing!!");
















// switch statements

// let x = 1
// switch(x) {
// 	case 3:
// 		console.log('three')
// 		break;
// 	case 1:
// 		console.log(1);
// 		break;
// 	case 2:
// 		console.log(2);
// 		break;
// 	default:
// 		console.log('default')
// 		break;
// }

	







































