import domGenerator from "dom-generator";
import "./index.scss";

import categoryCard from "../../components/categoryCardComponent/cardCategoryComponent";
import listGenerator from "../../src/js/creatList";

/**
 * Generates a footer section with information about the store, a list, and symbol icons.
 * 
 * This function creates a footer section DOM element. It includes a section for store information, a section for additional content, and a section for symbol icons. The footer can be styled and configured based on the provided options.
 * 
 * @param {Object} options - The options for generating the footer section.
 * @param {string} options.contentAboutSection - The text content for the "About" section in the footer.
 * @param {string} [options.size="medium"] - The size of the footer section ("small", "medium", "large"). Defaults to "medium".
 * @param {string} [options.statues="primaryFill"] - The status of the footer section ("primaryFill", "secondaryFill", etc.). Defaults to "primaryFill".
 * @param {string} [options.className=""] - Additional CSS class names to be applied to the footer section. Defaults to an empty string.
 * @param {Object} [options.eventListeners={}] - An object containing event listeners to attach to the footer section's elements. The object keys are event types (e.g., "click"), and the values are handler functions.
 * @param {string} [options.iconStart=""] - The URL of the image icon to display at the start of the footer section.
 * @param {string} [options.iconEnd=""] - The URL of the image icon to display at the end of the footer section.
 * @param {string} [options.upImage=""] - The URL of the image to display in the "About the Store" section.
 * 
 * @returns {HTMLDivElement} The DOM element representing the footer section.
 * 
 * @see {@link ../../components/categoryCardComponent/cardCategoryComponent|categoryCard}
 * @see {@link ../../src/js/creatList|listGenerator}
 */


function footerSectionComponent({
  contentAboutSection,
  size = "medium",
  statues = "primaryFill",
  className = "",
  eventListeners = {},
  iconStart = "",
  iconEnd = "",
  upImage = "",
}) {
  let footer = domGenerator({
    tag: "div",
    attributes: {
      class: `footerSection ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    children: [
      {
        tag: "div",
        attributes: {
          class: `informationSection ${className}`,
        },
        children: [
          {
            tag: categoryCard({
              content: "درباره فروشگاه ورق",
              size: "medium",
              status: "default",
              category: upImage,
              eventListeners,
            }),
          },
        ],
      },
      {
        tag: "div",
        attributes: {
          class: `aboutSection ${className}`,
        },
        children: [
          {
            tag: "h2",
            properties: { textContent: contentAboutSection },
          },
          {
            tag: listGenerator(),
          },
        ],
      },
      {
        tag: "div",
        attributes: {
          class: `symbolSection ${className}`,
        },
        children: [
          {
            tag: "img",
            attributes: { src: iconStart },
          },
          {
            tag: "img",
            attributes: { src: iconEnd },
          },
        ],
      },
    ],
  });

  return footer;
}

export default footerSectionComponent;
