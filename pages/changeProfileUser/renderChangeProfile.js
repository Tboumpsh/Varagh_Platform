import changeProfiles from "../../src/js/changeProfile/changeProfile";
import changeProfileUserSection from "./changeProfileUser";

/**
 * Renders the Change Profile page by updating the main content area of the page.
 * This function:
 * 1. Clears the existing content of the main element.
 * 2. Appends the Change Profile section to the main element.
 * 3. Initializes the profile change functionality.
 *
 * @function renderChangeProfilePage
 * @returns {void}
 *
 * @description
 * - Retrieves the main HTML element by its ID (`"main"`).
 * - Clears the current content of the main element by setting `innerHTML` to an empty string.
 * - Appends the result of `changeProfileUserSection()` to the main element, which generates the profile change section.
 * - Calls the `changeProfiles()` function to initialize or update profile change functionality.
 */

function renderChangeProfilePage() {
  let main = document.getElementById("main");
  main.innerHTML = "";
  main.append(changeProfileUserSection());
  changeProfiles();
}
export default renderChangeProfilePage;
