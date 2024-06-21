#!/bin/bash -eo pipefail

# Due to differences in the tsconfig settings, there are many errors in the UIKit side.
# Temporarily, filtering the path of the files where errors occurred to display the error messages.
if yarn tsc --noEmit 2>&1 | grep -E "^src/"; then
  echo "TypeScript errors found in the src/ directory."
  exit 1
else
  echo "No TypeScript errors in the src/ directory."
fi
