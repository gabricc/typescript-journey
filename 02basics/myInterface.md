# TypeScript Interfaces Documentation

This document explains TypeScript interfaces, which define contracts in your code and provide explicit names for type checking.

## 1. Basic Interface Declaration
```typescript
interface User2 {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
}
```
This demonstrates:
- Property definitions with types
- Read-only properties using `readonly`
- Optional properties using `?`
- Basic object shape definition

In this example, we're defining an interface that describes a user object. The `readonly` modifier prevents `dbId` from being changed after creation, and `googleId` is optional.

## 2. Method Definitions in Interfaces
```typescript
interface User2 {
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}
```
Shows:
- Method signature definitions
- Parameter type annotations
- Return type specifications
- Different ways to define methods

Here, we're adding method requirements to our interface. Any object implementing this interface must provide these methods with matching signatures.

## 3. Interface Reopening
```typescript
interface User2 {
    githubToken: string
}
```
Demonstrates:
- Interface extension through reopening
- Adding new properties to existing interfaces
- Declaration merging

TypeScript allows you to add new fields to an interface by redeclaring it. This is called declaration merging, and it's a powerful way to extend interfaces.

## 4. Interface Extension
```typescript
interface Admin extends User2 {
    role: "admin" | "ta" | "learner"
}
```
Shows:
- Interface inheritance
- Literal type unions
- Building complex types from simpler ones

This example shows how to create a new interface that includes all properties from another interface plus its own additions.

## 5. Implementing Interfaces
```typescript
const gabriel: User2 = { 
    dbId: 22, 
    email: "g@g", 
    userId: 1,
    githubToken: "github",
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: string, value: number) => {
        return 10
    }
}
```
Demonstrates:
- Object literal implementation
- Required property implementation
- Method implementation
- Type checking in action

## Important Concepts

1. **Read-only Properties**
- Cannot be changed after initialization
- Provides immutability at compile time
- Helps prevent accidental modifications

2. **Optional Properties**
- Marked with `?`
- May or may not be present
- Must be checked before use

3. **Method Signatures**
- Can be defined in multiple ways
- Must match exactly when implemented
- Can include overloads

## Best Practices

1. **Naming Conventions**
- Use PascalCase for interface names
- Consider prefixing interfaces (e.g., `IUser` or not based on team preference)
- Use descriptive names that indicate purpose

2. **Interface Design**
- Keep interfaces focused and cohesive
- Use extension for specialization
- Consider making properties readonly when appropriate
- Use optional properties sparingly

3. **Type Safety**
- Let TypeScript infer types when possible
- Use strict null checks
- Leverage literal types for more precise definitions

## Common Patterns

1. **API Responses**
```typescript
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}
```

2. **Function Types**
```typescript
interface SearchFunc {
    (source: string, subString: string): boolean;
}
```

3. **Indexable Types**
```typescript
interface StringArray {
    [index: number]: string;
}
```

## Gotchas and Tips

1. **Interface vs Type**
- Interfaces are extendable
- Types are more flexible for unions and primitives
- Interfaces show up better in error messages

2. **Optional vs Undefined**
```typescript
interface User {
    name: string;
    age?: number;        // might not be present
    address: string | undefined;  // must be present, might be undefined
}
```

3. **Readonly Arrays**
```typescript
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
```

Remember that interfaces are purely a TypeScript construct and are removed during compilation to JavaScript. They provide compile-time type checking but have no runtime presence.
