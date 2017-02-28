# Hello World PhoneGap Template [![bitHound Score][bithound-img]][bithound-url]

A PhoneGap Hello World template with REST API Integration

## Usage

#### PhoneGap CLI

The hello-world template is the default when you create a new application using the [phonegap-cli][phonegap-cli-url].

    phonegap create my-app

Create an app using this template specifically:

    phonegap create my-app --template hello-world

To see a list of other available PhoneGap templates:

    phonegap template list

## Folder Structure

#### Hooks folder

Hooks folder would contain special scripts which you do not require right now.

#### Platforms folder

This folder contains the platform specific builds for Android and iOS. This folder and its contents are auto generated by Phonegap when you run the commands addition of platforms.

    phonegap platform add android

Executing the above line in Terminal(for Mac) and in command line for Windows will add the Android platform and Android specific files to our project. More on this later.

    phonegap platform add ios

Executing the above line in Terminal(for Mac) and in command line for Windows will add the iOS platform and iOS specific files to our project. More on this later.

#### plugins folder

A phonegap project may utilize multiple plugins to achieve the required functionalities. A Phonegap project runs on the web enginer of the device and does not have access to the native APIs of the device OS (eg: Camera). Plugins essentially allow a phonegap project to interact with the native APIs of the device and transform the experience from being a mobile website to a complete mobile app.
This folder will contain all of the plugins that come by default with the Hello World template as well as all the other plugins that anyone will ever add to any Phonegap project. 
There are many plugins which a lot of developers have designed to solve various use cases (Eg: Barcode Scanner, File downloader, File opener etc.). As plugins is a topic in itself, i'll leave it for another day.

#### res folder

This folder contains all the resources, like icons and splash screen images. 'res' here stands for resources.

The icons and splash screens are set in config.xml file. This will be discussed in the explanation of the config.xml file below.

#### www folder

This is the folder where all of our code goes. As phonegap projects are almost always coded in HTML, CSS and JavaScript, it becomes more similar to web project but the Phonegap framework packages it as an app for us.
Within the www folder, we have various sub folders. We'll be looking only at folders names css, js and a file named index.html.

The css folder here contains all of our css files.

The js folder contains all the JavaScript files.

index.html file is entry point to our app. 

#### config.xml

This file contains all the configuration of the project. It contains the Widget ID which is known as package name in Android and App ID in iOS. This file contains various platform specific configurations also, like icon and splash screen. It also has details of all the plugins that have been used in the project. All the tags in this file are self explanatory. You are encouraged to run through this file(and all others too) to get a better idea of the project

## Adding the API call

In the index.js file under www/js, we will add the API call under onDeviceReady function. The onDeviceReady function is where the command will come after the device has been initialized with all the dependencies. 

In this example, we use something called as XMLHttpRequests. These are asynchronous requests, which means that the request is made to the server and then the command continues executing the next line of code without waiting for the response of the server. When the server responds, it triggers an onreadystatechange function, where we write code to receive the response from the server and handle the response accordingly. Go through the code and most of it can be understood pretty easily. Just remember to skip the other functions and concentrate only on what is within onDeviceReady function.

[phonegap-cli-url]: http://github.com/phonegap/phonegap-cli
[cordova-app]: http://github.com/apache/cordova-app-hello-world
[bithound-img]: https://www.bithound.io/github/phonegap/phonegap-app-hello-world/badges/score.svg
[bithound-url]: https://www.bithound.io/github/phonegap/phonegap-app-hello-world
[config-xml]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/config.xml
[index-html]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/www/index.html
[cordova-whitelist-guide]: https://cordova.apache.org/docs/en/dev/guide/appdev/whitelist/index.html
[cordova-plugin-whitelist]: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist
[cordova-plugin-whitelist-csp]: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist#content-security-policy
[csp-is-awesome]: http://cspisawesome.com

