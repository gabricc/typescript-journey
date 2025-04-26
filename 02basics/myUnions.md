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

## 3. Function Parameters with Union Types
```typescript
function getDbId(id: number | string){
    console.log(`DB id is: ${id}`);
}

getDbId(3)      // Valid
getDbId("3")    // Also valid
```

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

2. **API Responses**
```typescript
type ApiResponse = {
    data: string | null;
    error?: string;
}
```

3. **Configuration Objects**
```typescript
type Config = {
    port: number | string;
    environment: "development" | "production";
    database: string | { host: string, port: number };
}
```

## Gotchas and Tips

1. **Working with Methods**
- Always narrow types before using type-specific methods
- Use type guards to ensure type safety
- Remember that union types only allow methods common to all types

2. **Type Inference**
```typescript
let arr = [1, "string", true];  // Type: (number | string | boolean)[]
```

3. **Null Safety**
```typescript
function process(value: string | null) {
    return value?.toLowerCase() ?? "default";
}
```

## Advanced Patterns

1. **Type Predicates**
```typescript
function isString(value: unknown): value is string {
    return typeof value === "string";
}
```

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
