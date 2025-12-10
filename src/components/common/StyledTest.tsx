import React from 'react';
import { Text, View } from 'react-native';

export const StyledTest = () => {
  return (
    <>
      <View className="mt-8 p-4 bg-blue-500 rounded-lg">
        <Text className="text-white text-center font-bold text-lg">
          🎨 NativeWind Test
        </Text>
        <Text className="text-blue-100 text-center mt-2">
          Nếu bạn thấy background xanh này thì NativeWind đã hoạt động!
        </Text>
      </View>

      <View className="mt-4 p-4 bg-red-800 rounded-lg">
        <Text className="text-white text-center font-bold text-lg">
          ✅ NativeWind Working
        </Text>
        <Text className="text-green-100 text-center mt-2">
          Background green, text white, rounded corners, etc.
        </Text>
      </View>

      <View className="mt-4 p-4 bg-purple-500 rounded-lg shadow-lg">
        <Text className="text-white text-center font-bold text-lg">
          🌟 Advanced Styling
        </Text>
        <Text className="text-purple-100 text-center mt-2">
          Shadow, gradients, and more NativeWind features
        </Text>
      </View>
    </>
  );
}; 