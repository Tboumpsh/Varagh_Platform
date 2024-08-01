import domGenerator from "dom-generator";
import axios from "axios";
import "./index.scss";

import renderBookInformationPage from "../../pages/bookInformationPage/renderBookInformation";
import buttonGenerator from "../buttonComponent/buttonComponent";
import addToLoveList from "../../src/js/loveList/addToLoveList";
import seenAction from "../../src/js/seenAction/seenAction";

/**
 * Generates a card component with various elements including an image, title, paragraph, and buttons.
 * 
 * This function creates a card component that displays a book's title, a description, and includes
 * buttons for more information, adding to a love list, and marking as seen. The card can be customized
 * with additional attributes and event listeners.
 * 
 * @function cardGenerator
 * @param {Object} options - Configuration object for the card component.
 * @param {number|string} options.bookId - The unique identifier for the book, used for actions such as adding to the love list.
 * @param {string} options.titleContent - The title text to display in the card.
 * @param {string} options.paragraphContent - The paragraph text to display in the card.
 * @param {string} [options.size="medium"] - The size of the card, affecting its styling.
 * @param {string} [options.statues="primary"] - The status of the card, which affects its appearance.
 * @param {string} [options.className=""] - Additional CSS class names to apply to the card component.
 * @param {string} [options.anchorLink="#"] - The anchor link for the card, typically used for navigation.
 * @param {Object} [options.eventListeners={}] - An object containing event listeners to attach to the card's elements.
 * @param {string} [options.upImage=""] - The URL of the image to display at the top of the card.
 * 
 * @returns {HTMLElement} The generated card component element.
 * 
 * document.getElementById('cardContainer').appendChild(card);
 */



function cardGenerator({
  bookId,
  titleContent,
  paragraphContent,
  size = "medium",
  statues = "primary",
  className = "",
  anchorLink = "#",
  eventListeners = {},
  upImage = "",
}) {
  let cardComponent = domGenerator({
    tag: "div",
    attributes: {
      class: `cardComponentWrapper  ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    children: [
      {
        tag: "img",
        attributes: { src: upImage },
      },
      {
        tag: "div",
        attributes: { id: "contents" },
        children: [
          {
            tag: "h2",
            attributes: { id: "title" },
            properties: { textContent: titleContent },
          },
          {
            tag: "p",
            attributes: { id: "paragraph" },
            properties: { textContent: paragraphContent },
          },
        ],
      },
      {
        tag: "div",
        attributes: { id: "buttonGroups" },
        children: [
          {
            tag: buttonGenerator({
              content: "بیشتر مشاهده کنید",
              size: "medium",
              status: "primaryOrang",
              eventListeners: {
                click: () => renderBookInformationPage(titleContent),
              },
            }),
          },
          {
            tag: "div",
            attributes: { id: "access" },
            children: [
              {
                tag: buttonGenerator({
                  status: "love",
                  eventListeners: { click: () => addToLoveList(bookId) },
                  iconStart: "/public/images/shopPage/cards/vector (3).svg",
                }),
              },
              {
                tag: buttonGenerator({
                  status: "seen",
                  eventListeners: { click: () => seenAction(bookId) },
                  iconStart: "/public/images/shopPage/cards/vector (2).svg",
                }),
              },
            ],
          },
        ],
      },
    ],
  });

  return cardComponent;
}

export default cardGenerator;
