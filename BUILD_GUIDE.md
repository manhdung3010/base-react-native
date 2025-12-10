# Hướng dẫn Build APK và IPA

## 📱 **Build APK cho Android**

### Bước 1: Cài đặt EAS CLI
```bash
npm install -g eas-cli
```

### Bước 2: Đăng nhập Expo
```bash
eas login
```
Tạo tài khoản tại https://expo.dev nếu chưa có

### Bước 3: Cấu hình build
File `eas.json` đã được tạo với cấu hình:
- **preview**: Build APK cho testing
- **production**: Build APK cho production

### Bước 4: Build APK
```bash
# Build APK cho testing
eas build --platform android --profile preview

# Build APK cho production
eas build --platform android --profile production
```

### Bước 5: Tải APK
- Sau khi build xong, EAS sẽ cung cấp link download
- Hoặc chạy: `eas build:list` để xem danh sách builds

---

## 🍎 **Build IPA cho iOS**

### Bước 1: Cài đặt Xcode (chỉ trên macOS)
- Tải Xcode từ App Store
- Cài đặt Command Line Tools: `xcode-select --install`

### Bước 2: Cấu hình iOS
File `app.json` đã có `bundleIdentifier` cho iOS

### Bước 3: Build IPA
```bash
# Build IPA cho testing
eas build --platform ios --profile preview

# Build IPA cho production
eas build --platform ios --profile production
```

### Bước 4: Tải IPA
- EAS sẽ cung cấp link download
- Hoặc chạy: `eas build:list` để xem danh sách builds

---

## 🔧 **Cấu hình nâng cao**

### Cập nhật Bundle ID
Thay đổi trong `app.json`:
```json
{
  "expo": {
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourapp"
    },
    "android": {
      "package": "com.yourcompany.yourapp"
    }
  }
}
```

### Build cho cả 2 platform
```bash
# Build cả Android và iOS
eas build --platform all --profile production
```

### Build local (chỉ Android)
```bash
# Cài đặt Expo Development Build
npx expo install expo-dev-client

# Build local APK
eas build --platform android --profile preview --local
```

---

## 📋 **Các lệnh hữu ích**

```bash
# Xem danh sách builds
eas build:list

# Xem chi tiết build
eas build:view [BUILD_ID]

# Hủy build đang chạy
eas build:cancel [BUILD_ID]

# Xem logs build
eas build:logs [BUILD_ID]
```

---

## ⚠️ **Lưu ý quan trọng**

### Android:
- ✅ APK có thể cài đặt trực tiếp trên thiết bị
- ✅ Không cần Google Play Store
- ✅ File size nhỏ hơn AAB

### iOS:
- ❌ IPA cần Apple Developer Account ($99/năm)
- ❌ Cần cài đặt qua TestFlight hoặc App Store
- ❌ Không thể cài đặt trực tiếp như APK

### Chi phí:
- **Android**: Miễn phí với EAS
- **iOS**: Cần Apple Developer Account ($99/năm)

---

## 🚀 **Deploy lên App Store**

### Android (Google Play Store):
```bash
# Build AAB cho Play Store
eas build --platform android --profile production

# Submit lên Play Store
eas submit --platform android
```

### iOS (App Store):
```bash
# Build cho App Store
eas build --platform ios --profile production

# Submit lên App Store
eas submit --platform ios
```

---

## 📞 **Hỗ trợ**

- **Expo Docs**: https://docs.expo.dev/build/introduction/
- **EAS Build**: https://docs.expo.dev/build/introduction/
- **Troubleshooting**: https://docs.expo.dev/build-reference/troubleshooting/ 