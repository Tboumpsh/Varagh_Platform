import domGenerator from "dom-generator";
import axios from "axios";
import "./index.scss";

import showBookDetails from "../../src/js/booksDataList/bookDetaList";
import buttonGenerator from "../buttonComponent/buttonComponent";
import addToLoveList from "../../src/js/loveList/addToLoveList";

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


function bookCardGenerator({
  titleContent,
  paragraphContent,
  size = "medium",
  statues = "primary",
  className = "",
  anchorLink = "#",
  eventListeners = {},
  bannerSrc = "",
}) {
  let bookComponent = domGenerator({
    tag: "div",
    attributes: {
      class: `bookCardComponentWrapper  ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    children: [
      {
        tag: "div",
        attributes: { id: "contents" },
        children: [
          {
            tag: "img",
            attributes: { id: "imageBanner" , src: bannerSrc},
          },
        ],
      },
      {
        tag: "div",
        attributes: { id: "booksInformation" },
        children: [
          {
            tag:'h2',
            properties:{}
          },
          {
            tag:'p',
            properties:{}
          },
        ],
      },
    ],
  });

  return bookComponent;
  // document.body.append(cardComponent);
}

export default bookCardGenerator;
