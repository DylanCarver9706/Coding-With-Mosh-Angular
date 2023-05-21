class Point { //class
    x: number; // field used for storing data
    y: number;
    
    draw() { //method
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }

    getDistance(another: Point) {
        // ...
    }
}

let point= new Point(); // object; object is an instance of a class
point.x = 1;
point.y = 2;
point.draw();