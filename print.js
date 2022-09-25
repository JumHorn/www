/*
%s – Format as a string.
%i – Format as an integer.
%f – Format as a floating point value.
%O – Format as a JavaScript object.
%o – Format as a DOM element.
%c – Format as a CSS rule, which is applied to the emitted log line.
*/

console.log("%d,%f", 8, 8.1)

// format with pading
// prefix(integer width)
let number = 3;
let val = number.toString().padStart(3, '0');
// suffix(float precision)
val = number.toFixed(3)
