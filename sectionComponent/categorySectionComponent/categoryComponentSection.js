import domGenerator from "dom-generator";
import "./index.scss";

import categoryCard from "/components/categoryCardComponent/cardCategoryComponent";
import renderShopPage from "../../pages/shopPage/renderShopPage";

/**
 * Generates a section component for displaying categories of books.
 * 
 * This function creates a DOM element that represents a section containing multiple category cards. Each card corresponds to a different category of books (e.g., children, teenagers, adults). The section is styled and configured according to the provided options.
 * 
 * @param {Object} options - The options for generating the category section.
 * @param {string} options.titleCategory - The title of the category section.
 * @param {string} [options.size="medium"] - The size of the section ("small", "medium", "large"). Defaults to "medium".
 * @param {string} [options.statues="primaryFill"] - The status of the section ("primaryFill", "secondaryFill", etc.). Defaults to "primaryFill".
 * @param {string} [options.className=""] - Additional CSS class names to be applied to the section. Defaults to an empty string.
 * @param {Object} [options.eventListeners={}] - An object containing event listeners to attach to the section's elements. The object keys are event types (e.g., "click"), and the values are handler functions.
 * @param {string} [options.old=""] - The identifier or URL for the "Children" category. Defaults to an empty string.
 * @param {string} [options.child=""] - The identifier or URL for the "Adults" category. Defaults to an empty string.
 * @param {string} [options.teenager=""] - The identifier or URL for the "Teenagers" category. Defaults to an empty string.
 * 
 * @returns {HTMLDivElement} The DOM element representing the category section.
 *
 * @see {@link /components/categoryCardComponent/cardCategoryComponent|categoryCard}
 * @see {@link ../../pages/shopPage/renderShopPage|renderShopPage}
 */

function categorySectionComponent({
  titleCategory,
  size = "medium",
  statues = "primaryFill",
  className = "",
  eventListeners = {},
  old = "",
  child = "",
  teenager = "",
}) {
  let category = domGenerator({
    tag: "div",
    attributes: {
      class: `categorySectionWrapper ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    children: [
     {
      tag:'h3',
      properties:{textContent:titleCategory}
     },
     {
      tag:'div',
      attributes:{class:"categorySection"},
      children:
      [
        {
          tag: categoryCard({
            content: "کودکان",
            size: "medium",
            status: "default",
            eventListeners:{click: ()=> renderShopPage() },
            category: old,
          }),
        },
        {
          tag: categoryCard({
            content: "نوجوانان",
            size: "medium",
            status: "default",
            eventListeners:{click: ()=> renderShopPage() },
            category: teenager,
          }),
        },
        {
          tag: categoryCard({
            content: "بزرگسالان",
            size: "medium",
            status: "default",
            eventListeners:{click: ()=> renderShopPage() },
            category: child,
          }),
        },
      ]
     }
    ],
  });

  return category;

}

export default categorySectionComponent;
