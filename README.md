# hermes

A Node.js client-server architecture for sending & fetching email.

## Overview

The repo is split up into a number of packages -

- [hermes-web](apps/web/) A web client
- [hermes-native](apps/native/) A cross platform (iOS/Android) app
- [@hermes-js/api](packages/api/) An http server with a GraphQL endpoint and REST webhooks
- [@hermes-js/dev](packages/dev/) A collection of cli tools and build scripts used across repo packages
- [@hermes-js/env](packages/env/) A typed Node environment instance used across repo packages
- [@hermes-js/library](packages/library/) A collection of common functions, types, and references used across frontend and backend repo packages
- [@hermes-js/models](packages/models/) The definitions for database models and PostgreSQL connection instance

## Requests

API test -

```
curl -L -X GET 'http://localhost:${PORT}'
```