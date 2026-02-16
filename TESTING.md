# TESTING.md

**Last updated**: 2026-02-16

## Test Runner
- **Framework**: Vitest 4.x
- **Environment**: jsdom
- **Setup**: vitest.setup.ts (imports @testing-library/jest-dom)

## Run Commands
```bash
npm test              # Run all tests once
npm run test:watch    # Run in watch mode
npm run test:coverage # Run with coverage report
npm run lint          # ESLint
npm run format:check  # Prettier check
```

## Test Locations
| File | Tests | What it covers |
|------|-------|---------------|
| src/__tests__/app.test.tsx | 3 | Home page renders title, description, disclaimer |
| src/__tests__/stores/session-store.test.ts | 6 | Session store: init, start, record trial, end, reset |
| src/__tests__/stores/user-store.test.ts | 4 | User store: init, set profile, update settings, null guard |

## Current Status
- **Total tests**: 13
- **Passing**: 13/13
- **Test files**: 3
- **Build**: Passes (`npm run build` exits 0)
- **Lint**: Passes (0 errors, 0 warnings)

## Test Pyramid Target
- 70% Unit tests
- 20% Integration tests
- 10% E2E tests (Playwright, future)

## Adding Tests
- Place tests in `src/__tests__/` mirroring the src/ structure
- Use `describe` + `it` pattern with descriptive names
- Use AAA pattern: Arrange, Act, Assert
- For stores: reset state in `beforeEach`
- For components: use @testing-library/react with screen queries
