import domGenerator from "dom-generator";
import "./index.scss";

import searchFunction from "../../src/js/searchFunction/searchFunction";
import buttonGenerator from "../buttonComponent/buttonComponent";
import inputGenerator from "../inputComponent/inputComponent";

/**
 * Generates a search box element with optional properties.
 * @param {Object} options - The options for generating the search box.
 * @param {string} [options.size="medium"] - The size of the search box ("small", "medium", "large").
 * @param {string} [options.statues="primary"] - The status of the search box ("primary", "secondary", etc.).
 * @param {string} [options.className=""] - Additional class names for the search box.
 * @param {string} [options.anchorLink="#"] - The href link for the search box button if it acts as an anchor.
 * @param {Object} [options.eventListeners={}] - Event listeners to attach to the search box.
 * @returns {HTMLDivElement} - The generated search box element.
 */
function searchBoxComponent({
  titleSearch,
  size = "medium",
  statues = "primary",
  className = "",
  anchorLink = "#",
  eventListeners = {},
}) {
  let searchBox = domGenerator({
    tag: "div",
    attributes: {
      class: `searchBoxWrapper ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    eventListeners,
    children: [
      {
        tag: "h2",
        properties:{textContent:titleSearch}
      },
      {
        tag: "div",
        attributes: { id: "searchSection" },
        children: [
          {
            tag: "div",
            attributes: { id: "searchBoxes" },
            children: [
              {
                tag: inputGenerator({
                  inputId: "search",
                  placeholder: "دنبال چی میگردی؟",
                  type: "text",
                  eventListeners: { input: searchFunction },
                  fontSize: "medium",
                  size: "large",
                  statues: "primary",
                  maxLength: 15,
                }),
              },
              {
                tag: buttonGenerator({
                  // content: "S",
                  size: "small",
                  status: "primaryGreen",
                  eventListeners: {},
                  iconCenter: "/public/images/shopPage/heroSection/search.svg",
                }),
              },
            ],
          },
          {
            tag: "ul",
            attributes: { id: "results" },
            children: [],
          },
        ],
      },
    ],
  });


 

  return searchBox;
}
export default searchBoxComponent;
