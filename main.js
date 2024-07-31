import "/styles/cssReset.css";
import "/styles/index.scss";

import renderLandingPage from "./pages/landingPage/renderLandingPage";

/**
 * This module imports necessary CSS styles and then renders the landing page.
 *
 * - Imports global CSS reset styles from `/styles/cssReset.css`.
 * - Imports main stylesheet from `/styles/index.scss`.
 * - Imports the `renderLandingPage` function from `./pages/landingPage/renderLandingPage`.
 * - Calls the `renderLandingPage` function to initialize and render the landing page.
 *
 * This module is responsible for setting up the visual and functional aspects of the landing page by
 * ensuring that the required styles are applied and the page is rendered properly when the module is executed.
 *
 * @module
 * @requires /styles/cssReset.css
 * @requires /styles/index.scss
 * @requires ./pages/landingPage/renderLandingPage
 */

document.addEventListener("DOMContentLoaded", () => {
  renderLandingPage();
});
