import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export const NativeWindTest = () => {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-4">
      <View className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
        <Text className="text-2xl font-bold text-gray-800 text-center mb-4">
          🎉 NativeWind is Working!
        </Text>
        
        <Text className="text-gray-600 text-center mb-6">
          This component uses Tailwind CSS classes through NativeWind
        </Text>
        
        <View className="space-y-3">
          <TouchableOpacity className="bg-blue-500 py-3 px-4 rounded-lg">
            <Text className="text-white font-semibold text-center">
              Primary Button
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-green-500 py-3 px-4 rounded-lg">
            <Text className="text-white font-semibold text-center">
              Success Button
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-red-500 py-3 px-4 rounded-lg">
            <Text className="text-white font-semibold text-center">
              Danger Button
            </Text>
          </TouchableOpacity>
        </View>
        
        <View className="mt-6 p-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg">
          <Text className="text-white text-center font-medium">
            ✨ Gradient background with NativeWind
          </Text>
        </View>
      </View>
    </View>
  );
}; 