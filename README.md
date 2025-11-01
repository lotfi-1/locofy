
# React Native App

A mobile application built using **React Native CLI** featuring custom assets, reusable components, navigation, Redux state management, and global theming support.

---

## Platforms Supported
- Android
- iOS (if environment is configured)

---

## 🛠 Tech Stack

| Feature | Library |
|--------|---------|
| UI Framework | React Native CLI |
| State Management | Redux Toolkit |
| Navigation | React Navigation (Stack + Bottom Tabs) |
| Font Assets | Local fonts + `npx react-native-asset` |
| Theming | Custom theme system in `/theme` |
| Type Support | TypeScript |

---

## Project Structure

```
├─ android
├─ ios
 assets
│  ├─ fonts
│  ├─ icons (React components `.tsx`)
│  ├─ images
│  └─ logo
├─ src
│   ├─ components           # Reusable UI components
│   ├─ config               # Screen config, header styling
│   ├─ context              # Shared app contexts
│   ├─ navigation           # Stack + Tab navigators
│   ├─ screens              # Screen views
│   ├─ store                # Redux store setup + slices
│   ├─ theme                # Colors, spacing, typography
│   ├─ types                # Global type definitions / models
│   ├─ utils                # Helper & utility functions
│   ├─ index.ts
└─ App.tsx
```

---

## Fonts Setup

Fonts are stored locally inside:
```
assets/fonts/
```

Font linking is handled using:
```bash
npx react-native-asset
```

These font names are mapped and accessed through:

```ts
export default class AppFonts {
  static Roboto_Regular = 'Roboto-Regular';
  static Roboto_Medium = 'Roboto-Medium';
  static Roboto_SemiBold = 'Roboto-SemiBold';
  static Roboto_Bold = 'Roboto-Bold';

  static Inter_Regular = 'Inter-Regular';
  static Inter_Medium = 'Inter-Medium';
  static Inter_SemiBold = 'Inter-SemiBold';
  static Inter_Bold = 'Inter-Bold';

  static BalooBhai2_Regular = 'BalooBhai2-Regular';
  static BalooBhai2_Medium = 'BalooBhai2-Medium';
  static BalooBhai2_SemiBold = 'BalooBhai2-SemiBold';
  static BalooBhai2_Bold = 'BalooBhai2-Bold';
}
```

---

## Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:lotfi-1/locofy.git
cd locofy
npm install
# or
yarn install
```

Install iOS pods (macOS only):
```bash
cd ios
pod install
cd ..
```

Link and copy assets (fonts, images, icons):
```bash
npx react-native-asset
```

---

## Running the App

### Android
```bash
npm run android
# or
yarn android
```

### iOS (macOS required)
Start Metro and build:
```bash
npm run ios
# or
yarn ios
```

---

## Building APK (Android Release for Testing)

```bash
cd android
./gradlew assembleRelease   # macOS / Linux
# or
gradlew.bat assembleRelease # Windows
```

APK location:
```
android/app/build/outputs/apk/release/app-release-unsigned.apk
```

Install:
```bash
adb install -r android/app/build/outputs/apk/release/app-release-unsigned.apk
```

---

> [!note]
> when a user toggles a flight as favorite, i handle a 2-second delay using redux.  
> the component dispatches an action → the reducer triggers an api request (with a 2-second timeout inside the flight service).  
> the api returns the updated flight data.  
> after receiving the response, i dispatch another action to update the main flight list in the store (no full re-fetch needed).  
> finally, the component updates its state with the new data.