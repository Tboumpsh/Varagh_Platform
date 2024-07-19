import domGenerator from "dom-generator";
import "./index.scss";

import filterByAllBooks from "../../src/js/dataBaseApi/filterByAllBooks";
import filterByPrice from "../../src/js/dataBaseApi/filterByPrice";
import buttonGenerator from "../buttonComponent/buttonComponent";
import filterByDate from "../../src/js/dataBaseApi/filterByDate";

/**
 * Generates a filter component with optional properties.
 * @param {Object} options - The options for generating the filter component.
 * @param {string} [options.size="medium"] - The size of the filter component.
 * @param {string} [options.statues="primary"] - The status of the filter component.
 * @param {string} [options.className=""] - Additional class names for the filter component.
 * @param {Object} [options.eventListeners={}] - Event listeners to attach to the filter component.
 * @returns {HTMLDivElement} - The generated filter component.
 */
function filterComponent({
  size = "medium",
  statues = "primary",
  className = "",
  eventListeners = {},
}) {
  let filter = domGenerator({
    tag: "div",
    attributes: {
      class: `filterWrapper ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    eventListeners,
    children: [
      {
        tag: "div",
        attributes: { id: "filter" },
        children: [
          {
            tag: buttonGenerator({
              content: "Price",
              size: "medium",
              status: "filter",
              eventListeners: { click: () => toggleDropdown("dropDownPrice") },
            }),
          },
          {
            tag: "div",
            attributes: { id: "dropDownPrice", class: "dropdown" },
            children: [
              {
                tag: buttonGenerator({
                  content: "Cheapest",
                  size: "extraSmall",
                  status: "filter",
                  className: "dropdown-item",
                  eventListeners: { click: () => filterByPrice("asc") },
                }),
              },
              {
                tag: buttonGenerator({
                  content: "Most Expensive",
                  size: "extraSmall",
                  status: "filter",
                  className: "dropdown-item",
                  eventListeners: { click: () => filterByPrice("desc") },
                }),
              },
            ],
          },
          {
            tag: buttonGenerator({
              content: "Date",
              size: "medium",
              status: "filter",
              eventListeners: { click: () => toggleDropdown("dropDownDate") },
            }),
          },
          {
            tag: "div",
            attributes: { id: "dropDownDate", class: "dropdown" },
            children: [
              {
                tag: buttonGenerator({
                  content: "Newest",
                  size: "extraSmall",
                  status: "filter",
                  className: "dropdown-item",
                  eventListeners: { click: () => filterByDate("newest") },
                }),
              },
              {
                tag: buttonGenerator({
                  content: "Oldest",
                  size: "extraSmall",
                  status: "filter",
                  className: "dropdown-item",
                  eventListeners: { click: () => filterByDate("oldest") },
                }),
              },
            ],
          },
          {
            tag: buttonGenerator({
              content: "all",
              size: "medium",
              status: "filter",
              eventListeners: { click: filterByAllBooks() },
            }),
          },
        ],
      },
      {
        tag: "div",
        attributes: { id: "cardContainer" },
      },
    ],
  });

  document.body.append(filter);

  function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
}

export default filterComponent;
