# Required Tools and Packages

## Install the .NET Core 7 SDK

* Download the .NET Core SDK from <https://dotnet.microsoft.com/download>
* Run the downloaded installer and follow the instructions to install .NET Core.
* Open a command prompt and verify the installation by executing:

  ```shell
  dotnet --version
  ```

## Install Git

* Download the Git installer from <https://git-scm.com/downloads>
* Install Git by following the instructions.
* Configure your Git identity by running the following commands:

  ```shell
  git config --global user.name "Your Name"
  git config --global user.email "youremail@example.com"
  ```

## Install the Java SE Development Kit (JDK)

* Download and install version 11 of the Java SE Development Kit (JDK) from Oracle’s website.
<https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html>
* Set the JAVA_HOME environment variable to the location of your JDK installation.
  * Windows:
    1. Right-click on "This PC" or "My Computer" and select "Properties."
    2. Click on "Advanced system settings."
    3. Click on "Environment Variables".
    4. Under "System Variables," click "New."
    5. Enter "JAVA_HOME" as the variable name and the path to the JDK installation directory as the variable value (e.g., "C:\Program Files\Java\jdk1.11.0").
    6. Click "OK" and exit.
    7. Reboot your system.
* Add the Java bin folder to your system's Path environment variable.
  * Windows:
    1. Right-click on "This PC" or "My Computer" and select "Properties."
    2. Click on "Advanced system settings."
    3. Click on "Environment Variables".
    4. Under "System Variables," select "Path" and click "Edit".
    5. Click "New" and enter the path to the Java bin directory (e.g., "C:\Program Files\Java\jdk1.11.0\bin\").
    6. Click "OK" and exit.
    7. Reboot your system.

## Install Gradle

* Download the Gradle binary distribution from <https://gradle.org/releases/>
* Extract the contents of the downloaded file to a new directory e.g `C:\gradle\`
* Set the GRADLE_HOME environment variable to the location of the extracted Gradle distribution.
  * Windows:
    1. Right-click on "This PC" or "My Computer" and select "Properties."
    2. Click on "Advanced system settings."
    3. Click on "Environment Variables".
    4. Under "System Variables," select the "Path" variable and click "Edit."
    5. Click "New" and enter the path to the Gradle bin directory (e.g., "C:\gradle\bin").
    6. Click "OK" and exit.
    7. Reboot your system.

## Install Node.js

* Download the Node (Latest) installer from <https://nodejs.org/en/download/>
* Install Node by following the instructions.
* Add the Node bin directory to your PATH environment variables.
  * Windows:
    1. Right-click on "This PC" or "My Computer" and select "Properties."
    2. Click on "Advanced system settings."
    3. Click on "Environment Variables".
    4. Under "System Variables," select the "Path" variable and click "Edit."
    5. Click "New" and enter the path to the Node bin directory (e.g., "C:\node\bin").
    6. Click "OK" and exit.
    7. Reboot your system.
* Verify the installation by opening a command prompt and executing:

  ```shell
  node -v
  ```

## Install Angular CLI

* Install the Angular CLI globally using npm by running the following command in a terminal:

  ```shell
  npm install -g @angular/cli.
  ```

* Verify the installation by opening a command prompt and executing:

  ```shell
  ng version
  ```

## Install Capacitor CLI

* Install Capacitor globally using npm by running the following command in a terminal:

  ```shell
  npm install -g @capacitor/cli
  ```
