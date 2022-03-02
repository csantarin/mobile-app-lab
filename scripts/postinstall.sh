#!/bin/bash

set -e

echo "Installing pods..."
cd ios && pod install --repo-update; cd ..
