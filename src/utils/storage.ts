// Storage utilities for React Native
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  // Set item
  set: async (key: string, value: any): Promise<void> => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error saving data', error);
    }
  },

  // Get item
  get: async <T = any>(key: string): Promise<T | null> => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error reading data', error);
      return null;
    }
  },

  // Remove item
  remove: async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data', error);
    }
  },

  // Clear all
  clear: async (): Promise<void> => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing data', error);
    }
  },

  // Get all keys
  getAllKeys: async (): Promise<string[]> => {
    try {
      return (await AsyncStorage.getAllKeys()) as string[];
    } catch (error) {
      console.error('Error getting all keys', error);
      return [];
    }
  },

  // Multi get
  multiGet: async (keys: string[]): Promise<[string, any][]> => {
    try {
      const pairs = await AsyncStorage.multiGet(keys);
      return pairs.map(([key, value]) => [
        key,
        value ? JSON.parse(value) : null,
      ]);
    } catch (error) {
      console.error('Error multi getting data', error);
      return [];
    }
  },

  // Multi set
  multiSet: async (keyValuePairs: [string, any][]): Promise<void> => {
    try {
      const pairs = keyValuePairs.map(([key, value]) => [
        key,
        JSON.stringify(value),
      ]) as [string, string][];
      await AsyncStorage.multiSet(pairs);
    } catch (error) {
      console.error('Error multi setting data', error);
    }
  },
};
