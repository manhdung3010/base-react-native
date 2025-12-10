import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/common/Button';
import { StyledTest } from '../../components/common/StyledTest';
import { useAppStore } from '../../stores/useAppStore';
import { useAuthStore } from '../../stores/useAuthStore';

export const HomeView = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const { theme, language } = useAppStore();

  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    // Mock login
    useAuthStore.getState().login(
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
      },
      'mock-token'
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" contentContainerStyle={{ padding: 20 }}>
        {/* Test NativeWind */}
        <View className="bg-red-500 p-4 mb-4 rounded-lg">
          <Text className="text-white text-center font-bold">
            🎨 NativeWind Test - Nếu bạn thấy background đỏ này thì NativeWind đã hoạt động!
          </Text>
        </View>

        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Base Mobile
          </Text>
          <Text className="text-base text-gray-600 text-center">
            A modern React Native app with TypeScript
          </Text>
        </View>

        <View className="flex-1">
          <View className="bg-white rounded-xl p-5 mb-4 shadow-lg border border-gray-100">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              User Information
            </Text>
            {isAuthenticated && user ? (
              <View className="space-y-2">
                <Text className="text-sm text-gray-600">Name: {user.name}</Text>
                <Text className="text-sm text-gray-600">Email: {user.email}</Text>
              </View>
            ) : (
              <Text className="text-sm text-gray-600">Not logged in</Text>
            )}
          </View>

          <View className="bg-white rounded-xl p-5 mb-4 shadow-lg border border-gray-100">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              App Settings
            </Text>
            <Text className="text-sm text-gray-600 mb-1">Theme: {theme}</Text>
            <Text className="text-sm text-gray-600">Language: {language}</Text>
          </View>

          <View className="bg-white rounded-xl p-5 mb-4 shadow-lg border border-gray-100">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              Features
            </Text>
            <Text className="text-sm text-gray-600 mb-1">✅ TypeScript</Text>
            <Text className="text-sm text-gray-600 mb-1">✅ React Navigation</Text>
            <Text className="text-sm text-gray-600 mb-1">✅ Zustand State Management</Text>
            <Text className="text-sm text-gray-600 mb-1">✅ Axios API Client</Text>
            <Text className="text-sm text-gray-600 mb-1">✅ Custom API Hooks</Text>
            <Text className="text-sm text-gray-600 mb-1">✅ NativeWind Styling</Text>
            <Text className="text-sm text-gray-600 mb-1">✅ Clean Architecture</Text>
          </View>
        </View>

        <View className="mt-6 space-y-3">
          {isAuthenticated ? (
            <Button
              title="Logout"
              onPress={handleLogout}
              variant="outline"
              className="w-full"
            />
          ) : (
            <Button
              title="Login"
              onPress={handleLogin}
              variant="primary"
              className="w-full"
            />
          )}
        </View>

        {/* Styled Components Test */}
        <StyledTest />
      </ScrollView>
    </SafeAreaView>
  );
}; 