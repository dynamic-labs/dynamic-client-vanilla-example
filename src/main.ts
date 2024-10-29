import { setupApp } from "./app.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Dynamic Labs ClientJS Example</h1>
    <div id="outlet"></div>
  </div>
`;

setupApp(document.querySelector<HTMLDivElement>("#outlet")!);
