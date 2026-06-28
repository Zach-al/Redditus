#!/bin/bash
set -e

echo "=== Building Redditus Android APK ==="

# Ensure Java 17+ is available
JAVA_HOME="${JAVA_HOME:-$(/usr/libexec/java_home -v 17 2>/dev/null || /usr/libexec/java_home -v 21 2>/dev/null || echo '')}"
if [ -z "$JAVA_HOME" ]; then
  echo "Error: Java 17+ is required. Install with: brew install --cask temurin17"
  exit 1
fi
export JAVA_HOME

# Patch capacitor-android Java version if needed
CAPACITOR_GRADLE="node_modules/@capacitor/android/capacitor/build.gradle"
if grep -q "VERSION_21" "$CAPACITOR_GRADLE" 2>/dev/null; then
  echo "Patching $CAPACITOR_GRADLE to use Java 17..."
  sed -i '' 's/VERSION_21/VERSION_17/g' "$CAPACITOR_GRADLE"
fi

echo "Building Next.js static export..."
npm run build

# Copy fresh web assets
echo "Copying web assets to Android..."
npx cap copy android

echo "Building Android APK..."
cd android
./gradlew assembleDebug
cd ..

APK="android/app/build/outputs/apk/debug/app-debug.apk"
if [ -f "$APK" ]; then
  cp "$APK" "Redditus-Android.apk"
  echo "=== Done! APK at Redditus-Android.apk ==="
  ls -lh "Redditus-Android.apk"
else
  echo "=== Build failed. Check logs above. ==="
  exit 1
fi
