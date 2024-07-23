import domGenerator from "dom-generator";
import "./index.scss";

import showRegisterForm from "../../src/js/RegisterFormValidation/registerValidationForm";
import renderLandingPage from "../../pages/landingPage/renderLandingPage";
import renderAdminPage from "../../pages/adminPage/renderingAdminPage";
import buttonGenerator from "../buttonComponent/buttonComponent";
import renderShopPage from "../../pages/shopPage/renderShopPage";
import createLinkElements from "./createLinkElements";

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

function headerAdminGenerator({
  size = "medium",
  statues = "primaryFill",
  className = "",
  eventListeners = {},
  eventProfileListeners = {},
  logo = "",
  boxBuy = "",
}) {
  // const number = 4;
  const linkTexts = ["صفحه اصلی", "داشبورد", "فروشگاه"];

  const links = createLinkElements(linkTexts, handleLinkClick);

  let headerAdmin = domGenerator({
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
        children: [
         ...links
        ], // Add links here
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
            tag: buttonGenerator({
              content: "ورود/عضویت",
              size: "medium",
              status: "signIn_up",
              eventListeners: { click: showRegisterForm },
            }),
          }
         
        ],
      },
    ],
  });


  return headerAdmin;
}

function handleLinkClick(index) {
  let main = document.getElementById("main");
  switch (index) {
    case 0:
      main.innerHTML = "";
      renderLandingPage();
      console.log("صفحه اصلی کلیک شد");
      break;
    case 1:
      main.innerHTML = "";
      renderAdminPage()
      console.log(" ادمین صفحه");
      break;
    case 2:
      main.innerHTML = "";
      renderShopPage();
      console.log("فروشگاه کلیک شد");
      break;
    default:
      console.log("لینک کلیک شد");
      break;
  }
}

export default headerAdminGenerator;