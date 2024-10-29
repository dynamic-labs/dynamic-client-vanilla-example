import { dynamicClient } from "./dynamicClient";

export function setupLoginView(element: HTMLDivElement) {
  element.innerHTML = "";

  const render = () => {
    /**
     * Do not render login view if user is authenticated
     */
    if (dynamicClient.auth.authenticatedUser) {
      element.innerHTML = "";

      return;
    }

    element.innerHTML = `
      <button id="showAuth">Open Auth</button>
    `;

    document
      .querySelector<HTMLButtonElement>("#showAuth")!
      .addEventListener("click", () => {
        dynamicClient.ui.auth.show();
      });
  };

  dynamicClient.auth.on("authenticatedUserChanged", render);

  render();
}
