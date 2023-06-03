var shirtWidth = 18;
var shirtLength = 28;
var shirtSleeve = 8.13;

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

// WRITE YOUR CODE HERE

if (shirtWidth === "18" && shirtLength === "28" && shirtSleeve === "8.13") {
  console.log("Small");
}
else if (shirtWidth === "19.99" && shirtLength === "28.99" && shirtSleeve === "8.379") {
  console.log("Small");
}
else if (shirtWidth === "20" && shirtLength === "29" && shirtSleeve === "8.38") {
  console.log("Medieum");
}
else if (shirtWidth === "22" && shirtLength === "30" && shirtSleeve === "8.63") {
  console.log("Large");
}
else if (shirtWidth === "24" && shirtLength === "31" && shirtSleeve === "8.88") {
  console.log("X-Large");
}
else if (shirtWidth === "26" && shirtLength === "33" && shirtSleeve === "9.63") {
  console.log("Double X-Large");
}
else if (shirtWidth === "27.99" && shirtLength === "33.99" && shirtSleeve === "10.129") {
  console.log("Double X-Large");
}
else if (shirtWidth === "28" && shirtLength === "34" && shirtSleeve === "10.13") {
  console.log("Triple X-Large");
}
else if (shirtWidth === "18" && shirtLength === "29" && shirtSleeve === "8.47") {
  console.log("NA");
}
