import domGenerator from "dom-generator";
import "./index.scss";

/**
 * Generates a category card component with an image and title.
 * 
 * This function creates a card component that displays a category image and title.
 * The card can be customized with various attributes, event listeners, and styling options.
 * 
 * @function categoryCard
 * @param {Object} options - Configuration object for the category card component.
 * @param {string} options.content - The title text to display on the card.
 * @param {string} [options.size="medium"] - The size of the card, affecting its styling.
 * @param {string} [options.statues="primary"] - The status of the card, affecting its appearance.
 * @param {string} [options.className=""] - Additional CSS class names to apply to the card component.
 * @param {string} [options.anchorLink="#"] - The anchor link for the card, typically used for navigation.
 * @param {Object} [options.eventListeners={}] - An object containing event listeners to attach to the card's elements.
 * @param {string} [options.category=""] - The URL of the image to display in the card.
 * 
 * @returns {HTMLElement} The generated category card component element.
 * 
 */

function categoryCard({
  content,
  size = "medium",
  statues = "primary",
  className = "",
  anchorLink = "#",
  eventListeners = {},
  category = "",
}) {
  let cardCategory = domGenerator({
    tag: "div",
    attributes: {
      class: `cardCategoryComponentWrapper  ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    children: [
      {
        tag: "img",
        attributes: { src: category },
        eventListeners,
      },
      {
        tag: "h4",
        properties: { textContent: content },
        attributes: {
          class: `titleCategory ${className}`,
          eventListeners,
          
        },
      },
    ],
  });

  return cardCategory;
}

export default categoryCard;
