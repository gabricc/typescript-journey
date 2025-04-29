# TypeScript Abstract Classes Documentation

This document explains how abstract classes work in TypeScript, including inheritance, abstract methods, and implementation.

## Understanding Abstract Classes

Abstract classes serve as base classes from which other classes may be derived. They may not be instantiated directly and can contain abstract methods that must be implemented by derived classes.

### Basic Abstract Class Structure

```typescript
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void  // Abstract method
    
    getReelTime(): number {    // Concrete method
        return 8
    }
}
```

### Implementing Abstract Classes

```typescript
class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

// Usage
const gcc = new Instagram("", "", 0)
```

## Key Concepts

1. Abstract Methods:
   - Must be implemented by derived classes
   - Don't contain implementation in the abstract class
   - Defined using the `abstract` keyword

2. Constructor Parameters:
   - Can be inherited from the base class
   - Additional parameters can be added in derived classes
   - Must call `super()` with required base class parameters

3. Concrete Methods:
   - Can be defined in abstract classes
   - Provide default implementation
   - Can be overridden by derived classes

## Best Practices

1. Use abstract classes when:
   - You want to share code among several related classes
   - You expect classes that extend the abstract class to have common methods or properties
   - The classes that extend the abstract class need access to modifiers like `protected`

2. Implementation guidelines:
   - Keep abstract methods simple and focused
   - Provide clear documentation for required implementations
   - Use meaningful names for methods and properties
