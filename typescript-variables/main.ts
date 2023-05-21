// var number = 1
// let count = 2

function doSomething() {
    // var lets us use i in the scope of the whole function
    // let will not us see i on line 11
    for (var i = 0; i < 5; i++) {
    console.log(i)
    }

    console.log('Finally: ' + i)
}

doSomething()

