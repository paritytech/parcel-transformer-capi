# Parcel Transformer Capi

Custom parcel transformer for integrating Capi into Parcel projects.

Currently this plugin tears out the unnecessary `node:fs` import that prevents
Parcel from compiling in `development` mode.

## Usage

```sh
pnpm i @capi/parcel-transformer
```
