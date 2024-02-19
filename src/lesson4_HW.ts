
enum Category {
    JavaScript = 'Javacript',
    CSS = 'CSS',
    HTML = 'HTML',
    TypeScript = 'TypeScript',
    Angular = 'Angular',
}

interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

// task 2
function printBook(book: IBook): void {
    console.log(`${book.title} by ${book.author}`);
}

// task 3
const myBook: IBook = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS, // Assuming Category is defined somewhere
    pages: 200,
    markDamaged: reason => {
        console.log(`Damaged: ${reason}.`);
    },
};
printBook(myBook);


if (myBook.markDamaged) {
    myBook.markDamaged('Missing back cover');
}

// task 7
interface DamageLogger {
    (reason: string): void;
}

// task 9
interface Person {
    name: string;
    email: string;
}

// task 10
interface Author extends Person {
    numBooksPublished: number;
}

// task 11
interface Librarian extends Person {
    department: string;
    assistCustomer(custName: string, bookTitle: string): void;
}