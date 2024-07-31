import domGenerator from "dom-generator";
import "./index.scss";

import buttonGenerator from "../../components/buttonComponent/buttonComponent";
import renderShopPage from "../../pages/shopPage/renderShopPage";

/**
 * Generates a section for displaying the newest cards with a title and a button.
 * 
 * This function creates a section that includes a title, a placeholder for displaying the newest cards, and a button that redirects to the shop page. The section's appearance and behavior can be customized through various options.
 * 
 * @param {Object} options - The options for generating the newest card section.
 * @param {string} options.titleNewest - The title text to display in the newest card section.
 * @param {string} [options.size="medium"] - The size of the section ("small", "medium", "large"). Defaults to "medium".
 * @param {string} [options.statues="primaryFill"] - The status of the section ("primaryFill", "secondaryFill", etc.). Defaults to "primaryFill".
 * @param {string} [options.className=""] - Additional CSS class names to apply to the section. Defaults to an empty string.
 * @param {Object} [options.eventListeners={}] - An object containing event listeners to attach to the section's elements. Keys are event types (e.g., "click") and values are handler functions.
 * 
 * @returns {HTMLDivElement} The DOM element representing the newest card section.
 * @see {@link domGenerator}
 * @see {@link buttonGenerator}
 * @see {@link renderShopPage}
 */

 function newestCardSectionComponent({
  titleNewest,
  size = "medium",
  statues = "primaryFill",
  className = "",
  eventListeners = {},
}) {
  let newestCardSection = domGenerator({
    tag: "div",
    attributes: {
      class: `newestCardSectionWrapper ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    eventListeners,
    children: [
      {
        tag: "div",
        attributes: {
          class: `newestCardsSection ${className}`,
        },
        children: [
          {
            tag: "h2",
            properties: { textContent: titleNewest },
          },
          {
            tag: "div",
            attributes: {
              id: "cardNewestList",
            },
          },
          {
            tag: buttonGenerator({
              content: "بریم به فروشگاه",
              size: "medium",
              status: "primaryGreen",
              anchorLink: "",
              eventListeners:{click: ()=> renderShopPage()},
            }),
          },
        ],
      },
    ],
  });


  return newestCardSection;
}

export default newestCardSectionComponent;
