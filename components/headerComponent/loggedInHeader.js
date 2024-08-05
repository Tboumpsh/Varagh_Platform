import domGenerator from "dom-generator";
import "./index.scss";

import renderChangeProfilePage from "../../pages/changeProfileUser/renderChangeProfile";
import renderBuyBookListPage from "../../pages/buyBookListPage/renderBuyBookListPage";
import addLogoutListener from "../../src/js/RegisterFormValidation/logOut";
import renderLandingPage from "../../pages/landingPage/renderLandingPage";
import headerEffect from "../../src/js/headerEffect/headerEffect";
import buttonGenerator from "../buttonComponent/buttonComponent";
import createLinkElements from "./createLinkElements";
import handleLinkClick from "./pageHandler";

/**
 * Generates a header component for logged-in users with navigation links, profile options, and a logout button.
 *
 * This function creates a header section that includes a logo, navigation links, a profile image, and a logout button.
 * The navigation links are dynamically generated and assigned click handlers. The profile image and logout button also have
 * specific event listeners for user interactions.
 *
 * @function loggedInHeader
 * @param {Object} params - Configuration parameters for the header.
 * @param {string} [params.size="medium"] - The size of the header component.
 * @param {string} [params.statues="primaryFill"] - The status of the header component, affecting its styling.
 * @param {string} [params.className=""] - Additional CSS class names to apply to the header component.
 * @param {Object} [params.eventListeners={}] - Event listeners to attach to the header element.
 * @param {Object} [params.eventProfileListeners={}] - Event listeners to attach to the profile-related elements.
 * @param {string} [params.logo=""] - The URL of the logo image to display in the header.
 * @param {string} [params.boxBuy=""] - The URL of the image for the buy box.
 * 
 * @returns {HTMLElement} The generated header component as an HTML element.
 * 
 */


function loggedInHeader({
  size = "medium",
  statues = "primaryFill",
  className = "",
  eventListeners = {},
  eventProfileListeners = {},
  logo = "",
  boxBuy = "",
}) {
  // const number = 4;
  const linkTexts = ["صفحه اصلی", "درباره ما", "فروشگاه", "علاقه مندی ها" , "خرید پلن" , "حساب من"];

  // Create link elements with event listeners using the external function
  const links = createLinkElements(linkTexts, handleLinkClick);

  let header = domGenerator({
    tag: "div",
    attributes: {
      class: `headerWrapper ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    children: [
      {
        tag: "img",
        attributes: { src: logo },
        eventListeners: { click: () => renderLandingPage() },
      },
      {
        tag: "div",
        attributes: {
          class: `headerSection`,
        },
        children: [...links], // Add links here
      },
      {
        tag: "div",
        attributes: {
          id: `userProfile`,
        },
        children: [
          {
            tag: "img",
            attributes: { src: boxBuy },
            eventListeners: { click: () => renderBuyBookListPage() },
          },
          {
            tag: "div",
            properties: { textContent: "پروفایل" },
            attributes: {
              id: `profileImage`,
            },
            eventListeners: { click: () => renderChangeProfilePage() },
          },
          {
            tag: buttonGenerator({
              content: "خروج از حساب",
              status: "logOut",
              eventListeners: { click: addLogoutListener },
            }),
          },
        ],
      },
    ],
  });
  headerEffect(header);
  return header;
}

handleLinkClick();

export default loggedInHeader;
