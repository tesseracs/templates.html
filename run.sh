#!/bin/sh
set -e
# Static files: serve the project root (use session preview or open index.html in a browser)
exec python3 -m http.server 8080
