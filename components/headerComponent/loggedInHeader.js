// import domGenerator from "dom-generator";
import domGenerator from "dom-generator";
// import "./index.scss";
import "./index.scss";

import renderChangeProfilePage from "../../pages/changeProfileUser/renderChangeProfile";
import addLogoutListener from "../../src/js/RegisterFormValidation/logOut";
import headerEffect from "../../src/js/headerEffect/headerEffect";
import buttonGenerator from "../buttonComponent/buttonComponent";
import createLinkElements from "./createLinkElements";
import createLinks from "/src/js/creatLink";
import handleLinkClick from "./pageHandler";

/**
 * Generates a base button element with optional properties.
 * @param {Object} options - The options for generating the button.
 * @param {string} options.content - The text content of the button.
 * @param {string} [options.size="medium"] - The size of the button ("small", "medium", "large").
 * @param {string} [options.status="primaryFill"] - The status of the button ("primaryFill", "secondaryFill", "tertiaryFill", "quaternaryFill").
 * @param {string} [options.type="button"] - The type of the button ("button", "submit", "reset").
 * @param {string} [options.className=""] - Additional class names for the button.
 * @param {string} [options.anchorLink="#"] - The href link for the button if it acts as an anchor.
 * @param {Object} [options.eventListeners={}] - Event listeners to attach to the button.
 * @param {boolean} [options.disabled] - Whether the button should be disabled.
 * @param {string} [options.iconStart=""] - The URL of the image icon to display at the start of the button.
 * @param {string} [options.iconEnd=""] - The URL of the image icon to display at the end of the button.
 * @returns {HTMLDivElement} - The generated button element.
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
  const linkTexts = ["صفحه اصلی", "درباره ما", "فروشگاه", "علاقه مندی ها"];

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
  headerEffect(header)
  return header;
}

handleLinkClick();

export default loggedInHeader;
