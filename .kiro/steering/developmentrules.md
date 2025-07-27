# Development Rules & Guidelines
**Context**
I am a solo developer working on personal/small projects

This is NOT an enterprise-level project

I prefer simple, direct solutions over "best practices"

I'm a vibe coder who values shipping over perfect architecture

**What to do**
-Always assume this is a POC (Proof of Concept) unless explicitly told otherwise
-Keep it simple and direct - don't overthink it
-Start with the most obvious solution that works
-No frameworks unless absolutely necessary
-Prefer single files over multiple files when reasonable
-Hardcode reasonable defaults instead of building configuration systems
-Use Playwrite for error checking and console errors 
-

**What NOT to do**
-Don't add abstractions until we actually need them
-Don't build for imaginary future requirements
-Don't add complex error handling for edge cases that probably won't happen
-Don't suggest design patterns unless the problem actually requires them
-Don't optimize prematurely
-Don't add configuration for things that rarely change

### Implementation Focus
- Prioritize working, production-ready code
- Include proper TypeScript types and interfaces
- Implement performance optimizations by default
- Follow accessibility best practices
- Use the established design system and component patterns

### Code Quality Standards
- Follow the project's naming conventions (PascalCase for components, camelCase for utilities)
- Use path aliases (@/components, @/styles, @/data, @/utils)
- Import design tokens from @/styles/tokens
- Implement responsive design using established breakpoints
- Include proper error handling and loading states
- Add performance optimizations (lazy loading, animation optimization)

### Component Development Pattern
1. Create the main component with core functionality
2. Add TypeScript interfaces and proper typing
3. Implement responsive design using design tokens
4. Add performance optimizations and accessibility features
5. Create demo component only if showcasing interactive features
6. Export appropriately from index files


### Avoid Test Generation Unless Requested
**Rule**: Do not generate or scaffold test files, test cases, or mock data unless the user explicitly asks for tests.

**Rationale**: 
- Focus development effort on core functionality first
- Avoid cluttering the codebase with unnecessary test scaffolding
- Allow developers to choose their preferred testing approach and timing
- Maintain clean, production-focused code generation

**When to Generate Tests**:
- User explicitly mentions "test", "unit test", "integration test", or similar testing keywords
- User specifically requests test coverage for a component or feature
- User asks for testing setup or configuration

**When NOT to Generate Tests**:
- Creating new components or features
- Refactoring existing code
- Adding new functionality
- General development tasks without testing context
