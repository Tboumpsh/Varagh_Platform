import domGenerator from "dom-generator";
import "./index.scss";

import { Telephone } from "../../constants/informationUS";
import { Address } from "../../constants/informationUS";
import { Mobile } from "../../constants/informationUS";

/**
 * Generates a contact us section with title and contact information.
 * 
 * This function creates a DOM element for a "Contact Us" section. It includes a title, contact information (mobile, telephone, address), and an optional image. The section is styled and configured based on the provided options.
 * 
 * @param {Object} options - The options for generating the contact us section.
 * @param {string} options.contactTitle - The title of the contact us section.
 * @param {string} options.mobileTitle - The title for the mobile contact information.
 * @param {string} options.addressTitle - The title for the address contact information.
 * @param {string} options.telephoneTitle - The title for the telephone contact information.
 * @param {string} [options.size="medium"] - The size of the section ("small", "medium", "large"). Defaults to "medium".
 * @param {string} [options.statues="primary"] - The status of the section ("primary", "secondary", etc.). Defaults to "primary".
 * @param {string} [options.className=""] - Additional CSS class names to be applied to the section. Defaults to an empty string.
 * @param {Object} [options.eventListeners={}] - An object containing event listeners to attach to the section's elements. The object keys are event types (e.g., "click"), and the values are handler functions.
 * @param {string} [options.imageSrc=""] - The URL of the image to be displayed in the contact section. Defaults to an empty string.
 * 
 * @returns {HTMLDivElement} The DOM element representing the contact us section.
 * 
 * @see {@link ../../constants/informationUS|Telephone, Mobile, Address}
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

    return contactUs;
}

export default contactUsComponent;
