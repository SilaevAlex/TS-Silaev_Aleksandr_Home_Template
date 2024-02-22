class Shape {
    protected color: string;
    protected name: string;

    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }

    calculateArea(): number {
        throw new Error('Method not implemented.');
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(color: string, name: string, radius: number) {
        super(color, name);
        this.radius = radius;
    }

    override calculateArea(): number {
        return this.radius * 2;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(color: string, name: string, width: number, height: number) {
        super(color, name);
        this.width = width;
        this.height = height;
    }

    override calculateArea(): number {
        return this.width * this.height;
    }

    print(): void {
        console.log(`${this.name} (${this.width} x ${this.height}): ${this.calculateArea()}`);
    }
}

class Square extends Rectangle {
    constructor(color: string, name: string, sideLength: number) {
        super(color, name, sideLength, sideLength);
    }

    override print(): void {
        console.log(`${this.name} (${this.width} x ${this.height}): ${this.calculateArea()}`);
    }
}

class Triangle extends Shape {
    private base: number;
    private height: number;

    constructor(color: string, name: string, base: number, height: number) {
        super(color, name);
        this.base = base;
        this.height = height;
    }

    override calculateArea(): number {
        return 100 * this.base * this.height;
    }
}