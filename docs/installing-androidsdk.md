
# Installing the Android SDK

either download and install Android Studio or the standalone Android SDK Command-Line Tools

## Android SDK Command-Line Tools

* Download the latest "command line tools only" package from the Android Studio downloads page and unzip the package.
* Move the unzipped cmdline-tools directory into a new directory like 'C:/android_sdk/'
* In the unzipped cmdline-tools directory, create a sub-directory called latest.
* Move the original cmdline-tools directory contents into the newly created latest directory.
* Set the ANDROID_HOME environment variable.
    1. Right-click on "This PC" or "My Computer" and select "Properties."
    2. Click on "Advanced system settings."
    3. Click on the "Environment Variables" button.
    4. Under "System Variables," click "New."
    5. Enter "ANDROID_HOME" as the variable name and the path to the SDK installation directory as the variable value.
    6. Click "OK" and exit.
    7. Reboot your system.
* Add the SDK to your system's Path environment variable.
  * Windows:
    1. Right-click on "This PC" or "My Computer" and select "Properties."
    2. Click on "Advanced system settings."
    3. Click on "Environment Variables".
    4. Under "System Variables," select "Path" and click "Edit".
    5. Click "New" and enter the path to the cmdline-tools and platform-tools directory (e.g., %ANDROID_HOME%/cmdline-tools/latest/bin:%ANDROID_HOME%/platform-tools").
    6. Click "OK" and exit.
    7. Reboot your system.

### Install required SDK packages using the command line

* In a command prompt run the following commands to install the required Android SDK packages:

  ```shell
  sdkmanager --install "platforms;android-32" --verbose
  sdkmanager --install "build-tools;33.0.2" --verbose
  sdkmanager --install "platform-tools" --verbose
  sdkmanager --install "tools" --verbose
  sdkmanager --install "system-images;android-32;google_apis_playstore;x86_64" --verbose
  sdkmanager --install "extras;google;google_play_services" --verbose
  ```

* Accept any missing licenses with the following command:

  ```shell
  sdkmanager --licenses --verbose
  ```

### Set up an Android Virtual Device (AVD) using the command line

* In a command prompt run the following command to add a virtual device:

  ```shell
  avdmanager create avd --name pixelc --package "system-images;android-32;google_apis_playstore;x86_64" --device 32
  ```

## Android Studio

* Go to <https://developer.android.com/studio> and click on "Download Android Studio".
* Save the downloaded file to your computer.
* Double-click on the downloaded file to start the installation process.
* Follow the instructions provided by the installer to complete the installation.
* Set the ANDROID_HOME environment variable.
    1. Right-click on "This PC" or "My Computer" and select "Properties."
    2. Click on "Advanced system settings."
    3. Click on the "Environment Variables" button.
    4. Under "System Variables," click "New."
    5. Enter "ANDROID_HOME" as the variable name and the path to the SDK installation directory as the variable value.
    6. Click "OK" and exit.
* Add the SDK to your system's Path environment variable.
  * Windows:
    1. Right-click on "This PC" or "My Computer" and select "Properties."
    2. Click on "Advanced system settings."
    3. Click on "Environment Variables".
    4. Under "System Variables," select "Path" and click "Edit".
    5. Click "New" and enter the path to the cmdline-tools and platform-tools directory (e.g., %ANDROID_HOME%/cmdline-tools/latest/bin:%ANDROID_HOME%/platform-tools").
    6. Click "OK" and exit.
    7. Reboot your system.

### Install required SDK packages using Android Studio

* After installing, open the SDK Manager from the Android Studio's Welcome Screen or from the top toolbar menu.

  ```text
  File > Settings > Appearance & Behavior > System Settings > Android SDK
  ```

* Select "SDK Manager" from the drop-down menu.
* In the SDK Manager window, select the "SDK Platforms" tab.
* Check the box next to "Show Package Details" in the lower-right corner.
* Under "Android 12.0", select the following:
    1. Android SDK Platform 32
    2. system-images;android-32;google_apis_playstore;x86_64
* Under "SDK Tools", check the following:
    1. Android SDK Build-Tools
    2. Android Emulator
    3. Android SDK Platform-Tools
    4. Android SDK Tools
* Click on "Apply" to start the installation process.
* Once the installation is complete, click on "OK" to close the SDK Manager.

### Set up an Android Virtual Device (AVD) using Android Studio

* Open Android Studio and click on the "Configure" button at the bottom of the welcome screen.
* Select "AVD Manager" from the drop-down menu.
* Click on "Create Virtual Device".
* Select a device (e.g., "Pixel_C") from the list and click "Next."
* Choose a system image to use with the emulator and click "Next."
* Configure the AVD settings as needed, then click "Finish."
* Once the AVD is created, it will appear in the AVD Manager window.
