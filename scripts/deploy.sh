#!/bin/bash

# Function to print text in purple
print_purple() {
  local PURPLE='\033[0;35m'
  local NC='\033[0m' # No Color
  echo -e "${PURPLE}$1${NC}"
}

# Saves current branch name, to restore it later
current_branch=$(git rev-parse --abbrev-ref HEAD)

print_purple "deploying to gh-pages\n"
print_purple "cleaning dist and node_modules\n"
rm -rf dist
rm -rf node_modules
print_purple "cleaned dist and node_modules\n"
print_purple "-----------------------------------\n"

print_purple "installing npm packages\n"
npm install
print_purple "installed npm packages\n"
print_purple "-----------------------------------\n"

print_purple "building dist\n"
npm run build
print_purple "built dist\n"
print_purple "-----------------------------------\n"

print_purple "deploying to gh-pages\n"
git checkout --orphan gh-pages
git --work-tree dist add --all
git --work-tree dist commit -m "Deploy to GitHub Pages"
git push origin HEAD:gh-pages --force
git checkout -f "$current_branch"
git branch -D gh-pages

print_purple "deployed to gh-pages\n"
print_purple "-----------------------------------\n"
print_purple "visit: https://sendbird.github.io/chat-ai-widget-uikit/"
print_purple "\n-----------------------------------\n"
