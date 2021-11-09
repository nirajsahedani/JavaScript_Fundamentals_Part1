let dolphinAvg = (96 + 108 + 89) / 3; //293
let koalasAvg = (88 + 91 + 110) / 3; //289

if (dolphinAvg > koalasAvg) {
  console.log("Team Dolphin is winner");
} else if (koalasAvg > dolphinAvg) {
  console.log("Team Koalas is winner");
} else {
  console.log("Match Result Draw");
}

/*
//Koalas win trophy and avg score is greter or eqal 100
let dolphinAvgBns = (97 + 112 + 101) / 3; //310
let koalasAvgBns = (109 + 95 + 123) / 3; //327
*/

/*
//Dolphin win trophy and avg score is greter or eqal 100
let dolphinAvgBns = (97 + 132 + 101) / 3; //330
let koalasAvgBns = (109 + 95 + 123) / 3; //327
*/

//Match result is draw both team avg score is greter or eqal 100
let dolphinAvgBns = (97 + 112 + 101) / 3; //310
let koalasAvgBns = (109 + 95 + 106) / 3; //310

/*
//No team wins Trophy because score is lessthan 100
let dolphinAvgBns = (97 + 100 + 101) / 3; //298
let koalasAvgBns = (100 + 95 + 103) / 3; //298
*/

if (dolphinAvgBns > koalasAvgBns && dolphinAvgBns >= 100) {
  console.log("Team Dolphin is winner");
} else if (dolphinAvgBns < koalasAvgBns && koalasAvgBns >= 100) {
  console.log("Team Koalas is winner");
} else if (
  dolphinAvgBns === koalasAvgBns &&
  (dolphinAvgBns && koalasAvgBns) >= 100
) {
  console.log("Match Result Draw");
} else {
  console.log("No teams wins the Trophy");
}
