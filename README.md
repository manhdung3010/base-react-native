# Base Mobile React Native

A modern, clean, and extensible React Native base project built with Expo, TypeScript, and StyleSheet.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on specific platform
npm run android
npm run ios
npm run web
```

## ✨ Features

- **📱 React Native** with Expo framework
- **🔷 TypeScript** for type safety
- **🧭 React Navigation** with Expo Router
- **📦 Zustand** for state management
- **🌐 Axios** for API calls
- **🎨 StyleSheet** for consistent styling
- **🔧 Custom API Hooks** for data fetching
- **📝 ESLint & Prettier** for code quality
- **💾 AsyncStorage** for local storage
- **🎯 Clean Architecture** with modular structure

## 📁 Project Structure

```
base-mobile-react-native/
├── app/                    # Expo Router screens
│   ├── (tabs)/            # Tab navigation
│   │   ├── index.tsx      # Home screen
│   │   ├── explore.tsx    # Settings screen
│   │   └── _layout.tsx    # Tab layout
│   ├── _layout.tsx        # Root layout
│   └── +not-found.tsx     # 404 screen
├── components/            # Reusable components
│   ├── Button.tsx         # Custom button component
│   ├── Input.tsx          # Custom input component
│   ├── ui/                # UI components
│   │   └── IconSymbol.tsx # Icon component
│   └── index.ts           # Component exports
├── constants/             # App constants
│   └── Colors.ts          # Theme colors
├── hooks/                 # Custom hooks
│   ├── useApi.ts          # API hooks
│   └── useColorScheme.ts  # Theme hook
├── services/              # API services
│   └── api.ts             # Axios configuration
├── stores/                # Zustand stores
│   ├── useAuthStore.ts    # Authentication store
│   ├── useAppStore.ts     # App settings store
│   └── index.ts           # Store exports
├── utils/                 # Utility functions
│   ├── helpers.ts         # General helpers
│   └── storage.ts         # Storage utilities
├── babel.config.js        # Babel configuration
├── tsconfig.json          # TypeScript config
└── README.md              # Project documentation
```

## 🛠 Development Scripts

```bash
# Start development
npm start

# Lint code
npm run lint

# Format code
npm run format

# Check formatting
npm run format:check

# Build for production
npm run build:android
npm run build:ios
npm run build:web
```

## 🎨 Styling with StyleSheet

This project uses **React Native StyleSheet** for consistent and maintainable styling.

### Example Usage:

```tsx
import { View, Text, StyleSheet } from 'react-native';

export const MyComponent = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Hello World</Text>
    <View style={styles.card}>
      <Text style={styles.cardText}>Styled with StyleSheet</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    padding: 16,
  },
  cardText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});
```

### Color Palette:

- **Primary**: `#2563eb` (Blue)
- **Secondary**: `#475569` (Gray)
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Yellow)
- **Error**: `#ef4444` (Red)
- **Text Primary**: `#111827` (Dark Gray)
- **Text Secondary**: `#6b7280` (Medium Gray)
- **Background**: `#ffffff` (White)

## 🏗 Architecture

### State Management (Zustand)

```tsx
import { useAuthStore } from '@/stores/useAuthStore';

const { user, isAuthenticated, login, logout } = useAuthStore();
```

### API Layer (Axios + Custom Hooks)

```tsx
import { useUsers } from '@/hooks/useApi';

const { data: users, loading, error, refetch } = useUsers();
```

### Navigation (Expo Router)

File-based routing with type-safe navigation:

```tsx
import { router } from 'expo-router';

// Navigate to screen
router.push('/settings');

// Navigate with params
router.push({
  pathname: '/profile',
  params: { userId: '123' },
});
```

## 📱 Screens

### Home Screen (`app/(tabs)/index.tsx`)

- Welcome message
- User information display
- App settings overview
- Feature list
- Login/Logout functionality

### Settings Screen (`app/(tabs)/explore.tsx`)

- Theme selection (Light/Dark/System)
- Language selection (EN/VI)
- Notification settings
- Biometric authentication toggle
- Account information
- Reset settings

## ⚙️ Configuration

### StyleSheet

Consistent styling with React Native StyleSheet for optimal performance and maintainability.

### ESLint & Prettier

Pre-configured for React Native and TypeScript with consistent code formatting.

### TypeScript

Strict type checking enabled with proper type definitions for all components and APIs.

## 🚀 Building for Production

### Android

```bash
npm run build:android
```

### iOS

```bash
npm run build:ios
```

### Web

```bash
npm run build:web
```

## 📦 Dependencies

### Core

- `expo`: ~53.0.20
- `react`: 19.0.0
- `react-native`: 0.79.5
- `typescript`: ~5.8.3

### Navigation

- `expo-router`: ~5.1.4
- `@react-navigation/native`: ^7.1.16
- `@react-navigation/stack`: ^7.4.4
- `@react-navigation/bottom-tabs`: ^7.4.4

### State Management

- `zustand`: ^5.0.7

### Networking

- `axios`: ^1.11.0

### Storage

- `@react-native-async-storage/async-storage`: ^2.2.0

### Development

- `eslint`: ^9.25.0
- `prettier`: ^3.6.2

## 🔧 Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `npx expo start --clear`
2. **TypeScript errors**: Run `npm run lint` to check for issues
3. **Styling issues**: Ensure StyleSheet is properly configured
4. **Navigation issues**: Check Expo Router configuration

### Performance Tips

- Use `React.memo()` for expensive components
- Implement proper list virtualization for large datasets
- Optimize images and assets
- Use production builds for performance testing

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

Built with ❤️ using React Native and Expo
"# base-react-native" 
