# Brewtown

*A place where homebrewers are first class citizens.*

### Develop Locally

 You will need to download and install a copy of Node.js from https://nodejs.org/. NPM will also come bundled with Node, although
 it's recommended to use Yarn instead, which you can find at https://yarnpkg.com/. Follow instructions to set up Node on your machine. 
 You can decide whether to add a global copy of npm to your path. These instructions assume you do. You will also need git bash which 
 you can download at https://git-scm.com/downloads.
 
Fork this repository and download the copy to your machine. Alternatively, you can clone this repository directly.

```sh
git clone https://github.com/willm78/brewtown.git
```

then `cd` into the download directory and install dependencies with yarn:

```sh
yarn install
```
or with npm:

```sh
npm install
```

This project is set up to use expo which you can read about at https://expo.io/. You can install the XDE tool from the website, 
however it is not absolutely necessary. Instead you can install the exp command line tool with

```sh
npm install -g exp
```

Next, download the expo app on your phone, create an account and run

```sh
expo start
```

You can also run the app on an Android Virtual Device using Android Studio. This can be faster but requires some more setup
steps than running on your phone directly. If you do decide to run on AVD, there are instructions on the Expo website that 
explain how to set this up. If you are running macOS, you can also run the app on an iPhone emulator with Xcode.

