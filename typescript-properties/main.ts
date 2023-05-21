class Point { //class

    constructor(private _x?: number, private _y?: number) { //method with parameters. '?' makes them optional
        // assigning the access modifiers to the constuctor will eliminate this below
        // this._x = _x;
        // this._y = _y;
    }

    draw() { // method
        console.log('X: ' + this._x + ', Y: ' + this._y)
    }

    get x() { // make a method to display a private member; getter method
         return this._x
    }

    set x(value) { // setter method
        if (value < 0)
            throw new Error('Value cannot be less than 0.')

        this._x = value
    }
}

let point= new Point(1, 2); // object; object is an instance of a class
// Property '_x' is private
// point._x = 3
let _x = point.x
point.x = 10
point.draw();