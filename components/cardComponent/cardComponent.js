import domGenerator from "dom-generator";
import axios from "axios";
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

// (async () => {
  // let {data: books} = await axios.get("http://localhost:3000/books");
  // console.log(books);
  // let {data: book} = await axios.delete("http://localhost:3000/books/2",);
  //   let {data: user} = await axios.get("http://localhost:3000/user/2");
  //   user.loveList.push(1)
  //   console.log(user);
  //  await axios.put("http://localhost:3000/user/2",user);
// })();

// let array = [{ id: 1, title: "one" },{ id: 1, title: "two" }];
// array.forEach(item => {
//   console.log(item);
//   cardGenerator({
//     titleContent:item.title
//   })
// });


// let dayNow = new Date().toLocaleDateString("fa-IR-u-nu");
// console.log(dayNow);
// let final = persianDates.slice(0, 4);



function cardGenerator({
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
    eventListeners,
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
              content: "fffff",
              size: "large",
              status: "primaryOrang",
            }),
          },
          {
            tag: "div",
            attributes: { id: "access" },
            children: [
              {
                tag: buttonGenerator({
                  content: "fffff",
                  status: "love",
                  iconStart: "/public/images/footer/rectangle12.png",
                }),
              },
              {
                tag: buttonGenerator({
                  content: "fffff",
                  status: "seen",
                  iconStart: "/public/images/footer/rectangle12.png",
                }),
              },
            ],
          },
        ],
      },
    ],
  });

  return cardComponent;
  // document.body.append(cardComponent);
}

export default cardGenerator;
