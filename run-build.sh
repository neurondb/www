#!/bin/bash
# Kill any running Node/Next processes
pkill -9 node 2>/dev/null || true
pkill -9 next 2>/dev/null || true
sleep 2

# Run the build
npm run build



