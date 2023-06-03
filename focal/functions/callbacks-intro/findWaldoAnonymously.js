// const findWaldo = function (names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found();   // execute callback
//     }
//   }
// }

// const actionWhenFound = function (i) {
//   console.log("Found Waldo at index " + i + "!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// const findWaldo = (names, found) => {
//   names.forEach(function (item, index) {
//     if (item === "Waldo") {
//       found(index); // execute callback
//     }
//   });
// };

// const actionWhenFound = i => {
//   console.log("Found Waldo at index " + i + "!");
// };

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

findWaldo = (names, found) => {
  names.forEach((item, index) => {
    if (item === "Waldo") {
      found(index); // execute callback
    }
  });
};
findWaldo(["Alice", "Bob", "Waldo", "Winston"], index => {
  console.log("Found Waldo at index " + index + "!");
});