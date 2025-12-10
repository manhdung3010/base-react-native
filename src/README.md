# Project Structure

This directory contains the main source code for the React Native application, organized following clean architecture principles.

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Common components used across the app
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── StyledTest.tsx
│   │   └── NativeWindTest.tsx
│   └── ui/             # UI-specific components
│       └── IconSymbol.tsx
├── views/              # Screen components (Views)
│   ├── home/           # Home screen
│   │   └── HomeView.tsx
│   ├── settings/       # Settings screen
│   │   └── SettingsView.tsx
│   └── explore/        # Explore screen
│       └── ExploreView.tsx
├── hooks/              # Custom React hooks
│   ├── useApi.ts
│   └── useColorScheme.ts
├── stores/             # State management (Zustand stores)
│   ├── useAppStore.ts
│   └── useAuthStore.ts
├── services/           # API services and external integrations
│   └── api.ts
├── utils/              # Utility functions and helpers
│   ├── helpers.ts
│   └── storage.ts
├── constants/          # App constants and configuration
│   └── colors.ts
├── types/              # TypeScript type definitions
└── assets/             # Static assets (images, fonts, etc.)
```

## Architecture Principles

### 1. **Separation of Concerns**
- **Views**: Screen components that handle UI logic
- **Components**: Reusable UI components
- **Stores**: State management logic
- **Services**: External API calls and integrations
- **Utils**: Helper functions and utilities

### 2. **Component Organization**
- **Common Components**: Shared across multiple screens
- **UI Components**: Specific UI elements and design system components

### 3. **View Organization**
- Each screen has its own directory under `views/`
- Screen components are named with `View` suffix (e.g., `HomeView.tsx`)

### 4. **Import Conventions**
- Use relative imports within the `src/` directory
- Use index files for clean imports
- Example: `import { HomeView } from '../../src/views';`

## Styling Guidelines

### NativeWind Usage
- All styling is done using NativeWind (Tailwind CSS for React Native)
- Use `className` prop for styling components
- Avoid inline styles and StyleSheet.create()

### Example:
```tsx
<View className="flex-1 bg-white p-4">
  <Text className="text-lg font-bold text-gray-900">
    Hello World
  </Text>
</View>
```

## Best Practices

1. **Component Naming**: Use PascalCase for components (e.g., `HomeView`, `Button`)
2. **File Naming**: Use PascalCase for component files (e.g., `HomeView.tsx`)
3. **Directory Naming**: Use kebab-case for directories (e.g., `use-color-scheme`)
4. **Export Pattern**: Use named exports for components
5. **TypeScript**: Always use TypeScript for type safety
6. **Comments**: Add JSDoc comments for complex functions and components

## Adding New Features

### Adding a New Screen:
1. Create a new directory under `views/` (e.g., `views/profile/`)
2. Create the view component (e.g., `ProfileView.tsx`)
3. Add the screen to the navigation in `app/(tabs)/_layout.tsx`
4. Export from `views/index.ts`

### Adding a New Component:
1. Determine if it's common or UI-specific
2. Create the component in the appropriate directory
3. Add to the appropriate index file
4. Use NativeWind for styling

### Adding a New Hook:
1. Create the hook in `hooks/` directory
2. Use descriptive names with `use` prefix
3. Add TypeScript types for parameters and return values 