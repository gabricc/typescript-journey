# TypeScript Union Types Documentation

This document explains Union Types in TypeScript, a powerful feature that allows a variable to hold multiple types of values.

## 1. Basic Union Types
```typescript
let score: number | string = 33;

score = 44;      // Valid
score = "55";    // Also valid
```
Key concepts:
- Union type is defined using the `|` operator
- Variable can hold any of the specified types
- Type checking ensures only allowed types are assigned

Here, we're telling TypeScript that `score` can be either a number or a string. This is useful when a value could legitimately be of different types, like an ID that could be either numeric or string-based.

## 2. Union Types with Custom Types
```typescript
type User4 = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let gabriel: User4 | Admin = {name: "gabriel", id: 1}
gabriel = {username: "gabriel", id: 1}  // Also valid
```
This demonstrates:
- Union types with complex type aliases
- Ability to switch between different object structures
- Type checking for object properties

In this example, we're creating a variable that can hold either a User4 or an Admin type. TypeScript will ensure that the object assigned matches at least one of these types completely. This is particularly useful when dealing with different but related types of data.

## 3. Function Parameters with Union Types
```typescript
function getDbId(id: number | string){
    console.log(`DB id is: ${id}`);
}

getDbId(3)      // Valid
getDbId("3")    // Also valid
```

Here, we're creating a flexible function that can accept either a number or string as an ID. This is a common pattern when working with databases where IDs might be of different types.

## 4. Type Narrowing with Union Types
```typescript
function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()  // Valid - TypeScript knows id is string here
    }    
}
```
Important concepts:
- Type narrowing using type guards
- `typeof` operator for type checking
- TypeScript's control flow analysis
- Safe access to type-specific methods

This example shows how TypeScript uses control flow analysis to understand when it's safe to use type-specific methods. Inside the if block, TypeScript knows that `id` must be a string, so string methods are available.

## 5. Union Types in Arrays
```typescript
const data1: number[] = [1, 2, 3]                    // Only numbers
const data2: string[] = ["1", "2", "3"]              // Only strings
const data3: (number | string)[] = ["1", 2, 3]       // Numbers or strings
```
Shows:
- Arrays with single types
- Arrays that can contain multiple types
- Proper syntax for union types in arrays

Notice how `data3` can contain both numbers and strings in any order. This is different from `data1` and `data2` which can only contain one type. The parentheses in `(number | string)[]` are important - they tell TypeScript that each element can be either type.

## 6. Literal Types with Unions
```typescript
let seatAllotment: "aisle" | "window" | "middle"
seatAllotment = "aisle"    // Valid
seatAllotment = "crew"     // Error: Type '"crew"' is not assignable
```
Demonstrates:
- Union of literal values
- Strict type checking for specific values
- Error prevention for invalid values

In this case, we're using union types with literal values to create a type that can only be one of these three specific strings. This is great for when you have a fixed set of allowed values, like an enum.

## Best Practices

1. **Type Narrowing**
```typescript
function processValue(value: string | number) {
    if (typeof value === "string") {
        // String operations
        return value.toUpperCase();
    } else {
        // Number operations
        return value.toFixed(2);
    }
}
```

This pattern shows how to safely work with union types by checking the type before performing type-specific operations.

2. **Discriminated Unions**
```typescript
type Circle = {
    kind: "circle";
    radius: number;
}

type Square = {
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}
```

Here we're using a 'discriminator' property (`kind`) to help TypeScript determine which type we're working with. This is a powerful pattern for handling different but related types.

## Common Use Cases

1. **Optional Parameters**
```typescript
function printId(id: number | undefined) {
    if (id === undefined) {
        console.log("No ID provided");
    } else {
        console.log(`ID: ${id}`);
    }
}
```

This pattern is used when a value might not be available, making it optional but type-safe.

2. **API Responses**
```typescript
type ApiResponse = {
    data: string | null;
    error?: string;
}
```

A common pattern in API responses where data might be null and errors are optional.

3. **Configuration Objects**
```typescript
type Config = {
    port: number | string;
    environment: "development" | "production";
    database: string | { host: string, port: number };
}
```

Shows how union types can make configuration objects more flexible while maintaining type safety.

## Gotchas and Tips

1. **Working with Methods**
- Always narrow types before using type-specific methods
- Use type guards to ensure type safety
- Remember that union types only allow methods common to all types

2. **Type Inference**
```typescript
let arr = [1, "string", true];  // Type: (number | string | boolean)[]
```

TypeScript automatically infers the union type based on the array contents.

3. **Null Safety**
```typescript
function process(value: string | null) {
    return value?.toLowerCase() ?? "default";
}
```

Shows how to safely handle potentially null values using the optional chaining and nullish coalescing operators.

## Advanced Patterns

1. **Type Predicates**
```typescript
function isString(value: unknown): value is string {
    return typeof value === "string";
}
```

Type predicates allow you to create custom type guards that TypeScript can understand and use for type narrowing.

2. **Exhaustiveness Checking**
```typescript
type Status = "pending" | "completed" | "failed";

function processStatus(status: Status) {
    switch (status) {
        case "pending":
            return "Processing...";
        case "completed":
            return "Done!";
        case "failed":
            return "Error";
        default:
            const _exhaustiveCheck: never = status; // Ensures all cases are handled
            return _exhaustiveCheck;
    }
}
```

This pattern ensures that all possible values in a union type are handled, making your code more maintainable and error-resistant.
