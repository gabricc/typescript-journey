# TypeScript Project Structure

This project demonstrates a basic TypeScript project setup with a development server. Here's an explanation of the project structure and its key components.

## Project Structure

```
03tsStructure/
├── src/
│   ├── index.ts        # Main TypeScript source file
│   ├── myGenerics.ts   # Demonstrates TypeScript generics
│   ├── abstractClass.ts # Shows abstract class implementation
│   └── second.ts       # Additional TypeScript examples
├── docs/               # Documentation directory
│   ├── classes.md      # Documentation about TypeScript classes
│   └── type-narrowing.md # Documentation about type narrowing
├── dist/               # Compiled JavaScript output
│   └── index.js        # Compiled version of index.ts
├── index.html          # HTML file that loads the compiled JS
├── package.json        # Project configuration and dependencies
└── tsconfig.json       # TypeScript compiler configuration
```

## Key Files Explained

### 1. Source Files

#### `myGenerics.ts`
- Demonstrates TypeScript generics implementation
- Includes generic functions with type parameters
- Shows different approaches to type safety:
  - Basic type union functions
  - Generic functions with type parameters
  - Generic arrow functions
  - Interface usage with generics

#### `abstractClass.ts`
- Implements abstract class concepts
- Shows inheritance with the `TakePhoto` abstract class
- Demonstrates abstract method implementation in `Instagram` class
- Includes constructor parameter inheritance

### 2. Documentation Files

#### `docs/classes.md`
- Explains TypeScript classes and object-oriented concepts
- Covers class instantiation and the `new` keyword
- Details constructors and instance creation
- Best practices for class implementation

#### `docs/type-narrowing.md`
- Explains TypeScript type narrowing techniques
- Covers various type guards:
  - typeof guards
  - instanceof checks
  - in operator
  - type predicates
  - discriminated unions
- Best practices for type safety

### 3. `package.json`
```json
{
  "name": "03purets",
  "version": "1.0.0",
  "scripts": {
    "start": "lite-server"
  },
  "dependencies": {
    "lite-server": "^2.6.1"
  }
}
```
- Defines project metadata and dependencies
- Contains npm scripts for running the project
- Uses `lite-server` for development server with auto-reload

### 4. `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "es2016",          // JavaScript version to compile to
    "module": "commonjs",        // Module system to use
    "outDir": "./dist",          // Output directory for compiled files
    "strict": true,              // Enable strict type checking
    "esModuleInterop": true,     // Better import/export compatibility
    "forceConsistentCasingInFileNames": true  // Case sensitivity in imports
  }
}
```
- Configures TypeScript compiler options
- Sets output directory for compiled JavaScript
- Enables strict type checking for better code quality
- Configures module system and target JavaScript version

### 5. `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background-color: #313131;
        }
    </style>
</head>
<body>
    <script src="./dist/index.js"></script>
</body>
</html>
```
- Basic HTML template
- Links to the compiled JavaScript file
- Includes some basic styling

### 6. Source Directory (`src/`)
- Contains TypeScript source files
- `index.ts` is the main entry point
- TypeScript files will be compiled to JavaScript in the `dist/` directory

### 7. Distribution Directory (`dist/`)
- Contains compiled JavaScript files
- Created automatically by TypeScript compiler
- Referenced by `index.html` for running the application

## How It Works

1. **Development Flow**:
   - Write TypeScript code in `src/` directory
   - TypeScript compiler watches for changes and compiles to `dist/`
   - `lite-server` serves the application and auto-reloads on changes

2. **Build Process**:
   - TypeScript files are compiled according to `tsconfig.json` settings
   - Output is generated in the `dist/` directory
   - HTML file loads the compiled JavaScript

3. **Running the Project**:
   ```bash
   # Install dependencies
   npm install

   # Start development server
   npm start
   ```

## Best Practices

1. **Source Organization**:
   - Keep all TypeScript files in `src/`
   - Use meaningful file names
   - Create subdirectories for different modules if needed

2. **Configuration**:
   - Customize `tsconfig.json` based on project needs
   - Keep `strict: true` for better type safety
   - Add necessary compiler options as project grows

3. **Development**:
   - Use the development server for live reload
   - Check compiled output in `dist/` when needed
   - Keep source maps enabled for debugging

## Common Commands

```bash
# Compile TypeScript
tsc

# Compile and watch for changes
tsc --watch

# Start development server
npm start
```

This structure provides a solid foundation for TypeScript development with live reload capabilities and proper separation of source and compiled code.
