import domGenerator from "dom-generator";
import "./index.scss";

import buttonGenerator from "../../components/buttonComponent/buttonComponent";
import renderShopPage from "../../pages/shopPage/renderShopPage";

/**
 * Generates a section displaying the cheapest products.
 * 
 * This function creates a DOM element representing a section that lists the cheapest products. It includes a title, a placeholder for the list of cheapest products, and a button that redirects to the shop page. The section is styled and configured based on the provided options.
 * 
 * @param {Object} options - The options for generating the cheapest card section.
 * @param {string} options.titleCheapest - The title of the cheapest products section.
 * @param {string} [options.size="medium"] - The size of the section ("small", "medium", "large"). Defaults to "medium".
 * @param {string} [options.statues="primaryFill"] - The status of the section ("primaryFill", "secondaryFill", etc.). Defaults to "primaryFill".
 * @param {string} [options.className=""] - Additional CSS class names to be applied to the section. Defaults to an empty string.
 * @param {Object} [options.eventListeners={}] - An object containing event listeners to attach to the section's elements. The object keys are event types (e.g., "click"), and the values are handler functions.
 * 
 * @returns {HTMLDivElement} The DOM element representing the cheapest card section.
 * 
 * 
 * @see {@link ../../components/buttonComponent/buttonComponent|buttonGenerator}
 * @see {@link ../../pages/shopPage/renderShopPage|renderShopPage}
 */

 function cheapestCardSectionComponent({
  titleCheapest,
  size = "medium",
  statues = "primaryFill",
  className = "",
  eventListeners = {},
}) {
  let cheapestCardSection = domGenerator({
    tag: "div",
    attributes: {
      class: `cheapestCardSectionWrapper ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    eventListeners,
    children: [
      {
        tag: "div",
        attributes: {
          class: `cheapestCardSection ${className}`,
        },
        children: [
          {
            tag: "h2",
            properties: { textContent: titleCheapest },
          },
          {
            tag: "div",
            attributes: {
              id: "cardCheapestList",
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


  return cheapestCardSection;
}

export default cheapestCardSectionComponent;
