import domGenerator from "dom-generator";
import "./index.scss";

/**
 * Generates a hero section element with a title, content, and an image.
 * 
 * This function creates a hero section DOM element which includes a title, descriptive content, and an image. It allows customization of the section's size, status, and additional styles through class names.
 * 
 * @param {Object} options - The options for generating the hero section.
 * @param {string} options.titleHero - The title text to display in the hero section.
 * @param {string} options.contentHero - The content text to display in the hero section.
 * @param {string} [options.size="medium"] - The size of the hero section ("small", "medium", "large"). Defaults to "medium".
 * @param {string} [options.statues="primaryFill"] - The status of the hero section ("primaryFill", "secondaryFill", etc.). Defaults to "primaryFill".
 * @param {string} [options.className=""] - Additional CSS class names to apply to the hero section. Defaults to an empty string.
 * @param {Object} [options.eventListeners={}] - An object containing event listeners to attach to the hero section's elements. Keys are event types (e.g., "click") and values are handler functions.
 * @param {string} [options.srcHero=""] - The URL of the image to display in the hero section. Defaults to an empty string.
 * 
 * @returns {HTMLDivElement} The DOM element representing the hero section.
 * 
 * @see {@link domGenerator}
 */

function heroSectionComponent({
  titleHero,
  contentHero,
  size = "medium",
  statues = "primaryFill",
  className = "",
  eventListeners = {},
  srcHero = "",
}) {
  let heroSection = domGenerator({
    tag: "div",
    attributes: {
      class: `heroSectionWrapper ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    children: [
      {
        tag: "div",
        attributes: {
          class: `heroSection ${className}`,
        },
        children: [
          {
            tag: "div",
            attributes: {
              id: "heroDescription",
            },
            children: [
              {
                tag: "h2",
                properties: { textContent: titleHero },
              },
              {
                tag: "p",
                properties: { textContent: contentHero },
              },
            ],
          },
          {
            tag: "div",
            attributes: {id:"imageSectionHero" },
            children: [
              {
                tag: "img",
                attributes: { src: srcHero, id: "imageHero" },
              },
            ],
          },
        ],
      },
    ],
  });

  return heroSection;
}

export default heroSectionComponent;
