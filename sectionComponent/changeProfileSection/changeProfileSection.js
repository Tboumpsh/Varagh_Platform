import domGenerator from "dom-generator";
import axios from "axios";
import "./index.scss";

import buttonGenerator from "../../components/buttonComponent/buttonComponent";
import inputGenerator from "../../components/inputComponent/inputComponent";

/**
 * Generates a section for changing user profile information.
 * 
 * This function creates a DOM element that represents a profile change section. It includes a title, a paragraph for instructions, a file input for uploading profile images, and a button for saving changes. The section is styled and configured according to the provided options.
 * 
 * @param {Object} options - The options for generating the profile change section.
 * @param {string} options.changeProfileTitle - The title of the profile change section.
 * @param {string} options.changeProfileParagraph - The paragraph describing the profile change instructions or information.
 * @param {string} [options.size="medium"] - The size of the section ("small", "medium", "large"). Defaults to "medium".
 * @param {string} [options.statues="primaryFill"] - The status of the section ("primaryFill", "secondaryFill", etc.). Defaults to "primaryFill".
 * @param {string} [options.className=""] - Additional CSS class names to be applied to the section. Defaults to an empty string.
 * @param {Object} [options.eventListeners={}] - An object containing event listeners to attach to the section's elements. The object keys are event types (e.g., "click"), and the values are handler functions.
 * 
 * @returns {HTMLDivElement} The DOM element representing the profile change section.
 * 
 * 
 * @see {@link ../../components/buttonComponent/buttonComponent|buttonGenerator}
 * @see {@link ../../components/inputComponent/inputComponent|inputGenerator}
 */

function changeProfileSection({
  changeProfileTitle,
  changeProfileParagraph,
  size = "medium",
  statues = "primaryFill",
  className = "",
  eventListeners = {},
}) {
  let changeProfile = domGenerator({
    tag: "div",
    attributes: {
      class: `changeProfileSectionWrapper ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    children: [
      {
        tag: "div",
        attributes: { id: "changeProfileContent" },
        children: [
          {
            tag: "h2",
            properties: { textContent: changeProfileTitle },
          },
          {
            tag: "p",
            properties: { textContent: changeProfileParagraph },
          },
        ],
      },
      {
        tag: "div",
        attributes: { id: "changeProfile" },
        children: [
          {
            tag: "div",
            attributes: { id: "profileDiv", class: "profile" },
            eventListeners: {},
            children: [
              {
                tag: inputGenerator({
                  inputId: "fileInput",
                  type: "file",
                  size: "extraSmall",
                  statues: "resetInput",
                }),
              },
            ],
          },
          {
            tag: buttonGenerator({
              content: "ذخیره تغیرات",
              size: "medium",
              status: "primaryGreen",
              className: "saveButton",
            }),
          },
        ],
      },
    ],
  });
 


  return changeProfile;

}

export default changeProfileSection;
