class Point { //class

    constructor(private x?: number, private y?: number) { //method with parameters. '?' makes them optional
        // assigning the access modifiers to the constuctor will eliminate this below
        // this.x = x;
        // this.y = y;
    }

    draw() { // method
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

let point= new Point(1, 2); // object; object is an instance of a class
// Property 'x' is private
point.x = 3
point.draw();