import { Transformer } from "@parcel/plugin";

export default new Transformer({
  async transform({ asset, options }) {
    const code = await asset.getCode();

    const result = code
      .replace(/import (.*?) \"node:fs\"(.*?)\n/g, () => "")
      .replace(
        /tryGetEnv\(\"CAPI_SERVER\"\)/g,
        () => `\"${options.env.CAPI_SERVER}\"`
      )
      .replace(
        /tryGetEnv\(\"CAPI_TARGET\"\)/g,
        () => `\"${options.env.CAPI_TARGET}\"`
      );

    asset.setCode(result);
    return [asset];
  },
});
