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

### Boolean Type
```typescript
let isLoggedIn: boolean = false;
```
- Can only be `true` or `false`
- Useful for conditional logic
- Common in flag variables

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

## 3. Additional Important Types

### Null and Undefined
```typescript
let notDefined: undefined = undefined;
let nullValue: null = null;
```

### Void Type
```typescript
function logMessage(msg: string): void {
    console.log(msg);
}
```

### Never Type
```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

### Object Type
```typescript
let user = {name: "hitesh", age: 10}
```
TypeScript features:
- Type inference for object properties
- Automatic property completion
- Type checking for property access

## 4. Type Inference
TypeScript can automatically determine types:
```typescript
let inferredString = "This is a string"; // Type: string
let inferredNumber = 42; // Type: number
let inferredBoolean = true; // Type: boolean
```

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

## 6. Union Types
```typescript
let userInput: string | number;
userInput = "Hello"; // Valid
userInput = 42; // Also valid
```

## 7. Literal Types
```typescript
let alignment: "left" | "right" | "center";
alignment = "left"; // Valid
alignment = "top"; // Error!
```

## 8. Type Aliases
```typescript
type Point = {
    x: number;
    y: number;
};

let coordinates: Point = { x: 10, y: 20 };
```

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

## TypeScript Compiler Commands
```bash
# Compile a TypeScript file
tsc filename.ts

# Watch mode
tsc filename.ts --watch

# Compile with specific configuration
tsc --project tsconfig.json
```

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
