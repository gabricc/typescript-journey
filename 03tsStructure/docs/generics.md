# TypeScript Generics Documentation

This document explains how generics work in TypeScript, including type parameters, generic functions, and interfaces.

## Understanding Generics

Generics allow you to create reusable components that can work with multiple types while maintaining type safety.

### Basic Generic Functions

```typescript
// Without generics (using union types)
function identityOne(val: boolean | number): boolean | number {
    return val
}

// With generics
function identityThree<Type>(val: Type): Type {
    return val
}

// Alternative syntax
function identityFour<T>(val: T): T {
    return val
}
```

### Generic Arrays and Interfaces

```typescript
// Generic arrays
const score: Array<number> = []
const names: Array<string> = []

// Generic interface usage
interface Bottle {
    brand: string,
    type: number
}

// Generic function with array parameter
function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3
    return products[myIndex]
}
```

### Generic Arrow Functions

```typescript
const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 3
    return products[myIndex]
}
```

## Best Practices

1. Use descriptive type parameter names:
   - Use `T` for simple generic types
   - Use more descriptive names like `Type` for clarity
   - Use specific names when the type represents something specific (e.g., `TData` for data types)

2. Keep generic functions simple and focused:
   - Each generic parameter should have a clear purpose
   - Avoid using generics when simple types would suffice

3. Consider constraints when necessary:
   - Use `extends` to limit what types can be used
   - This helps prevent runtime errors and improves type safety
