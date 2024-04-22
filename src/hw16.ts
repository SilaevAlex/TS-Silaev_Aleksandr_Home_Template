class Book {
    private title: string;
    private author: string;
    private pages: number;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getPages(): number {
        return this.pages;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(book: Book): void {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }

    listBooks(): Book[] {
        return this.books;
    }
}

class User {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }
}

const book1 = new Book("lorem", "lorem", 180);
const library = new Library();
library.addBook(book1);

const user = new User("lorem", "lorem@lorem.com");
console.log(library.listBooks());
console.log(user.getName());
console.log(user.getEmail());


//2

interface Shape {
    draw(): void;
}

class Circle implements Shape {
    draw(): void {
        console.log("Circle");
    }
}

class Rectangle implements Shape {
    draw(): void {
        console.log("Rectangle");
    }
}

class Ellipse implements Shape {
    draw(): void {
        console.log("Ellipse");
    }
}

const circle = new Circle();
circle.draw();

const rectangle = new Rectangle();
rectangle.draw();

const ellipse = new Ellipse();
ellipse.draw();


//3

abstract class Shape {
    abstract area(): number;
}

class Square extends Shape {
    private sideLength: number;

    constructor(sideLength: number) {
        super();
        this.sideLength = sideLength;
    }

    area(): number {
        return this.sideLength * this.sideLength;
    }
}

class CircleNew extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const square = new Square(5);
console.log("Square:", square.area());

const circle = new CircleNew(3);
console.log("Circle:", circle.area())

//4

interface TaskAssignable {
    assignTask(): void;
}

interface TaskCreatable {
    createTask(): void;
}

interface TaskCompletable {
    completeTask(): void;
}

class Developer implements TaskAssignable, TaskCompletable {
    assignTask(): void {
    }

    completeTask(): void {
    }
}

class Manager implements TaskAssignable, TaskCreatable {
    assignTask(): void {
    }

    createTask(): void {
    }
}

const dev = new Developer();
dev.assignTask();
dev.completeTask();

const manager = new Manager();
manager.assignTask();
manager.createTask();

//5

interface Message {
    sendMessage(message: string): void;
}

class Email implements Message {
    sendMessage(message: string): void {
    }
}

class SMS implements Message {
    sendMessage(message: string): void {
    }
}

class HighLevelModule {
    private messageSender: Message;

    constructor(messageSender: Message) {
        this.messageSender = messageSender;
    }

    sendNotification(message: string): void {
        this.messageSender.sendMessage(message);
    }
}