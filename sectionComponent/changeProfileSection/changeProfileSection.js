import domGenerator from "dom-generator";
import axios from "axios";
import "./index.scss";

import buttonGenerator from "../../components/buttonComponent/buttonComponent";
import inputGenerator from "../../components/inputComponent/inputComponent";
import changeProfiles from "../../src/js/changeProfile/changeProfile";

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

async function changeProfileSection({
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
 
  //   return changeProfile;
  document.body.append(changeProfile);
  changeProfiles()

}

export default changeProfileSection;
