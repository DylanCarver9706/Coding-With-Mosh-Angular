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

let a: number
let b: boolean
let c: string
let d: any
let e: number[] = [1, 2, 3]
let f: any[] = [1, true, 'a', false]

const ColorRed = 0
const ColorGreen = 1
const ColorBlue = 2

// doing this sets red to 0, Green to 1, and so on in the object
enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 }
let backgroundColor = Color.Red