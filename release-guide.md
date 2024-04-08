# Release Steps

## Step 0 - Setup
1. Create a new branch for the release, for example: git checkout -b release/{X.X.X}.
2. Update the version field in package.json. Use the format {version}-rc-0 for Release Candidates (RC), increasing the number as necessary. For the final release, follow the semantic versioning (semver) format.
3. Commit the changes, push them to remote, and create a Pull Request (PR).
4. Comment /bot create ticket on the GitHub PR to automatically generate a release ticket.
5. Obtain approval from your manager for the ticket before proceeding to the next step.

## Step 1 - Publish a new chat-ai-widget package (using automated workflow)
1. Navigate to Actions -> [Publish Workflow](./.github/workflows/package-publish.yml) in the GitHub repository.
2. Fill in the version field with the target version (e.g., 1.3.1), and use rc / alpha / beta for the npm_tag field if needed.
3. Once all the steps in the workflow are successfully completed:
   - The build output will be published to npm.
   - A commit will be pushed to the release PR created in Step 0. This commit includes:
     - Changes to the CHANGELOG and version updates.
     - `@sendbird/chat-ai-widget` dependency version updated in `/packages/*`.
   - A new tag will be pushed to the origin. <- Please use this tag if you wish to publish the changes.

## Step 2 - Deploy a new script under `packages/*`
1. Monitor the package build status on the [Circle CI dashboard](https://app.circleci.com/pipelines/github/sendbird/chat-ai-widget).
2. If the Circle CI dashboard indicates a successful build, proceed to [gate-k8s](https://github.com/sendbird/gate-k8s) and update the `common.version` value in [this file](https://github.com/sendbird/gate-k8s/blob/main/values/aichatbot/prod.yaml) with the tag created in step 1. [This PR](https://github.com/sendbird/gate-k8s/pull/1396) might be helpful to see how you can create a PR in the gate-k8s repository.
3. Once your PR is merged into the main branch in gate-k8s, the new script will be deployed immediately.
