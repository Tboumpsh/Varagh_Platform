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
        tag: "h3",
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

  // return footer;
  document.body.append(social);
}

export default socialSection;
