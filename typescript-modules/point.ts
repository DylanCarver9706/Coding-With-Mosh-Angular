export class Point { //class

    constructor(private x?: number, private y?: number) { //method with parameters. '?' makes them optional
        // assigning the access modifiers to the constuctor will eliminate this below
        // this._x = _x;
        // this._y = _y;
    }

    draw() { // method
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}