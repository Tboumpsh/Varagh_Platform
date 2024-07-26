import domGenerator from "dom-generator";
import "./index.scss";

import groupButtonGenerator from "../../components/groupButtonComponent/groupButtonComponent";
import buttonGenerator from "../../components/buttonComponent/buttonComponent";

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

function bookCardGenerator({
  titleBook,
  bookDescription,
  previewLink,
  size = "medium",
  statues = "primary",
  className = "",
  eventListeners = {},
  pdf = "#",
  bannerSrc = "",
  imgLink = "",
  bookPrice
}) {
  let bookComponent = domGenerator({
    tag: "div",
    attributes: {
      class: `bookCardComponentWrapper  ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    children: [
      {
        tag: "div",
        attributes: { id: "contentsBookInfo" },
        children: [
          {
            tag: "img",
            attributes: { id: "imageBanner", src: bannerSrc },
          },
        ],
      },
      {
        tag: "div",
        attributes: { id: "booksInformation" },
        children: [
          {
            tag: "div",
            attributes: { id: "booksInformationContent" },
            children: [
              {
                tag: "h2",
                properties: { textContent: titleBook },
              },
              {
                tag: "p",
                properties: { textContent: bookDescription },
              },
              {
                tag: "a",
                properties: { textContent: previewLink },
                attributes: { href: pdf },
                children: [
                  {
                    tag: "img",
                    attributes: { src: imgLink },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        tag: "div",
        attributes: { id: "priceInformation" },
        children: [
          {
            tag: "div",
            attributes: { id: "prices" },
            children: [
              {
                tag: "h3",
                properties: {textContent: "قیمت کتاب"},
              },
              {
                tag: "p",
                properties: {textContent: bookPrice},
              },
            ],
          },
          {
            tag:groupButtonGenerator({
              size:'large',
              status:'default',
            })
          },
          {
            tag:buttonGenerator({
              content:'خرید کتاب',
              size:'medium',
              status:'primaryOrang',
              eventListeners:{},
              iconStart:'',
              iconEnd:''
            })
          }
        ],
      },
    ],
  });

  // return bookComponent;
  document.body.append(bookComponent);
}

export default bookCardGenerator;
