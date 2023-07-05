import { Transformer } from "@parcel/plugin";

export default new Transformer({
  async transform({ asset }) {
    const code = await asset.getCode();
    const result = code.replace(/import (.*?) \"node:fs\"(.*?)\n/g, () => "");

    asset.setCode(result);
    return [asset];
  },
});
