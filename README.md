cordova_demo
============

Example of ludei demo running cordova extensions. It has been developed using cordova 3.4 version.

This app:
  * Takes a picture using device's camera
  * Uses the beep function of the phone
  * Displays connection status

To get it running:

Create the cordova project
```sh
  cordova create DialogsCamera com.ludei.test Test; 
 ```
Head to the target directory
```sh
  cd Test/;
```
Add ios and Android platforms
```sh
  cordova platform add ios android; 
```
Add the needed plugins
```sh
  cordova plugin add org.apache.cordova.dialogs org.apache.cordova.network-information org.apache.cordova.camera ;
```

Copy the www directory provided in this project folder to your destination directory, overriding the content.

make a zip file with everything and upload to our cloud compiler: https://cloud.ludei.com/cloud/