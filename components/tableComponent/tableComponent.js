import domGenerator from "dom-generator";
import "./index.scss";

import buttonGenerator from "../buttonComponent/buttonComponent";

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

function tableComponent({
  titleTableSection,
  userId,
  nameUser,
  userPassword,
  size = "medium",
  statues = "primaryFill",
  className = "",
  eventListeners = {},
}) {
  let table = domGenerator({
    tag: "div",
    attributes: {
      class: `tableSectionWrapper ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    eventListeners,
    children: [
      {
        tag: "h2",
        properties: { textContent: titleTableSection },
      },
      {
        tag: "table",
        attributes: {
          id: "tableSection",
        },
        children: [
          {
            tag: "thead",
            children: [
              {
                tag: "tr",
                children: [
                  {
                    tag: "th",
                    properties: { textContent: userId },
                  },
                  {
                    tag: "th",
                    properties: { textContent: nameUser },
                  },
                  {
                    tag: "th",
                    properties: { textContent: userPassword },
                  },
                  {
                    tag: "th",
                    children: [
                      {
                        tag: buttonGenerator({
                          content: "+",
                          size: "large",
                          status: "primaryOrang",
                          eventListeners: {},
                        }),
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            tag: "tbody",
            children: [
              {
                tag: "tr",
                children: [
                  {
                    tag: "th",
                    properties: { textContent: "userId" },
                  },
                  {
                    tag: "th",
                    properties: { textContent: "userId" },
                  },
                  {
                    tag: "th",
                    properties: { textContent: "userId" },
                  },
                  {
                    tag: "th",
                    children: [
                      {
                        tag: buttonGenerator({
                          content: "+",
                          status: "edit",
                          eventListeners: {},
                          iconStart: "",
                        }),
                      },
                      {
                        tag: buttonGenerator({
                          content: "+",
                          status: "delete",
                          eventListeners: {},
                          iconStart: "",
                        }),
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            tag: "tfoot",
          },
        ],
      },
    ],
  });

  // return table;
  document.body.append(table);
}

export default tableComponent;
