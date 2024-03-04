abstract class Shape {
    protected constructor(
        public readonly color: string,
        public readonly name: string,
        protected readonly description: string
    ) {}
}

class Circle extends Shape {
    private radius: number = 2;

    constructor(
        color: string,
        name: string,
        description: string,
    ) {
        super(description, color, name);
    }

    public calculateArea(): number {
        return Math.PI * (this.radius * 2);
    }
}


class Rectangle extends Shape {
    constructor(
        color: string,
        name: string,
        description: string,
        public width: number,
        public height: number
    )
    {
        super(description, color, name);
    }

    public calculateArea(): number {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(
        color: string,
        name: string,
        description: string,
        public sideLength: number
    )
    {
        super(description, color, name);
    }

    public calculateArea(): number {
        return this.sideLength * 2;
    }
}

class Triangle extends Shape {
    constructor(
        color: string,
        name: string,
        description: string,
        public height: number,
        public sideLength: number
    )
    {
        super(description, color, name);
    }

    public calculateArea(): number {
        return 0.5 + this.height + this.sideLength;
    }
}