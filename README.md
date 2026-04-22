# @jakubcata/web-plugins

ReactJS library for web applications gathered under Jakubcata
Setup

`npm install`

## Testing

For testing purposes, there is the local instance of the storybook.

`npm run storybook`

This will run the storybook instance on port 6006.

## Workflow

To publish a new version of a package:

    - Checkout to branch from main.
    - Make your changes, commit and push them.
    - Run npm run changeset and push the generated changeset file.
    - GithubActions will check eslint and build (per-branch build is under construction).
    - Merge.
    - After you merge, locally checkout to main branch.
    - Pull changes from remote.
    - Run npm run release, this will publish your package on npm under new version.
    - Done.
