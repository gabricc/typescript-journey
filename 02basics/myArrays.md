# TypeScript Arrays Documentation

This document explains various ways to work with arrays in TypeScript, including different declaration methods and array operations.

## 1. Array Declaration Syntax
```typescript
const superHeroes: string[] = []
const heroPower: Array<number> = [] // alternative syntax
```
TypeScript provides two ways to declare typed arrays:
1. Using the `type[]` syntax (e.g., `string[]`)
2. Using the generic `Array<type>` syntax
Both methods are equivalent, and it's mostly a matter of personal preference.

## 2. Arrays with Custom Types
```typescript
type User3 = {
    name: string,
    isActive: boolean
}

const allUsers: User3[] = []
```
This demonstrates:
- How to create arrays of custom types
- Using type aliases with arrays
- Type checking for complex object arrays

## 3. Multi-dimensional Arrays
```typescript
const MLModels: number[][] = [
    [255, 255, 255],
    [0, 0, 0]
]
```
This shows:
- How to declare multi-dimensional arrays
- Use case for nested arrays (e.g., matrix operations, image processing)
- Type checking for nested array structures

## 4. Array Operations
```typescript
superHeroes.push("spiderman")
heroPower.push(2)
allUsers.push({name: "name", isActive: true})
```
Examples of type-safe array operations:
- Adding elements with `push()`
- TypeScript ensures type safety for array operations
- Type checking for complex object insertions

## Key Concepts
1. **Type Safety**: TypeScript ensures that only values of the correct type can be added to arrays
2. **Flexible Syntax**: Multiple ways to declare array types
3. **Complex Types**: Arrays can hold primitive types, objects, or even other arrays
4. **Type Inference**: TypeScript can often infer array types from their initialization

## Best Practices
1. Choose a consistent array declaration syntax throughout your project
2. Use type aliases for arrays of complex objects
3. Consider using readonly arrays when the content shouldn't change
4. Be explicit about array types when TypeScript can't infer them correctly

## Common Operations
- `push()`: Add elements to the end
- `pop()`: Remove elements from the end
- `map()`: Transform elements
- `filter()`: Filter elements based on a condition
- `reduce()`: Reduce array to a single value

All these operations maintain type safety in TypeScript.
