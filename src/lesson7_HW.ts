//Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.

interface NewInterface {
    [key: string]: number | string;
}


//Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи
interface FuncInterface {
    [key: string]: (...arg: any[]) => any;
}

//Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
interface ArrayInterface {
    [index: number]: string;
    length: number;
}

//Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
interface IndexInterface {
    name: string;
    [key: string]: any;
  }
//Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
interface FirstInterface {
    [key: string]: number | string;
  }
  
  interface ExtendedInterface extends FirstInterface {
    specificProperty: string;
  }

//Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
function checkValues(obj: FirstInterface, criterion: string): boolean {
    for (const key in obj) {
      if (typeof obj[key] !== criterion) {
        return false;
      }
    }
    return true;
  }
  
  const myObject: FirstInterface = {
    key1: 'value1',
    key2: 123456,
    key3: 'value2'
  };
  
  console.log(checkValues(myObject, 'number'));