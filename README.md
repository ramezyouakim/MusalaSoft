# MusalaSoft

to run the app

IOS

1- npm install 2- cd ios 3- pod install 4- if you faced any issue runing the app from the cmd with react-native run-ios please try to run it from the xcode xworkspace project

Android

1- make sure to add the android sdk path in local.properties file inside the android root folder example:- create local.properties file inside the android root folder then add

sdk.dir = /Users/lenme/Documents/sdk <=replace this with the android sdk on your machine

2- npm install 3 react-native run-android 4- if there is any issue with the gradle try cd android then run ./gradlew clean

Please let me know if you faced any issue running this project

PS:- to run the app using a deeplink please run (the provided api "newsapi" Doesn’t return article id or have an endpoint to get a specific article So i can navigate the user to a screen with that article after user taps on the deep link so i did implement the deeplink generally)
npx uri-scheme open musalaapp:// --ios
npx uri-scheme open musalaapp:// --android
