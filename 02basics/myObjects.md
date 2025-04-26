# TypeScript Objects Documentation

This document explains various concepts and examples of working with objects in TypeScript.

## 1. Basic Object Declaration
```typescript
const User = {
    name: "gabriel",
    email: "g@g.com",
    isActive: true
}
```
This demonstrates the basic object literal syntax in TypeScript. TypeScript automatically infers the types of the properties:
- `name` is inferred as string
- `email` is inferred as string
- `isActive` is inferred as boolean

In this example, TypeScript uses type inference to automatically determine the types of each property based on their values. Once these types are inferred, TypeScript will prevent you from assigning values of different types to these properties.

## 2. Function with Object Parameters
```typescript
function createUser({name: string, isPaid: boolean}){}
let newUser = {name: "gabriel", isPaid: false, email: "a@a"}
createUser(newUser)
```
This example shows:
- How to define a function that accepts an object as a parameter
- TypeScript's object parameter type checking
- TypeScript's excess property checking (note that we can pass an object with extra properties)

Here, TypeScript enforces that the function receives an object with at least the specified properties of the correct types. The interesting part is that we can pass an object with additional properties (like `email`) without TypeScript complaining - this is known as structural typing.

## 3. Function Returning an Object
```typescript
function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}
```
This demonstrates:
- Function return type annotation for objects
- Explicit type definition for the returned object
- Object literal return value

In this case, we're explicitly telling TypeScript that this function must return an object with exactly two properties: a string `name` and a number `price`. TypeScript will ensure that the returned object matches this shape exactly.

## 4. Type Aliases
```typescript
type User = {
    name: string;
    email: string;
    isActive: boolean
}
```
Type aliases allow you to:
- Create custom named types
- Reuse type definitions
- Make code more maintainable and readable

This creates a reusable type definition that can be used throughout your code. It's like creating a contract that says "any User object must have these exact properties with these exact types."

## 5. Using Type Aliases in Functions
```typescript
function createUser2(user: User): User{
    return {name: "gabriel", email: "g@g.com", isActive: true}
}
```
This shows:
- How to use type aliases as parameter types
- How to use type aliases as return types
- Type checking for object properties

Here, both the input parameter and return value must conform to the `User` type we defined earlier. TypeScript will verify that all required properties are present and of the correct type both for the input and output.

## 6. Advanced Type Features
```typescript
type User2 = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean
    credcardDetails?: number // optional property
}
```
This example demonstrates several advanced TypeScript features:
- `readonly` modifier: Prevents properties from being changed after initialization
- Optional properties: Using `?` to mark properties that don't have to be present
- Property access control

In this example, the `_id` property can only be set when the object is created and cannot be modified later. The `credcardDetails` property is optional, meaning we can create a valid `User2` object without providing this property.

## 7. Type Intersection
```typescript
type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: string
}
```
This shows how to:
- Create separate type definitions
- Combine multiple types using the `&` operator (intersection types)
- Extend combined types with additional properties

Here we're using type intersection to create a more complex type. A `cardDetails` object must have all properties from both `cardNumber` and `cardDate` types, plus the additional `cvv` property. This is useful for building complex types from smaller, reusable pieces.

## Best Practices Demonstrated
1. Use type aliases for reusable object types
2. Mark properties as readonly when they shouldn't change
3. Use optional properties when appropriate
4. Break down complex types into smaller, reusable pieces
5. Use intersection types to combine multiple type definitions

## Common Gotchas
1. Readonly properties can still be modified in certain circumstances (TypeScript only enforces this at compile time)
2. Excess property checking only works on object literals passed directly to functions
3. Optional properties still need to be checked before use to avoid runtime errors

Remember that TypeScript's type system is structural, meaning that objects don't need to explicitly declare that they implement a type - they just need to have the right shape.
