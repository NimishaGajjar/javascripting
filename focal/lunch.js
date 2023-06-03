// const whatToDoForLunch = function (hungry, availableTime) {
//   console.log("I don't know what to do!");
// }

// console.log("I'm hungry and I have 20 minutes for lunch.");
// whatToDoForLunch(true, 20);
// console.log("----");

// console.log("I'm hungry and I have 50 minutes for lunch.");
// whatToDoForLunch(true, 50);
// console.log("----");

// console.log("I'm not hungry and I have 30 minutes for lunch.");
// whatToDoForLunch(false, 30);
// console.log("----");

// console.log("I'm hungry and I have 15 minutes for lunch.");
// whatToDoForLunch(true, 15);


function whatToDoForLunch(hungry, availableTime) {
  if (!hungry) {
    console.log("Hey, Get back to work.");
  }

  else {
    console.log("Have lunch");
    if (availableTime < 20) {
      console.log("pick up a snack or grab something you have ready at home.");
    }
    if (availableTime > 20 && availableTime < 30) {
      console.log("you deserve a break and should take time to cook a tastymeal");
    }
    if (availableTime > 30) {
      console.log("this is an intense program after all and you should probably reconsider.");
    }
  }

}
whatToDoForLunch(false, 40);
whatToDoForLunch(true, 10);
whatToDoForLunch(true, 25);
whatToDoForLunch(true, 39);
