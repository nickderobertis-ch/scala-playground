FROM reactnativecommunity/react-native-android:3.2

RUN apt-get update

# Install Android SDK
## Dependencies
RUN apt-get install -y unzip curl ca-certificates \
  openjdk-8-jdk
ENV JAVA8_HOME /usr/lib/jvm/java-8-openjdk-amd64
ENV JAVA_HOME $JAVA8_HOME
## SDK tools
ENV ANDROID_HOME /opt/android-sdk-linux
ARG VERSION_SDK_TOOLS=4333796
ENV ANDROID_SDK_ZIP http://dl.google.com/android/repository/sdk-tools-linux-$VERSION_SDK_TOOLS.zip

RUN mkdir -p $ANDROID_HOME \
&& curl -L $ANDROID_SDK_ZIP --output sdk.zip \
&& unzip sdk.zip -d $ANDROID_HOME \
&& rm sdk.zip

ENV PATH $PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools
## SDK
### sdkmanager will throw up warnings if this file does not exist
### TODO find out what this is needed for
RUN mkdir -p /root/.android && touch /root/.android/repositories.cfg
### Use verbose flags to keep an eye on progress - some commands take a very long
### time, and without the verbose flag it's impossible to tell if it's hung or
### still working
RUN yes | sdkmanager --verbose 'platform-tools'
RUN yes | sdkmanager --verbose 'emulator'
RUN yes | sdkmanager --verbose 'extras;android;m2repository'
RUN yes | sdkmanager --verbose 'extras;google;google_play_services'
RUN yes | sdkmanager --verbose 'extras;google;m2repository'
RUN yes | sdkmanager --verbose 'build-tools;23.0.1'
RUN yes | sdkmanager --verbose 'platforms;android-23'
RUN yes | sdkmanager --verbose 'system-images;android-23;default;x86_64'

RUN yes | sdkmanager --update --verbose
RUN yes | sdkmanager --licenses
# Done installing Android SDK

ENV PROJECT_MOUNT=/project
WORKDIR $PROJECT_MOUNT
# Tell gradle to store dependencies in a sub directory of the android project -
# this persists the dependencies between builds, speeding up build times. Make
# sure to add android/gradle_deps to the project's .gitignore
ENV GRADLE_USER_HOME $PROJECT_MOUNT/android/gradle_deps

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "android" ]