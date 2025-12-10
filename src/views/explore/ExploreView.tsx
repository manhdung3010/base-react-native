import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeWindTest } from '../../components/common/NativeWindTest';

export const ExploreView = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" contentContainerStyle={{ padding: 20 }}>
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-gray-900 mb-2">
            Explore
          </Text>
          <Text className="text-base text-gray-600 text-center">
            Discover new features and components
          </Text>
        </View>

        <View className="flex-1">
          <View className="bg-white rounded-xl p-5 mb-4 shadow-lg border border-gray-100">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              NativeWind Components
            </Text>
            <Text className="text-sm text-gray-600 mb-4">
              This section showcases various NativeWind components and styling examples.
            </Text>
          </View>

          {/* NativeWind Test Component */}
          <NativeWindTest />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}; 