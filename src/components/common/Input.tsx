import React, { useState } from 'react';
import { Text, TextInput, TextStyle, View, ViewStyle } from 'react-native';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  error?: string;
  disabled?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  style?: ViewStyle;
  inputStyle?: TextStyle;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  error,
  disabled = false,
  multiline = false,
  numberOfLines = 1,
  style,
  inputStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyle: ViewStyle = {
    marginBottom: 16,
    ...style,
  };

  const labelStyle: TextStyle = {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 8,
  };

  const inputContainerStyle: ViewStyle = {
    borderWidth: 1,
    borderColor: error ? '#ef4444' : isFocused ? '#3b82f6' : '#d1d5db',
    borderRadius: 8,
    backgroundColor: disabled ? '#f3f4f6' : '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: multiline ? 12 : 0,
    minHeight: multiline ? numberOfLines * 24 + 24 : 44,
    justifyContent: multiline ? 'flex-start' : 'center',
  };

  const textInputStyle: TextStyle = {
    fontSize: 16,
    color: '#111827',
    ...inputStyle,
  };

  const errorStyle: TextStyle = {
    fontSize: 12,
    color: '#ef4444',
    marginTop: 4,
  };

  return (
    <View style={containerStyle}>
      {label && <Text style={labelStyle}>{label}</Text>}
      <View style={inputContainerStyle}>
        <TextInput
          style={textInputStyle}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          editable={!disabled}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      {error && <Text style={errorStyle}>{error}</Text>}
    </View>
  );
};
