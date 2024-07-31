import domGenerator from "dom-generator";
import "./index.scss";

import buttonGenerator from "../../components/buttonComponent/buttonComponent";
import renderShopPage from "../../pages/shopPage/renderShopPage";

/**
 * Generates a section for displaying the best-selling books.
 * 
 * This function creates a DOM element that includes a title, a container for best-selling book cards, and a button to navigate to the shop page.
 * The section is styled and configured according to the provided options.
 * 
 * @param {Object} params - The parameters for configuring the best-seller section.
 * @param {string} params.titleBestSeller - The title text for the best-seller section.
 * @param {string} [params.size="medium"] - The size of the section. This is passed as a data attribute. Defaults to "medium".
 * @param {string} [params.statues="primaryFill"] - The status of the section. This is passed as a data attribute. Defaults to "primaryFill".
 * @param {string} [params.className=""] - Additional CSS class names to be applied to the section. Defaults to an empty string.
 * @param {Object} [params.eventListeners={}] - An object containing event listeners to be attached to the section's elements. The object keys are event types (e.g., "click"), and the values are handler functions.
 * 
 * @returns {HTMLElement} The DOM element representing the best-seller section.
 * 
 * @example
 * const bestSellerSection = bestSellerSectionComponent({
 *   titleBestSeller: "پر فروش‌ترین کتاب‌ها",
 *   size: "large",
 *   statues: "secondaryFill",
 *   className: "custom-class",
 *   eventListeners: {
 *     click: () => console.log('Section clicked!')
 *   }
 * });
 * document.body.appendChild(bestSellerSection);
 * 
 * @see {@link ../../components/buttonComponent/buttonComponent|buttonGenerator}
 * @see {@link ../../pages/shopPage/renderShopPage|renderShopPage}
 */

 function bestSellerSectionComponent({
  titleBestSeller,
  size = "medium",
  statues = "primaryFill",
  className = "",
  eventListeners = {},
}) {
  let bestSellerSection = domGenerator({
    tag: "div",
    attributes: {
      class: `bestSellerSectionWrapper ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    eventListeners,
    children: [
      {
        tag: "div",
        attributes: {
          class: `bestSellerSection ${className}`,
        },
        children: [
          {
            tag: "h2",
            properties: { textContent: titleBestSeller },
          },
          {
            tag: "div",
            attributes: {
              id: "cardBestSellerList",
            },
          },
          {
            tag: buttonGenerator({
              content: "بریم به فروشگاه",
              size: "medium",
              status: "primaryGreen",
              anchorLink: "",
              eventListeners: {click: ()=> renderShopPage()},
            }),
          },
        ],
      },
    ],
  });


    return bestSellerSection;
}

export default bestSellerSectionComponent;
