import domGenerator from "dom-generator";
import "./index.scss";

import categoryCard from "/components/categoryCardComponent/cardCategoryComponent";

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
    eventListeners,
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
            content: "بزرگسالان",
            size: "medium",
            status: "default",
            anchorLink: "#",
            category: old,
          }),
        },
        {
          tag: categoryCard({
            content: "نوجوانان",
            size: "medium",
            status: "default",
            anchorLink: "#",
            category: teenager,
          }),
        },
        {
          tag: categoryCard({
            content: "کودکان",
            size: "medium",
            status: "default",
            anchorLink: "#",
            category: child,
          }),
        },
      ]
     }
    ],
  });

  // return footer;
  document.body.append(category);
}

export default categorySectionComponent;
