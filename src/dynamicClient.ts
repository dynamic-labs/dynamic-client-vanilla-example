import { createClient } from "@dynamic-labs/client";
import { WebExtension } from "@dynamic-labs/web-extension";

export const dynamicClient = createClient({
  apiBaseUrl: "https://app.dynamic-preprod.xyz/api/v0",
  environmentId: "36107460-1867-45d5-901b-6a3581025990",
}).extend(WebExtension());
