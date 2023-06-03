const raisinAlarmArray = function (cookies) {
  let result = [];
  for (let ing of cookies) {
    if (ing.includes("🍇")) {
      result.push("Raisin Alert");
    } else {
      result.push("All Good!");
    }
  }
  return result;
};


console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));