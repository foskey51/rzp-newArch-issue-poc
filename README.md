# Razorpay new architecture issue POC
## Steps to replicate issue

1. Install dependencies

   ```bash
   npm install
   ```

2. Expo diagnosis error

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

4. Watch adb logs
```
adb logcat -c && adb logcat '*:S' ReactNative:V ReactNativeJS:V AndroidRuntime:E 
```

## Error log
```
--------- beginning of main
05-01 11:32:26.797  7983  8044 I ReactNativeJS: Running "main" with {"rootTag":1,"initialProps":{},"fabric":true}
05-01 11:32:28.020  7983  8044 W ReactNativeJS: 'SafeAreaView has been deprecated and will be removed in a future release. Please use \'react-native-safe-area-context\' instead. See https://github.com/th3rdwave/react-native-safe-area-context', { [Stack] name: 'Stack' }
--------- beginning of crash
05-01 11:32:42.026  7983  7983 E AndroidRuntime: FATAL EXCEPTION: main
05-01 11:32:42.026  7983  7983 E AndroidRuntime: Process: com.anonymous.rzp54, PID: 7983
05-01 11:32:42.026  7983  7983 E AndroidRuntime: java.lang.NoClassDefFoundError: Failed resolution of: Lcom/razorpay/RzpAssist;
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at com.razorpay.OtpElfCheckoutPresenterImpl.setUpAddOn(OtpElfCheckoutPresenterImpl.java:34)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at com.razorpay.BaseCheckoutActivity.createContainer(BaseCheckoutActivity.java:402)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at com.razorpay.BaseCheckoutActivity.onCreate(BaseCheckoutActivity.java:188)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at com.razorpay.BaseCheckoutOtpelfActivity.onCreate(BaseCheckoutOtpelfActivity.java:25)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at com.razorpay.CheckoutActivity.onCreate(CheckoutActivity.java:8)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at android.app.Activity.performCreate(Activity.java:9155)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at android.app.Activity.performCreate(Activity.java:9133)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at android.app.Instrumentation.callActivityOnCreate(Instrumentation.java:1521)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at android.app.ActivityThread.performLaunchActivity(ActivityThread.java:4262)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at android.app.ActivityThread.handleLaunchActivity(ActivityThread.java:4467)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at android.app.servertransaction.LaunchActivityItem.execute(LaunchActivityItem.java:222)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at android.app.servertransaction.TransactionExecutor.executeNonLifecycleItem(TransactionExecutor.java:133)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at android.app.servertransaction.TransactionExecutor.executeTransactionItems(TransactionExecutor.java:103)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at android.app.servertransaction.TransactionExecutor.execute(TransactionExecutor.java:80)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at android.app.ActivityThread$H.handleMessage(ActivityThread.java:2823)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at android.os.Handler.dispatchMessage(Handler.java:110)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at android.os.Looper.loopOnce(Looper.java:248)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at android.os.Looper.loop(Looper.java:338)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at android.app.ActivityThread.main(ActivityThread.java:9067)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at java.lang.reflect.Method.invoke(Native Method)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:593)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:932)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: Caused by: java.lang.ClassNotFoundException: Didn't find class "com.razorpay.RzpAssist" on path: DexPathList[[zip file "/data/app/~~wZRnVxhJilCcACpJpmWF8g==/com.anonymous.rzp54-fcazNlTXSNVC_hqi6vHsyg==/base.apk"],nativeLibraryDirectories=[/data/app/~~wZRnVxhJilCcACpJpmWF8g==/com.anonymous.rzp54-fcazNlTXSNVC_hqi6vHsyg==/lib/x86_64, /data/app/~~wZRnVxhJilCcACpJpmWF8g==/com.anonymous.rzp54-fcazNlTXSNVC_hqi6vHsyg==/base.apk!/lib/x86_64, /system/lib64, /system_ext/lib64]]
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at dalvik.system.BaseDexClassLoader.findClass(BaseDexClassLoader.java:259)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at java.lang.ClassLoader.loadClass(ClassLoader.java:637)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	at java.lang.ClassLoader.loadClass(ClassLoader.java:573)
05-01 11:32:42.026  7983  7983 E AndroidRuntime: 	... 22 more
```