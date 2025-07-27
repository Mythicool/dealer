# Project Structure

## Organization Principles
- Keep related files grouped together
- Separate concerns clearly (business logic, UI, configuration)
- Use descriptive folder and file names
- Maintain consistent naming conventions

## Folder Structure
Update this section as the project structure develops:

```
/
├── src/           # Source code
├── tests/         # Test files
├── docs/          # Documentation
├── config/        # Configuration files
└── scripts/       # Build and utility scripts
```

## File Naming Conventions
- Use kebab-case for file names (my-component.js)
- Use PascalCase for class/component files (MyComponent.js)
- Use descriptive names that indicate purpose
- Group related files with consistent prefixes

## Code Organization
- Keep functions and classes focused on single responsibilities
- Use clear module boundaries and exports
- Organize imports logically (external libraries first, then internal modules)
- Place configuration and constants in dedicated files

## Best Practices
- Avoid deep nesting of folders (max 3-4 levels)
- Keep file sizes reasonable (under 300 lines when possible)
- Use index files to simplify imports from folders
- Document any non-obvious organizational decisions