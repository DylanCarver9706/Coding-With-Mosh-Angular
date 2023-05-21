class Point { //class
    x: number; // field used for storing data
    y: number;

    constructor(x?: number, y?: number) { //method with parameters. '?' makes them optional
        this.x = x
        this.y = y
    }

    draw() { //method
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

let point= new Point(); // object; object is an instance of a class
point.draw();