import domGenerator from "dom-generator";
import "./index.scss";

import renderChangeProfilePage from "../../pages/changeProfileUser/renderChangeProfile";
import addLogoutListener from "../../src/js/RegisterFormValidation/logOut";
import renderLandingPage from "../../pages/landingPage/renderLandingPage";
import renderAdminPage from "../../pages/adminPage/renderingAdminPage";
import headerEffect from "../../src/js/headerEffect/headerEffect";
import buttonGenerator from "../buttonComponent/buttonComponent";
import renderShopPage from "../../pages/shopPage/renderShopPage";
import createLinkElements from "./createLinkElements";

/**
 * Generates an admin header component with a logo, navigation links, user profile section, and logout button.
 * 
 * @function headerAdminGenerator
 * @param {Object} options - Configuration object for the header.
 * @param {string} [options.size="medium"] - The size of the header component. Defaults to `"medium"`.
 * @param {string} [options.statues="primaryFill"] - The status/style of the header component. Defaults to `"primaryFill"`.
 * @param {string} [options.className=""] - Additional class names to apply to the header container. Defaults to an empty string.
 * @param {Object} [options.eventListeners={}] - Event listeners to attach to the header component. Defaults to an empty object.
 * @param {string} [options.logo=""] - The URL of the logo image to be displayed in the header. Defaults to an empty string.
 * 
 * @returns {HTMLElement} The generated header element containing the logo, navigation links, user profile section, and logout button.
 * ;
 */



function headerAdminGenerator({
  size = "medium",
  statues = "primaryFill",
  className = "",
  eventListeners = {},
  logo = "",
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
            tag: "p",
            properties: { textContent: "support" },
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
              size: "medium",
              status: "logOut",
              eventListeners: { click: addLogoutListener },
            }),
          }
         
        ],
      },
    ],
  });
  headerEffect(headerAdmin)

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