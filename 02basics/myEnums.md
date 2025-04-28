# TypeScript Enums Documentation

This document explains TypeScript enums (enumerations), which are a way to define a set of named constants.

## 1. Basic Enum Declaration
```typescript
enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW
}

const hcSeat = SeatChoice.AISLE
```
This demonstrates:
- Creating an enum with distinct values
- Auto-incrementing numeric values (0, 1, 2)
- Type-safe value selection

In this example, we're creating an enum to represent different seat choices. By default, TypeScript assigns numeric values starting from 0. So `AISLE` is 0, `MIDDLE` is 1, and `WINDOW` is 2.

## 2. Custom Enum Values
```typescript
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
```
Shows:
- Assigning specific values to enum members
- Using enums for meaningful constants
- Common use case with HTTP status codes

## 3. String Enums
```typescript
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
```
Demonstrates:
- String-based enum values
- More readable when debugging
- Type safety with explicit values

## Important Concepts

1. **Numeric Enums**
- Default auto-incrementing behavior
- Can assign custom numeric values
- Values can be computed

2. **String Enums**
- Must have explicit string initializers
- More readable in debugging
- No auto-incrementing behavior

3. **Heterogeneous Enums**
```typescript
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
```
- Mix of string and numeric values
- Less common, but sometimes useful

## Use Cases

1. **Fixed Options**
- Menu items
- Configuration options
- Status values
- Direction indicators

2. **Type Safety**
- Prevent invalid values
- IDE autocompletion
- Clear documentation of valid options

## Best Practices

1. **Naming Conventions**
- Use PascalCase for enum names
- Use UPPERCASE for enum members (if they're constant-like)
- Be consistent within your codebase

2. **Value Assignment**
- Use explicit values when order matters
- Use string enums for better debugging
- Consider const enums for performance

3. **Documentation**
- Document the purpose of each enum
- Explain the significance of custom values
- Note any special behaviors

## Common Gotchas

1. **Numeric Enum Bidirectional Mapping**
- Numeric enums create reverse mappings
- Can increase bundle size
- May cause unexpected behavior in comparisons

2. **Const Enums**
```typescript
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
```
- Completely removed during compilation
- More performant but less flexible
- Cannot be used in all scenarios

3. **Type Safety Limitations**
- Numeric enums can accept any number
- Need additional validation for runtime values
- Consider string literals for stricter type checking

## Advanced Patterns

1. **Computed Members**
```typescript
enum FileAccess {
    None = 0,
    Read = 1 << 0,
    Write = 1 << 1,
    ReadWrite = Read | Write
}
```

2. **Enum with Static Methods**
```typescript
enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

namespace Weekday {
    export function isWeekend(day: Weekday) {
        return day === Weekday.Saturday || day === Weekday.Sunday;
    }
}
```

Remember that enums are one of TypeScript's few features that are not just type annotations - they generate actual JavaScript code and exist at runtime.
