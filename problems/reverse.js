// Given a 32-bit signed integer, reverse digits of an integer.

var reverse = function(x) {
  if (x.toString().split("")[0] === "-") {
    let num = Number(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
        .split("-")
        .reverse()
        .join("-")
    );

    return num < 2147483647 && num > -2147483648 ? num : 0;
  }

  let num = Number(
    x
      .toString()
      .split("")
      .reverse()
      .join("")
  );

  return num < 2147483647 && num > -2147483648 ? num : 0;
};
