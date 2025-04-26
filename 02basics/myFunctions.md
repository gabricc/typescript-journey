# TypeScript Functions Documentation

This document explains various ways to work with functions in TypeScript, including different function types, return types, and parameter handling.

## 1. Basic Function Declaration
```typescript
function addTwo(num: number){
    return num + 2
}
```
This shows:
- Basic function syntax in TypeScript
- Parameter type annotation
- Implicit return type inference

## 2. Explicit Return Type
```typescript
function addThree(num: number): number{
    return num + 3
}
```
This demonstrates:
- How to explicitly specify return types
- Type checking for return values
- Better code documentation and maintainability

## 3. String Parameter Functions
```typescript
function getUpper(val: string){
    return val.toUpperCase()
}
```
Shows:
- Working with string parameters
- TypeScript's built-in string method type definitions
- Automatic method suggestion for typed parameters

## 4. Multiple Parameters
```typescript
function signUpUser(name: string, email: string, isPaid: boolean){}
```
Demonstrates:
- Multiple parameter handling
- Different parameter types in one function
- Parameter order importance

## 5. Arrow Functions
```typescript
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
```
Shows:
- Arrow function syntax
- Default parameter values
- Function variable declaration

## 6. Function Usage
```typescript
addTwo(5)
getUpper("four")
signUpUser("gabriel", "email@email", true)
loginUser("gabriel", "g@g.com")  // isPaid uses default value
```
Examples of:
- Function invocation
- Parameter passing
- Default parameter behavior

## 7. Conditional Returns
```typescript
function getValue(myVal: number){
    if (myVal > 5) {
        return true
    }
}
```
Demonstrates:
- Conditional return values
- TypeScript's control flow analysis
- Implicit undefined returns

## 8. Arrow Functions with Type Annotations
```typescript
const getHello = (s: string):string => {
    return ""
}
```
Shows:
- Arrow function type annotations
- Return type declarations
- Function expression syntax

## 9. Array Methods with Types
```typescript
const heros = ["thor", "spiderman", "ironman"]
heros.map((hero): string => {
    return `hero is ${hero}`
})
```
Demonstrates:
- Type inference in array methods
- Explicit return types in callbacks
- String template literals

## 10. Special Return Types
```typescript
function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}
```
Shows:
- `void` return type for functions that don't return values
- `never` return type for functions that never complete normally
- Error handling patterns

## Key Concepts
1. **Type Annotations**: Parameters and return values can be explicitly typed
2. **Type Inference**: TypeScript can often infer types automatically
3. **Arrow Functions**: Alternative syntax with the same type checking capabilities
4. **Special Types**: `void` and `never` for specific function behaviors

## Best Practices
1. Be explicit about return types for public APIs
2. Use type inference for simple internal functions
3. Always type function parameters
4. Use arrow functions for callbacks and short functions
5. Leverage default parameters when appropriate

## Common Patterns
1. Function overloading for different parameter types
2. Generic functions for reusable code
3. Callback function typing
4. Async function typing with Promises
