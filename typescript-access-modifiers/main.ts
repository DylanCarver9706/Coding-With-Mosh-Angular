class Point { //class
    private x: number; // provate access modifier; public by default
    y: number; // field used for storing data

    constructor(x?: number, y?: number) { //method with parameters. '?' makes them optional
        this.x = x;
        this.y = y;
    }

    draw() { //method
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

let point= new Point(1, 2); // object; object is an instance of a class
// Property 'x' is private
point.x = 3
point.draw();