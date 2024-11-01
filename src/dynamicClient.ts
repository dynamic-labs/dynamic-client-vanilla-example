import { createClient } from "@dynamic-labs/client";
import { WebExtension } from "@dynamic-labs/web-extension";

export const dynamicClient = createClient({
  environmentId: "0ea95bd7-40a3-45fd-8eae-2b844146306d",
}).extend(WebExtension());
