//1 

interface Book {
    title: string;
    author: string;
    year?: number;
  }

type BookRequiredFields = Required<Book>;
//2 

const bookRequiredFields: BookRequiredFields = {
    title: "NewBook",
    author: "Т.Г. Шевченко",
    year: 1833,
  };

//3 

type UpdatedBook = Partial<Book>;

//4 

const updatedBook: UpdatedBook = {
    year: 2024,
}

//5 

interface Author {
    name: string;
    email: string;
    yearOfBirth?: number;
  }

type AuthorWoEmail = Omit<Author, 'email'>;

//6

type CreateCustomerFunctionType = (name: string, age: number) => string;

//7

function createCustomer(name: string, age: number): string {
    return `${name} ${age}`;
}
  
type Params = Parameters<CreateCustomerFunctionType>;
  
let params: Params = ["Alex", 31];
  
const customer = createCustomer(...params);

//8

type fn = (arg1: string, arg2: number, arg3: boolean) => symbol;

//9

type Param1<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : never;
type Param2<T> = T extends (arg1: any, arg2: infer U, ...args: any[]) => any ? U : never;
type Param3<T> = T extends (arg1: any, arg2: any, arg3: infer U, ...args: any[]) => any ? U : never;

type P1 = Param1<fn>; 
type P2 = Param2<fn>;
type P3 = Param3<fn>;