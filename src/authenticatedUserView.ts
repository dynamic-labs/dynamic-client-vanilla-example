import { dynamicClient } from "./dynamicClient";

export function setupAuthenticatedUserView(element: HTMLDivElement) {
  element.innerHTML = "";

  const render = () => {
    /**
     * Do not render the authenticated user view if the user is not authenticated
     */
    if (!dynamicClient.auth.authenticatedUser) {
      element.innerHTML = "";

      return;
    }

    element.innerHTML = `
      <button id="user_profile">User profile</button>
      <button id="logout">Logout</button>
    `;

    document
      .querySelector<HTMLButtonElement>("#user_profile")!
      .addEventListener("click", () => {
        dynamicClient.ui.userProfile.show();
      });

    document
      .querySelector<HTMLButtonElement>("#logout")!
      .addEventListener("click", () => {
        dynamicClient.auth.logout();
      });
  };

  dynamicClient.auth.on("authenticatedUserChanged", render);

  render();
}
