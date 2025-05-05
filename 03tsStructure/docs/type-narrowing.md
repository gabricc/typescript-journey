# TypeScript Type Narrowing

Type narrowing is a key feature in TypeScript that allows you to refine types within conditional blocks. This document explains various type narrowing techniques and their use cases.

## 1. typeof Type Guards

The `typeof` operator helps narrow down primitive types:

```typescript
function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase();  // TypeScript knows val is string
    }
    return val + 3;  // TypeScript knows val is number
}
```

## 2. Truthiness Narrowing

Checking for null or undefined using truthiness:

```typescript
function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide id")
        return
    }
    id.toLowerCase()  // TypeScript knows id is string
}
```

## 3. The "in" Operator

The `in` operator checks if a property exists on an object:

```typescript
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin  // TypeScript knows account is Admin
    }
    return false
}
```

## 4. instanceof Narrowing

The `instanceof` operator checks if an object is an instance of a class:

```typescript
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString())  // TypeScript knows x is Date
    } else {
        console.log(x.toUpperCase())  // TypeScript knows x is string
    }
}
```

## 5. Type Predicates

Custom type guards using type predicates with `is`:

```typescript
type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet  // TypeScript knows pet is Fish
        return "fish food"
    } else {
        pet  // TypeScript knows pet is Bird
        return "bird food"
    }
}
```

## 6. Discriminated Unions

Using literal types to discriminate between union members:

```typescript
interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width
        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}
```

## Best Practices

1. **Exhaustiveness Checking**:
   ```typescript
   // Using never to ensure all cases are handled
   const _defaultforshape: never = shape
   ```

2. **Type Predicates**:
   - Use descriptive names (e.g., `isFish`)
   - Return boolean with type predicate
   - Avoid type assertions when possible

3. **Discriminated Unions**:
   - Use literal types for discrimination
   - Keep discriminant property names consistent
   - Consider using `switch` statements for better exhaustiveness checking

## Common Gotchas

1. **Type Assertions vs Type Guards**:
   ```typescript
   // ❌ Unsafe type assertion
   const fish = pet as Fish

   // ✅ Safe type guard
   if (isFish(pet)) {
       const fish = pet  // safely narrowed
   }
   ```

2. **Missing Cases in Switch**:
   ```typescript
   // TypeScript will warn about missing cases
   function incomplete(shape: Shape) {
       switch(shape.kind) {
           case "circle":
               return Math.PI * shape.radius ** 2
           // Error: Not all code paths return a value
       }
   }
   ```

3. **Forgetting Return Types**:
   ```typescript
   // ❌ Missing return type
   function isAdmin(user) {
       return "isAdmin" in user
   }

   // ✅ With type predicate
   function isAdmin(user: User | Admin): user is Admin {
       return "isAdmin" in user
   }
   ```

Type narrowing is a powerful feature that helps write type-safe code by allowing TypeScript to understand more specific types within conditional blocks. Use it to write more maintainable and safer code.
