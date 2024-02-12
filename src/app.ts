// showHello('greeting', 'TypeScript');

// function showHello(divName: string, name: string) {
//     const elt = document.getElementById(divName);
//     elt!.innerText = `Hello from ${name}`;
// }


/////////// task 1


function getAllBooks() {
    const books = [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false},
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ]
    return books;
}

console.log(getAllBooks())
///////////////////////////////////////////////////////////////////////////  task 2-3

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular
}

const books = [
    { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.HTML },
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.TypeScript }
];

function logFirstAvailable(books: any[]) {
    console.log('Кількість книг: ' + books.length)
    const firstAvailableBook = books.find(book => book.available);
    if (firstAvailableBook) {
        console.log('Перша доступна книга: ' + firstAvailableBook.title)
    } else {
        console.log('Немає книг')
    }
}

logFirstAvailable(books);


///////////////////////////////////////////////////////////////////////////// task 4

function getBookTitlesByCategory(category: Category) {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
}


///////////////////////////////////////////////////////////////////////////// task 5

/* 
Реалізуйте функцію logBookTitles(), яка повинна приймати масив рядків та виводити його в консоль. Викличте функції getBookTitlesByCategory() та logBookTitles().
*/


///////////////////////////////////////////////////////////////////////////// task 6

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    const book = books[index];
    return [book.title, book.author];
}

const bookIndex = 1;
const [title, author] = getBookAuthorByIndex(bookIndex);
console.log('Book:', title, ',', 'Author:', author);


///////////////////////////////////////////////////////////////////////////// task 7

/* 
Реалізуйте функцію calcTotalPages(), яка повинна підраховувати кількість сторінок книг у трьох бібліотеках міста, використовуючи такі дані:

 
[

{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },

{ lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },

{ lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }

];

Для підрахунків використовуйте тип bigint.

*/


