# Razorpay new architecture issue POC
## Steps to replicate issue

1. Install dependencies

   ```bash
   npm install
   ```

2. Run diagnosis to get the error log

   ```bash
   npx expo-doctor
   ```
   
## Error log
``` 
$ npx expo-doctor                                                                                   
16/17 checks passed. 1 checks failed. Possible issues detected:
Use the --verbose flag to see more details about passed checks.

✖ Validate packages against React Native Directory package metadata
The following issues were found when validating your dependencies against React Native Directory:
  Unsupported on New Architecture: react-native-razorpay 
Advice:
Use libraries that are actively maintained and support the New Architecture. Find alternative libraries with https://reactnative.directory.
Add packages to expo.doctor.reactNativeDirectoryCheck.exclude in package.json to selectively skip validations, if the warning is not relevant.

1 check failed, indicating possible issues with the project.

```
3. Run application
> [!IMPORTANT]
> Make sure to add your API Key in /app/(tabs)/index.tsx
``` 
npx expo prebuild --clean && npx expo run:android
```

## Error screen

![Error screen](/screenshots/errorScreen.png)
