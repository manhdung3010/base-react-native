import React from 'react';
import { ScrollView, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/common/Button';
import { useAppStore } from '../../stores/useAppStore';
import { useAuthStore } from '../../stores/useAuthStore';

export const SettingsView = () => {
  const {
    theme,
    language,
    notifications,
    biometrics,
    setTheme,
    setLanguage,
    toggleNotifications,
    toggleBiometrics,
    resetSettings,
  } = useAppStore();

  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  const handleResetSettings = () => {
    resetSettings();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" contentContainerStyle={{ padding: 20 }}>
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-gray-900 mb-2">
            Settings
          </Text>
          <Text className="text-base text-gray-600 text-center">
            Customize your app experience
          </Text>
        </View>

        <View className="flex-1">
          {/* Appearance Section */}
          <View className="mb-8">
            <Text className="text-xl font-semibold text-gray-900 mb-4">
              Appearance
            </Text>

            <View className="bg-white rounded-xl p-4 mb-3 shadow-lg border border-gray-100 flex-row items-center justify-between">
              <View className="flex-1 mr-4">
                <Text className="text-base font-medium text-gray-900 mb-1">
                  Theme
                </Text>
                <Text className="text-sm text-gray-600">{theme}</Text>
              </View>
              <View className="flex-row space-x-2">
                <Button
                  title="Light"
                  onPress={() => setTheme('light')}
                  variant={theme === 'light' ? 'primary' : 'outline'}
                  size="small"
                  className="min-w-[60px]"
                />
                <Button
                  title="Dark"
                  onPress={() => setTheme('dark')}
                  variant={theme === 'dark' ? 'primary' : 'outline'}
                  size="small"
                  className="min-w-[60px]"
                />
                <Button
                  title="System"
                  onPress={() => setTheme('system')}
                  variant={theme === 'system' ? 'primary' : 'outline'}
                  size="small"
                  className="min-w-[60px]"
                />
              </View>
            </View>

            <View className="bg-white rounded-xl p-4 mb-3 shadow-lg border border-gray-100 flex-row items-center justify-between">
              <View className="flex-1 mr-4">
                <Text className="text-base font-medium text-gray-900 mb-1">
                  Language
                </Text>
                <Text className="text-sm text-gray-600">
                  {language.toUpperCase()}
                </Text>
              </View>
              <View className="flex-row space-x-2">
                <Button
                  title="EN"
                  onPress={() => setLanguage('en')}
                  variant={language === 'en' ? 'primary' : 'outline'}
                  size="small"
                  className="min-w-[50px]"
                />
                <Button
                  title="VI"
                  onPress={() => setLanguage('vi')}
                  variant={language === 'vi' ? 'primary' : 'outline'}
                  size="small"
                  className="min-w-[50px]"
                />
              </View>
            </View>
          </View>

          {/* Notifications Section */}
          <View className="mb-8">
            <Text className="text-xl font-semibold text-gray-900 mb-4">
              Notifications
            </Text>

            <View className="bg-white rounded-xl p-4 mb-3 shadow-lg border border-gray-100 flex-row items-center justify-between">
              <View className="flex-1 mr-4">
                <Text className="text-base font-medium text-gray-900 mb-1">
                  Push Notifications
                </Text>
                <Text className="text-xs text-gray-500">
                  Receive notifications about updates and activities
                </Text>
              </View>
              <Switch
                value={notifications}
                onValueChange={toggleNotifications}
                trackColor={{
                  false: '#d1d5db',
                  true: '#93c5fd',
                }}
                thumbColor={notifications ? '#2563eb' : '#9ca3af'}
              />
            </View>

            <View className="bg-white rounded-xl p-4 mb-3 shadow-lg border border-gray-100 flex-row items-center justify-between">
              <View className="flex-1 mr-4">
                <Text className="text-base font-medium text-gray-900 mb-1">
                  Biometric Authentication
                </Text>
                <Text className="text-xs text-gray-500">
                  Use fingerprint or face ID to unlock the app
                </Text>
              </View>
              <Switch
                value={biometrics}
                onValueChange={toggleBiometrics}
                trackColor={{
                  false: '#d1d5db',
                  true: '#93c5fd',
                }}
                thumbColor={biometrics ? '#2563eb' : '#9ca3af'}
              />
            </View>
          </View>

          {/* Account Section */}
          <View className="mb-8">
            <Text className="text-xl font-semibold text-gray-900 mb-4">
              Account
            </Text>

            {user && (
              <View className="bg-white rounded-xl p-4 mb-3 shadow-lg border border-gray-100 flex-row items-center justify-between">
                <View className="flex-1 mr-4">
                  <Text className="text-base font-medium text-gray-900 mb-1">
                    User
                  </Text>
                  <Text className="text-sm text-gray-600">{user.name}</Text>
                </View>
              </View>
            )}

            <View className="bg-white rounded-xl p-4 mb-3 shadow-lg border border-gray-100 flex-row items-center justify-between">
              <View className="flex-1 mr-4">
                <Text className="text-base font-medium text-gray-900 mb-1">
                  App Version
                </Text>
                <Text className="text-sm text-gray-600">1.0.0</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="mt-6 space-y-3">
          <Button
            title="Reset Settings"
            onPress={handleResetSettings}
            variant="outline"
            className="w-full"
          />

          <Button
            title="Logout"
            onPress={handleLogout}
            variant="outline"
            className="w-full border-red-500"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}; 