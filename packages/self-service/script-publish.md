# Guide for Publishing Self-Service Script

## Prerequisites

### Case 1: When there are changes in `@sendbird/chat-ai-widget`:

After successfully releasing the `chat-ai-widget` package, following the instructions in [release-guide.md](../../release-guide.md), update the version of `@sendbird/chat-ai-widget` to the latest in `package.json` using `npm install`. Ensure that `package-lock.json` is also updated.

### Case 2: When there are changes only in `packages/self-service/*`:

No specific prerequisites are required.

## Common Steps

1. Test the functionality locally by building this directory with `npm run build`. Utilize [embed-example.html](./embed-example.html) for testing purposes.
2. Create a new tag and push it to this repository. Monitor the package build status on the [Circle CI dashboard](https://app.circleci.com/pipelines/github/sendbird/chat-ai-widget).
3. If the Circle CI dashboard displays a green light, proceed to [gate-k8s](https://github.com/sendbird/gate-k8s) and update the `common.version` value in [this file](https://github.com/sendbird/gate-k8s/blob/main/values/aichatbot/prod.yaml) with the tag created in step 2. [This PR](https://github.com/sendbird/gate-k8s/pull/1396) might be helpful to see how you can create a PR in the gate-k8s repository.
4. Once your PR is merged to the main branch in gate-k8s, the new script will be deployed right away.
