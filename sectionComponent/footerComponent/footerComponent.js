import domGenerator from "dom-generator";
import "./index.scss";

import categoryCard from "../../components/categoryCardComponent/cardCategoryComponent";
import listGenerator from "../../src/js/creatList";

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
    eventListeners,
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
  // document.body.append(footer);
}

export default footerSectionComponent;
