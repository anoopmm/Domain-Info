# Domain Info

A simple mobile app to get data about domains like Screenshot,Title,Description,CMS,Location and Expiry

## Screenshots

<div style="display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap;">
  <img src="screenshots/1.jpg" alt="Home Screen" width="200" style="margin: 30px;">
  <img src="screenshots/2.jpg" alt="Domain Details Screen" width="200" style="margin: 30px;">
  <img src="screenshots/3.jpg" alt="Settings Screen" width="200" style="margin: 30px;">
</div>

## APIs Used

Thumbnail:https://www.screenshotapi.net/

CMS:https://whatcms.org/

Location:https://geo.ipify.org/

Expiry:https://apilayer.com/

## Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm install
npm start

# OR using Yarn
yarn install
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
