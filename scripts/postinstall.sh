#!/bin/bash

set -e

# To resolve build problems with Xcode possibly using a fresh shell environment during compile time.
# Specifically, for nvm.
# https://github.com/react-native-community/upgrade-support/issues/138#issuecomment-1028303961
# https://github.com/facebook/react-native/commit/35bcf934b186e581d100d43e563044300759557f
#
# Also ships with this fix which seeks to identify the "correct" node.
# https://github.com/facebook/react-native/commit/6334ac35ac3cbc2c84b2d46d46ec118bf9bf714d
echo "Patching react-native: find-node.sh..."
cp patches/react-native/scripts/find-node.sh node_modules/react-native/scripts/find-node.sh

echo "Installing pods..."
cd ios && pod install --repo-update; cd ..
