# Prevent Accidental NPM Publish

By disallowing publishing in your `package.json` and allowing it only in your CI build.

## Usage

1. Set `"private": true` in your NPM package's `package.json`. You won't be able to publish your package to NPM without removing that.
2. Add the following steps to your CI build:

```
npm install allow-publish
$(npm bin)/allow-publish ./package.json
```

Packages produced by `npm pack` on your build machine will be publishable now.
