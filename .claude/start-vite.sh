#!/bin/sh
cd "$(dirname "$0")/.."
PATH="/usr/local/bin:$PATH" exec npx vite
