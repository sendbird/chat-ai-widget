# Release Steps

## Step 0 - Setup
1. Create a new branch for the release: e.g. `git checkout -b release/{X.X.X}`
2. Write/Generate changelog in CHANGELOG.md
3. Commit all changes, push to remote
4. Comment `/bot create ticket` on github PR to make release ticket automatically

## Step 1 - Release Candidate
1. Update the version in `package.json`: e.g. `version: {version}-rc-0` (increase the number if it's necessary)
2. Run `npm run build` under the root directory
3. Run  `npm publish --tag rc`
4. Test the RC version in your project(s) e.g. [CodeSandbox Sample](https://codesandbox.io/s/broken-glitter-6sjw6l?file=/src/App.tsx)
5. If everything is fine, go to Step 2. Otherwise make changes to main branch, rebase and repeat Step 1

## Step 2 - Actual release
10. Commit all changes
11. Update the version in `package.json` to the new real release version: Run `npm version patch/minor/major`
12. Run `npm run build`
13. Run `npm publish -access=public`
