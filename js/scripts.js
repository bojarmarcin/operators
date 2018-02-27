var a = prompt(' Enter the value of variable a ');
var b = prompt(' Enter the value of variable b ');
var value = (a * a) - (2 * a * b) - (b * b);
console.log(' The value is: ' + value);
if (value > 0) {
    console.log('The value is positive ');
} else if (value == 0) {
    console.log(' The value is zero ');
} else {
    console.log(' The value is negative ');
}
