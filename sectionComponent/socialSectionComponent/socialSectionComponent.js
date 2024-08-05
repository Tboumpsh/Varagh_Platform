import domGenerator from "dom-generator";
import "./index.scss";

import categoryCard from "../../components/categoryCardComponent/cardCategoryComponent";

/**
 * Generates a social media section with links to various social platforms.
 * 
 * This function creates a section containing social media links, displayed as cards. Each card represents a different social platform with a link.
 * 
 * @param {Object} options - The options for generating the social section.
 * @param {string} [options.titleCategory=""] - The title of the social section.
 * @param {string} [options.size="medium"] - The size of the section ("small", "medium", "large"). Defaults to "medium".
 * @param {string} [options.statues="primaryFill"] - The status of the section ("primaryFill", "secondaryFill", etc.). Defaults to "primaryFill".
 * @param {string} [options.className=""] - Additional CSS class names to apply to the section. Defaults to an empty string.
 * @param {Object} [options.eventListeners={}] - An object containing event listeners to attach to the section's elements. Keys are event types (e.g., "click") and values are handler functions.
 * @param {string} [options.instagram=""] - The URL or identifier for the Instagram account.
 * @param {string} [options.linkedin=""] - The URL or identifier for the LinkedIn account.
 * @param {string} [options.whatsapp=""] - The URL or identifier for the WhatsApp account.
 * @param {string} [options.email=""] - The email address to be displayed.
 * 
 * @returns {HTMLDivElement} The DOM element representing the social media section with links to various platforms.
 * @see {@link domGenerator}
 * @see {@link categoryCard}
 */

function socialSection({
  titleCategory,
  size = "medium",
  statues = "primaryFill",
  className = "",
  eventListeners = {},
  instagram = "",
  linkedin = "",
  whatsapp = "",
  email = "",
}) {
  let social = domGenerator({
    tag: "div",
    attributes: {
      class: `socialSectionSectionWrapper ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    eventListeners,
    children: [
      {
        tag: "h2",
        properties: { textContent: titleCategory },
      },
      {
        tag: "div",
        attributes: { class: "socialSection" },
        children: [
          {
            tag: categoryCard({
              content: "instagram.com",
              size: "small",
              status: "default",
              anchorLink: "#",
              category: instagram,
            }),
          },
          {
            tag: categoryCard({
              content: "linkedin.com",
              size: "small",
              status: "default",
              anchorLink: "#",
              category: linkedin,
            }),
          },
          {
            tag: categoryCard({
              content: "whatsapp.com",
              size: "small",
              status: "default",
              anchorLink: "#",
              category: whatsapp,
            }),
          },
          {
            tag: categoryCard({
              content: "email@gmail.com",
              size: "small",
              status: "default",
              anchorLink: "#",
              category: email,
            }),
          },
        ],
      },
    ],
  });

  return social;
}

export default socialSection;
