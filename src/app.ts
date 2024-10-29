import { setupAuthenticatedUserView } from "./authenticatedUserView";
import { dynamicClient } from "./dynamicClient";
import { setupLoginView } from "./loginView";

export function setupApp(element: HTMLDivElement) {
  element.innerHTML = "Loading...";

  dynamicClient.sdk.on("loadedChanged", () => {
    element.innerHTML = `
      <div id="login_view"></div>
      <div id="authenticated_user_view"></div>
    `;

    setupLoginView(document.querySelector<HTMLDivElement>("#login_view")!);
    setupAuthenticatedUserView(
      document.querySelector<HTMLDivElement>("#authenticated_user_view")!
    );
  });
}
