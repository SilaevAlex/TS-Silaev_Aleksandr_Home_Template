function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: string; 
}

const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: 'Software' },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: 'Software' },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: 'Software' },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: 'Software' }
];

console.log(purge(inventory));

const numericArray: number[] = [1, 2, 3, 4, 5];
console.log(purge(numericArray));

const purgeNumbers = purge<number>;
console.log(purgeNumbers([1, 2, 3, 4, 5]));
console.log(purgeNumbers(['a', 'b', 'c', 'd', 'e']));

interface Magazine {
    title: string;
    publisher: string;
}

class Shelf<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }
}

const bookShelf = new Shelf<Book>();

inventory.forEach(book => {
    bookShelf.add(book);
});

console.log(bookShelf.getFirst().title);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

const magazineShelf = new Shelf<Magazine>();

magazines.forEach(magazine => {
    magazineShelf.add(magazine);
});

console.log(magazineShelf.getFirst().title);

interface CallbackFn<T> {
    (err: Error | null, data: T | null): void;
}

function fetchData(callback: CallbackFn<string>): void {
    const data: string = "Отримані дані";
    callback(null, data);
}

fetchData((err, data) => {
    if (err) {
        console.error('Error:', err.message);
    } else {
        console.log('Data:', data);
    }
});



// HW - 10

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: string; // Assuming Category is a predefined enum or constant
}

interface Magazine {
    title: string;
    publisher: string;
}

class Shelf {
    private items: (Book | Magazine)[] = [];

    add(item: Book | Magazine): void {
        this.items.push(item);
    }

    getFirst(): Book | Magazine {
        return this.items[0];
    }

    printTitles(): void {
        this.items.forEach(item => {
            console.log(item.title);
        });
    }

    find(identifier: number | string): Book | Magazine | undefined {
        if (typeof identifier === 'number') {
            return this.items.find(item => (item as Book).id === identifier);
        } else if (typeof identifier === 'string') {
            return this.items.find(item => (item as Book).author === identifier);
        } else {
            return undefined;
        }
    }
}
