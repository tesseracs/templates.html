#!/bin/sh
set -e
# Serve the static starter locally on http://localhost:8080
exec python3 -m http.server 8080
