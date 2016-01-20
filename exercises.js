// Question 1
function radiansToDegrees(radians) {
  return radians / (Math.PI / 180);
}

// Question 2
var num = -180;

console.log(Math.abs(num));

// Question 3
var x = 16777216;

Math.sqrt(x);

// Question 4
console.log(Math.pow(16, 6));

// Question 5
var a = 50.72,
    b = 49.2,
    c = 49.86;

Math.floor(a);
Math.ceil(b);
Math.round(c);

// Question 6
function randomInt(min, max) {
  var difference,
      swap;
  if (min === max) { return min; }
  else if (min > max) {
    swap = min;
    min = max;
    max = swap;
  }
  difference = max - min + 1;
  return Math.floor(Math.random() * difference) + min;
}

console.log(randomInt(1, 10));
