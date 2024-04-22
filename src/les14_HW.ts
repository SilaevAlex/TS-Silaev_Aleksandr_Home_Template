function Memoize() {
    const cache: Record<string, number> = {};
    return function <T>(
        originalMethod: (value: number) => number,
        context: { kind: string },
    ) {
        if (context.kind !== 'method') throw new Error('');
        function replaceWithValue(this: T, value: number): number {
            const key = String(value);
            if (key in cache) {
                return cache[key];
            } else {
                const calculate: number = originalMethod.apply(this, [value]);
                cache[key] = calculate;
                return calculate;
            }
        }
        return replaceWithValue;
    };
}

class Calculations {
    @Memoize()
    double(value: number): number {
        return value * 2;
    }
}

function Debounce(delay: number = 0) {
    let timer: ReturnType<typeof setTimeout>;
    return function <T>(
        originalMethod: (...args: any[]) => void,
        context: { kind: string },
    ): (...args: any[]) => void {
        if (context.kind !== 'method') throw new Error('');
        return function(this: T, ...args: any[]): void {
            clearTimeout(timer);
            timer = setTimeout(() => originalMethod.apply(this, args), delay);
        };
    };
}

class DebouncedActions {
    @Debounce(5000)
    executeAfterDelay(): void {
        console.log('Debounced');
    }
}

const actions = new DebouncedActions();
actions.executeAfterDelay();