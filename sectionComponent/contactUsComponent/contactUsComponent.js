import domGenerator from "dom-generator";
import "./index.scss";

import { Telephone } from "../../constants/informationUS";
import { Address } from "../../constants/informationUS";
import { Mobile } from "../../constants/informationUS";

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
function contactUsComponent({
  contactTitle,
  mobileTitle,
  addressTitle,
  telephoneTitle,
  size = "medium",
  statues = "primary",
  className = "",
  eventListeners = {},
  imageSrc = "",
}) {
  let contactUs = domGenerator({
    tag: "div",
    attributes: {
      class: `contactUs  ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    eventListeners,
    children: [
      {
        tag: "h2",
        properties: { textContent: contactTitle },
      },
      {
        tag: "div",
        attributes: { id: "contactSectionContent" },
        children: [
          {
            tag: "div",
            attributes: { id: "informationContact" },
            children: [
              {
                tag: "h3",
                properties: { textContent: mobileTitle },
                children: [
                  {
                    tag: "p",
                    properties: { textContent: Telephone },
                  },
                ],
              },
              {
                tag: "h3",
                properties: { textContent:  telephoneTitle },
                children: [
                  {
                    tag: "p",
                    properties: { textContent: Mobile },
                  },
                ],
              },
              {
                tag: "h3",
                properties: { textContent:   addressTitle, },
                children: [
                  {
                    tag: "p",
                    properties: { textContent: Address },
                  },
                ],
              },
            ],
          },
          {
            tag: "div",
            attributes: { id: "imageSection" },
            children: [
              {
                tag: "img",
                attributes: { src: imageSrc },
              },
            ],
          },
        ],
      },
    ],
  });

  //   return aboutSections;
  document.body.append(contactUs);
}

export default contactUsComponent;
