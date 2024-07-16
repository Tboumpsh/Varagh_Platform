// import domGenerator from "dom-generator";
import domGenerator from "dom-generator";
import axios from "axios";
// import "./index.scss";
import "./index.scss";

// import buttonGenerator from "../buttonComponent/buttonComponent";
// import inputGenerator from "../inputComponent/inputComponent";
import buttonGenerator from "../buttonComponent/buttonComponent";
import inputGenerator from "../inputComponent/inputComponent";

// /**
//  * Generates a base button element with optional properties.
//  * @param {Object} options - The options for generating the button.
//  * @param {string} options.content - The text content of the button.
//  * @param {string} [options.size="medium"] - The size of the button ("small", "medium", "large").
//  * @param {string} [options.status="primaryFill"] - The status of the button ("primaryFill", "secondaryFill", "tertiaryFill", "quaternaryFill").
//  * @param {string} [options.type="button"] - The type of the button ("button", "submit", "reset").
//  * @param {string} [options.className=""] - Additional class names for the button.
//  * @param {string} [options.anchorLink="#"] - The href link for the button if it acts as an anchor.
//  * @param {Object} [options.eventListeners={}] - Event listeners to attach to the button.
//  * @param {boolean} [options.disabled] - Whether the button should be disabled.
//  * @param {string} [options.iconStart=""] - The URL of the image icon to display at the start of the button.
//  * @param {string} [options.iconEnd=""] - The URL of the image icon to display at the end of the button.
//  * @returns {HTMLDivElement} - The generated button element.
//  */
// function searchBoxComponent({
//   size = "medium",
//   statues = "primary",
//   className = "",
//   anchorLink = "#",
//   eventListeners = {},
// }) {
//   let searchBox = domGenerator({
//     tag: "div",
//     attributes: {
//       class: `searchBoxWrapper  ${className}`,
//     },
//     dataAttributes: { size: size, status: statues },
//     eventListeners,
//     children: [
//       {
//         tag: "div",
//         attributes: { id: "searchSection" },
//         children: [
//           {
//             tag: "div",
//             attributes: { id: "searchBoxes" },
//             children: [
//               {
//                 tag: inputGenerator({
//                   inputId: "search",
//                   placeholder: "",
//                   type: "text",
//                   eventListeners: { input: searchFunction },
//                   fontSize: "medium",
//                   size: "large",
//                   statues: "primary",
//                   maxLength: 15,
//                 }),
//               },
//               {
//                 tag: buttonGenerator({
//                   content: "S",
//                   size: "small",
//                   status: "primaryGreen",
//                   eventListeners: {},
//                   iconStart: "",
//                 }),
//               },
//             ],
//           },
//           {
//             tag: "ul",
//             attributes: { id: "results" },
//           },
//         ],
//       },
//     ],
//   });

//   //   return searchBox;
//   document.body.append(searchBox);

//   async function searchFunction() {
//     let search = document.getElementById('search')
//     const query = search.value;
//     const resultsContainer = document.getElementById("results");
//     // if (query.length < 3) {
//     //   resultsContainer.innerHTML = "";
//     //   resultsContainer.style.display = "none";
//     //   return;
//     // }

//     try {
//       const response = await axios.get(
//         `http://localhost:3000/books?name_like=${query}&genre_like=${query}`
//       );
//       const books = response.data;

//       resultsContainer.innerHTML = "";
//       if (books.length > 0) {
//         books.forEach((book) => {
//           const listItem = document.createElement("li");
//           listItem.textContent = `${book.name} - ${book.genre}`;
//           listItem.addEventListener("click", () => {
//             alert(`You selected ${book.name}`);
//           });
//           resultsContainer.appendChild(listItem);
//         });
//         resultsContainer.style.display = "block";
//       } else {
//         resultsContainer.style.display = "none";
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       resultsContainer.style.display = "none";
//     }
//   }

//   // Hide the dropdown if clicked outside
//   document.addEventListener("click", function (event) {
//     const searchContainer = document.getElementById("searchSection");
//     if (!searchContainer.contains(event.target)) {
//       document.getElementById("results").style.display = "none";
//     }
//   });
// }

// export default searchBoxComponent;



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
                  placeholder: "",
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
                  content: "S",
                  size: "small",
                  status: "primaryGreen",
                  eventListeners: {},
                  iconStart: "",
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

  document.body.append(searchBox);

  async function searchFunction() {
    let search = document.getElementById("search");
    const query = search.value;
    const resultsContainer = document.getElementById("results");

    if (query.length < 3) {
      resultsContainer.innerHTML = "";
      resultsContainer.style.display = "none";
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/books?name_like=${query}&genre_like=${query}`
      );
      const books = response.data;

      resultsContainer.innerHTML = "";
      if (books.length > 0) {
        books.forEach((book) => {
          const listItem = document.createElement("li");
          listItem.textContent = `${book.name} - ${book.genre}`;
          listItem.addEventListener("click", () => {
            alert(`You selected ${book.name}`);
          });
          resultsContainer.appendChild(listItem);
        });
        resultsContainer.style.display = "block";
      } else {
        resultsContainer.style.display = "none";
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      resultsContainer.style.display = "none";
    }
  }

  document.addEventListener("click", function (event) {
    const searchContainer = document.getElementById("searchSection");
    if (!searchContainer.contains(event.target)) {
      document.getElementById("results").style.display = "none";
    }
  });
}

export default searchBoxComponent;
