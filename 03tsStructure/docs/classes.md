# TypeScript Classes Documentation

This document explains how classes work in TypeScript, including instantiation, constructors, and the `new` keyword.

## Class Instantiation and the `new` Keyword

### Basic Class Structure
```typescript
class User {
    email: string;
    name: string;
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}
```

### Why We Need `new`

When creating objects from classes, we must use the `new` keyword. Here's what `new` does:

1. **Creates a New Object**: 
   ```typescript
   const gabriel = new User("g@g.com", "gabriel");
   ```
   - Allocates new memory space
   - Creates an empty object
   - Sets up the prototype chain

2. **Binds `this`**:
   ```typescript
   constructor(email: string, name: string) {
       // 'this' refers to the new instance
       this.email = email;  // Works correctly with 'new'
   }
   ```
   Without `new`:
   ```typescript
   // ❌ Wrong - will throw error
   const wrong = User("g@g.com", "gabriel");
   // TypeError: Cannot call class constructor without 'new'
   ```

3. **Sets up Inheritance**:
   - Establishes prototype chain
   - Enables method inheritance
   - Connects instance to class prototype

### The Constructor Function

The constructor is a special method that:
- Runs automatically when creating new instances
- Initializes instance properties
- Can't be called without `new`

```typescript
class Example {
    constructor() {
        console.log("Creating new instance");
    }
}

new Example(); // Prints: "Creating new instance"
Example();     // Error: Cannot call class constructor without 'new'
```

### Best Practices

1. **Always Use `new` with Classes**:
   ```typescript
   // ✅ Correct
   const user = new User("email", "name");
   
   // ❌ Wrong
   const user = User("email", "name");
   ```

2. **Initialize All Properties**:
   ```typescript
   class User {
       email: string;
       name: string;
       constructor(email: string, name: string) {
           this.email = email;
           this.name = name;
       }
   }
   ```

3. **Use Parameter Properties** (shorthand):
   ```typescript
   class User {
       constructor(
           public email: string,
           public name: string
       ) {}
   }
   ```

### Common Gotchas

1. **Forgetting `new`**:
   ```typescript
   // Will throw error
   const user = User("email", "name");
   ```

2. **Uninitialized Properties**:
   ```typescript
   class User {
       email: string; // Must be initialized
       constructor() {
           // Forgot to initialize email
       }
   }
   ```

3. **`this` Context**:
   ```typescript
   class User {
       sayHi() {
           console.log(this.name); // 'this' might be undefined
       }
   }
   ```

### Factory Functions vs Constructors

Sometimes you might see factory functions instead of constructors:

```typescript
// Factory function - doesn't need 'new'
function createUser(email: string, name: string) {
    return {
        email,
        name
    };
}

// Class constructor - needs 'new'
class User {
    constructor(
        public email: string,
        public name: string
    ) {}
}

// Usage
const user1 = createUser("email", "name");    // OK
const user2 = new User("email", "name");      // OK
```

Factory functions are an alternative pattern that doesn't require `new`, but classes provide additional benefits like:
- Prototype-based inheritance
- Instance type checking (`instanceof`)
- Better TypeScript type inference
- More familiar OOP syntax
