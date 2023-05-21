// methods cannot be called on data 'any' variable types. Stings are fine
let message
message = 'abs' // mesage variable type = any

// let message = 'abs' = variable type of string
// let endsWithC = message.endsWith('c')

let endsWithC = (<string>message).endsWith('c')
let alternativeWay = (message as string).endsWith('c')