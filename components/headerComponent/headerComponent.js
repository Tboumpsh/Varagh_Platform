import "/Lib/silverBox/silverBox.min.scss";
import domGenerator from "dom-generator";
import "./index.scss";

import showRegisterForm from "../../src/js/RegisterFormValidation/registerValidationForm";
import renderLandingPage from "../../pages/landingPage/renderLandingPage";
import renderBookLoveListPage from "../../pages/lovePage/renderLovePage";
import renderAboutPage from "../../pages/aboutUsPage/renderAboutPage";
import headerEffect from "../../src/js/headerEffect/headerEffect";
import buttonGenerator from "../buttonComponent/buttonComponent";
import renderShopPage from "../../pages/shopPage/renderShopPage";
import renderPlanPage from "../../pages/planPage/renderPlanPage";
import createLinkElements from "./createLinkElements";
import silverBox from "/Lib/silverBox/silverBox.min";

/**
 * Generates a header component with navigation links and user profile options.
 *
 * This function creates a header section with a logo, navigation links, and a user profile button.
 * The links are dynamically generated and assigned click handlers. When clicked, they render different pages or display alerts.
 *
 * @function headerGenerator
 * @param {Object} params - The configuration parameters for the header.
 * @param {string} [params.size="medium"] - The size of the header component.
 * @param {string} [params.statues="primaryFill"] - The status of the header component, determining its styling.
 * @param {string} [params.className=""] - Additional CSS class names to apply to the header component.
 * @param {string} [params.logo=""] - The URL of the logo image to display in the header.
 * 
 * @returns {HTMLElement} The generated header component as an HTML element.
 * 
 */


function headerGenerator({
  size = "medium",
  statues = "primaryFill",
  className = "",
  logo = "",
}) {
  // const number = 4;
  const linkTexts = ["صفحه اصلی", "درباره ما", "فروشگاه", "علاقه مندی ها" , 'خرید پلن'];

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
            tag: buttonGenerator({
              content: "ورود/عضویت",
              size: "medium",
              status: "signIn_up",
              eventListeners: { click: showRegisterForm },
              
            }),
          },
        ],
      },
    ],
  });
  headerEffect(header);
  return header;
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
      renderAboutPage();
      console.log("درباره ما کلیک شد");
      break;
    case 2:
      main.innerHTML = "";
      renderShopPage();
      console.log("فروشگاه کلیک شد");
      break;
    case 3:
      main.innerHTML = "";
      silverBox({
        position: "top-right",
        alertIcon: "info",
        text: "شما هنوز وارد حساب کاربری خود نشدید",
        centerContent: true,
        showCloseButton: true,
      });
      renderBookLoveListPage();
      console.log("علاقه مندی ها کلیک شد");
      break;
    case 4:
      main.innerHTML = "";
      silverBox({
        position: "top-right",
        alertIcon: "info",
        text: "شما هنوز وارد حساب کاربری خود نشدید",
        centerContent: true,
        showCloseButton: true,
      });
      renderPlanPage();
      console.log("علاقه مندی ها کلیک شد");
      break;
    default:
      console.log("لینک کلیک شد");
      break;
  }
}

export default headerGenerator;
