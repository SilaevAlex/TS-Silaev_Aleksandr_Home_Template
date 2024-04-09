type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type DeepRequireReadonly<T> = {
    readonly [P in keyof T]-?: T[P] extends object ? DeepRequireReadonly<T[P]> : T[P];
};

type UpperCaseKeys<T> = {
    [P in keyof T as Uppercase<string & P>]: T[P];
};

type ObjectToPropertyDescriptor<T> = {
    [P in keyof T]: PropertyDescriptor;
};

interface NestedObj {
    a: string;
    b: number;
    c: {
        d: boolean;
        e: string[];
    };
}

const readonlyNested: DeepReadonly<NestedObj> = {
    a: "readonly",
    b: 42,
    c: {
        d: true,
        e: ["readonly", "array"],
    },
};

const requiredReadonlyNested: DeepRequireReadonly<NestedObj> = {
    a: "readonly",
    b: 42,
    c: {
        d: true,
        e: ["readonly", "array"],
    },
};

requiredReadonlyNested.a = "dawdwadaw"; 
requiredReadonlyNested.c.d = false; 

type UpperCasedKeysNested = UpperCaseKeys<NestedObj>;

type PropertyDescriptorNested = ObjectToPropertyDescriptor<NestedObj>;