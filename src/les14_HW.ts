function Memoize(descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const cache = new Map();

    descriptor.value = function (...args: any[]) {
        const key = JSON.stringify(args);
        if (!cache.has(key)) {
            cache.set(key, originalMethod.apply(this, args));
        }
        return cache.get(key);
    };

    return descriptor;
}

class MyClass {
    @Memoize
    myMethod(arg1: any, arg2: any) {
        return arg1 + arg2;
    }
}

const instance = new MyClass();
console.log(instance.myMethod(1, 2));
console.log(instance.myMethod(2, 5));

function Debounce(delay: number) {
    return function (descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        let timeoutId: NodeJS.Timeout;

        descriptor.value = function (...args: any[]) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                originalMethod.apply(this, args);
            }, delay);
        };

        return descriptor;
    };
}

class MyClass {
    @Debounce(300) 
    myMethod() {
        console.log('Method called');
    }
}

const myClassInstance  = new MyClass();
myClassInstance.myMethod(1, 3); 
myClassInstance.myMethod(2, 5);