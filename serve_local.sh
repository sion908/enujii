#!/usr/bin/env bash
set -euo pipefail

PORT=${1:-8080}

printf 'Serving %s on http://localhost:%s (Ctrl+C to stop)\n' "$(pwd)" "$PORT"
python3 -m http.server "$PORT"
