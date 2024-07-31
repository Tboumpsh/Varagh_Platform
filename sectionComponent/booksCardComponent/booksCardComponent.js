import domGenerator from "dom-generator";
import "./index.scss";

import groupButtonGenerator from "../../components/groupButtonComponent/groupButtonComponent";
import buttonGenerator from "../../components/buttonComponent/buttonComponent";
import buyBook from "../../src/js/buyBooks/byBook";

/**
 * Generates a card element for displaying book information.
 * 
 * This function creates a DOM element that represents a book card, including the book's image, description, preview link, and purchase button. The card is styled and configured according to the provided options.
 * 
 * @param {Object} options - The options for generating the book card.
 * @param {string} options.bookId - The unique identifier for the book. Used for purchasing the book.
 * @param {string} options.titleBook - The title of the book.
 * @param {string} options.bookDescription - A brief description of the book.
 * @param {string} [options.previewLink='پیش نمایش این کتاب را از اینجا دانلود کنید'] - The text for the preview link. Defaults to 'پیش نمایش این کتاب را از اینجا دانلود کنید'.
 * @param {string} [options.size="medium"] - The size of the card ("small", "medium", "large"). Defaults to "medium".
 * @param {string} [options.statues="primary"] - The status of the card ("primary", "secondary", etc.). Defaults to "primary".
 * @param {string} [options.className=""] - Additional CSS class names to be applied to the card. Defaults to an empty string.
 * @param {Object} [options.eventListeners={}] - An object containing event listeners to attach to the card's elements. The object keys are event types (e.g., "click"), and the values are handler functions.
 * @param {string} [options.pdf="https://drive.google.com/file/d/1WD8Qfumdnj9hQWihmg0WGLT4yQv2cxhw/view?usp=sharing"] - The URL to the PDF file for previewing the book. Defaults to a specific Google Drive link.
 * @param {string} [options.bannerSrc=""] - The URL of the image banner for the book. Defaults to an empty string.
 * @param {string} [options.imgLink="/public/images/bookInfo/pdf.svg"] - The URL of the image icon displayed in the preview link. Defaults to a specific SVG file path.
 * @param {string} [options.bookPrice] - The price of the book.
 * 
 * @returns {HTMLDivElement} The DOM element representing the book card.
 * 
 * @see {@link ../../components/groupButtonComponent/groupButtonComponent|groupButtonGenerator}
 * @see {@link ../../components/buttonComponent/buttonComponent|buttonGenerator}
 * @see {@link ../../src/js/buyBooks/byBook|buyBook}
 */

function bookCardGenerator({
  bookId,
  titleBook,
  bookDescription,
  previewLink = ' پیش نمایش این کتاب را از اینجا دانلود کنید',
  size = "medium",
  statues = "primary",
  className = "",
  eventListeners = {},
  pdf = "https://drive.google.com/file/d/1WD8Qfumdnj9hQWihmg0WGLT4yQv2cxhw/view?usp=sharing",
  bannerSrc = "",
  imgLink = "/public/images/bookInfo/pdf.svg",
  bookPrice
}) {


  const updateTotalPrice = (quantity) => {
    const totalPrice = bookPrice * quantity;
    const totalPriceElement = bookComponent.querySelector("#totalPrice");
    if (totalPriceElement) {
      totalPriceElement.textContent = `قیمت کل: ${totalPrice} تومان`;
    }
  };

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
                properties: {textContent: "قیمت کتاب :"},
              },
              {
                tag: "p",
                properties: {textContent: bookPrice},
              },
              {
                tag: "p",
                attributes: { id: "totalPrice" },
                properties: { textContent: `قیمت کل: ${bookPrice} تومان` },
              },
            ],
          },
          {
            tag:groupButtonGenerator({
              size:'large',
              status:'default',
              onValueChange: updateTotalPrice
            })
          },
          {
            tag:buttonGenerator({
              content:'خرید کتاب',
              size:'medium',
              status:'primaryOrang',
              eventListeners:{click:()=> buyBook(bookId)},
              iconStart:'',
              iconEnd:''
            })
          }
        ],
      },
    ],
  });

  return bookComponent;
}

export default bookCardGenerator;
