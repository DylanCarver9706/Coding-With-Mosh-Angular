// We get an error because typescript cannot allow this,
// but when we compile to js, it is valid
// typescript catches errors at compile time vs runtime
// let count = 5
// count = 'a'
// *******************************************************
// we can use type annotations to define the stype so it doesn't guess
// let a: number
// a = 1
// a = true
// a = 'a'
// *******************************************************
// Different types are:
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// doing this sets red to 0, Green to 1, and so on in the object
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
