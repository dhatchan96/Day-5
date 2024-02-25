class Circle {
    constructor(radius =1.0, color='red') {
        this.color = color;
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    toString() {
        return `Circle with radius ${this.radius} and color ${this.color}`;
    }

    getArea() {
        return Math.PI * (this.radius * this.radius);
    }

    getCircumference() {
        return 2 * (Math.PI * this.radius);
    }
}

const circle = new Circle(1.0,'red');

console.log(circle.radius);

circle.radius = 2.0;

console.log(circle.radius);

console.log(circle.toString());

console.log(circle.getArea());

console.log(circle.getCircumference());