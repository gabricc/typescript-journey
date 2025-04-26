# TypeScript Fundamentals Documentation

This document provides a comprehensive introduction to TypeScript, including basic types, variables, type inference, and important concepts for beginners.

## 1. Basic Types and Variables

### String Type
```typescript
let greeting: string = "Hello Hitesh";
greeting.toUpperCase();
```
Key points:
- Explicit type annotation using `: string`
- Access to all string methods with TypeScript's intellisense
- String literals can use single or double quotes

In this example, we're explicitly telling TypeScript that `greeting` must be a string. This means we get access to all string methods (like `toUpperCase`), and TypeScript will prevent us from assigning any non-string values to this variable.

### Number Type
```typescript
let userId: number = 334455;
```
Number type includes:
- Integers
- Floating point numbers
- Binary (e.g., `0b1010`)
- Octal (e.g., `0o744`)
- Hexadecimal (e.g., `0xf00d`)

Here, TypeScript ensures that `userId` can only contain numeric values. This includes all the various number formats that JavaScript supports, from simple integers to complex number systems like binary and hexadecimal.

### Boolean Type
```typescript
let isLoggedIn: boolean = false;
```
- Can only be `true` or `false`
- Useful for conditional logic
- Common in flag variables

When we declare a boolean variable like this, TypeScript ensures it can only ever be `true` or `false`. Any attempt to assign other values (like numbers or strings) will result in a compilation error.

## 2. The 'any' Type
```typescript
let hero;
function getHero(){
    return "thor"
    //return true
    //return 200
}
hero = getHero()
```
Important concepts:
- `any` type is implicitly assigned when no type is specified
- Allows values of any type to be assigned
- Bypasses TypeScript's type checking
- Should be avoided when possible
- Use `noImplicitAny` in tsconfig to prevent implicit `any`

The `any` type essentially turns off TypeScript's type checking. In this example, `hero` can accept any return value from `getHero()` because it's implicitly typed as `any`. This is generally considered unsafe and should be avoided unless absolutely necessary.

## 3. Additional Important Types

### Null and Undefined
```typescript
let notDefined: undefined = undefined;
let nullValue: null = null;
```

These are special types in TypeScript. `undefined` represents a variable that hasn't been assigned a value, while `null` represents an intentional absence of any value. They're different from other types and help catch common JavaScript runtime errors.

### Void Type
```typescript
function logMessage(msg: string): void {
    console.log(msg);
}
```

The `void` type is used for functions that don't return anything. It's TypeScript's way of saying "this function performs an action but doesn't produce a value."

### Never Type
```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

The `never` type represents values that never occur. In this case, the function never returns because it always throws an error. This is useful for functions that never complete normally.

### Object Type
```typescript
let user = {name: "hitesh", age: 10}
```
TypeScript features:
- Type inference for object properties
- Automatic property completion
- Type checking for property access

TypeScript automatically infers the shape of this object, creating what's called a "structural type." It knows that `user` must always have a `name` string and an `age` number.

## 4. Type Inference
TypeScript can automatically determine types:
```typescript
let inferredString = "This is a string"; // Type: string
let inferredNumber = 42; // Type: number
let inferredBoolean = true; // Type: boolean
```

Here, TypeScript is smart enough to figure out the types based on the values we assign. This is called type inference, and it helps write cleaner code while maintaining type safety.

## 5. Type Assertions
Two ways to assert types:
```typescript
// Using angle bracket syntax
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// Using 'as' syntax (preferred in JSX)
let otherValue: any = "another string";
let otherLength: number = (someValue as string).length;
```

Type assertions are like type casts in other languages. They tell TypeScript "trust me, I know this value is of type X." They don't change the runtime type, only how TypeScript treats the value during compilation.

## 6. Union Types
```typescript
let userInput: string | number;
userInput = "Hello"; // Valid
userInput = 42; // Also valid
```

Union types allow a variable to hold values of multiple types. This is useful when a value could legitimately be of different types, like an ID that could be either a string or a number.

## 7. Literal Types
```typescript
let alignment: "left" | "right" | "center";
alignment = "left"; // Valid
alignment = "top"; // Error!
```

Literal types are more specific than just primitive types. Here, `alignment` can only be one of these three specific strings. This is great for values that should only come from a fixed set of options.

## 8. Type Aliases
```typescript
type Point = {
    x: number;
    y: number;
};

let coordinates: Point = { x: 10, y: 20 };
```

Type aliases let you create custom named types. This makes the code more readable and maintainable, especially when you reuse complex types throughout your codebase.

## Best Practices
1. Always define types for variables when TypeScript cannot infer them
2. Avoid using `any` type unless absolutely necessary
3. Enable strict mode in tsconfig.json
4. Use type inference when types are obvious
5. Use explicit type annotations for function parameters and returns

## Common Configurations
### tsconfig.json Essential Settings
```json
{
    "compilerOptions": {
        "target": "es6",
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "sourceMap": true
    }
}
```

These settings help catch more errors and make TypeScript's type checking more strict, leading to more reliable code.

## TypeScript Compiler Commands
```bash
# Compile a TypeScript file
tsc filename.ts

# Watch mode
tsc filename.ts --watch

# Compile with specific configuration
tsc --project tsconfig.json
```

These commands show how to compile TypeScript code into JavaScript. The watch mode is particularly useful during development as it automatically recompiles when files change.

## Debugging Tips
1. Use source maps for debugging
2. Enable strict null checks
3. Use the TypeScript playground for quick testing
4. Use VS Code's TypeScript integration for better development experience

## Common Gotchas
1. Type inference vs explicit typing
2. `undefined` vs `null`
3. Object literal type checking
4. Function parameter optionality
5. Type assertions vs type casting

Understanding these gotchas helps avoid common pitfalls when working with TypeScript's type system.
