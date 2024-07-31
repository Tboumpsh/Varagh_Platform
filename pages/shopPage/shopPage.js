import domGenerator from "dom-generator";
import "./index.scss";

import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import headerAdminGenerator from "../../components/headerComponent/adminHeaderComponent";
import searchBoxComponent from "../../components/searchBoxComponent/searchBoxComponent";
import filterComponent from "../../components/filterComponent/filterComponent";
import headerGenerator from "../../components/headerComponent/headerComponent";
import loggedInHeader from "../../components/headerComponent/loggedInHeader";

/**
 * Generates the HTML structure for the shop page.
 * 
 * This function performs the following steps:
 * 1. Retrieves the current user from local storage and parses it.
 * 2. Determines the appropriate header content based on the user's role:
 *    - If the user is an admin, it generates an admin header.
 *    - If the user is logged in but not an admin, it generates a logged-in header.
 *    - If no user is logged in, it generates a default header.
 * 3. Uses the `domGenerator` utility to create a container element for the shop page.
 * 4. Adds the following sections to the shop page:
 *    - The header content (based on the user role).
 *    - A search box component with a title and default size and status.
 *    - A filter component with default size and status.
 *    - An empty `div` element with an id of `productsContent` for displaying products.
 *    - A footer section component with specific content and image sources.
 * 
 * @function shopPage
 * 
 * @returns {HTMLElement} The HTML element representing the shop page. This includes the header, search box, filter, products container, and footer.
 * 
 * @example
 * // Usage
 * const shopPageElement = shopPage();
 * document.body.appendChild(shopPageElement);
 * 
 * @see {@link ../../components/headerComponent/adminHeaderComponent|headerAdminGenerator}
 * @see {@link ../../components/headerComponent/headerComponent|headerGenerator}
 * @see {@link ../../components/headerComponent/loggedInHeader|loggedInHeader}
 * @see {@link ../../components/searchBoxComponent/searchBoxComponent|searchBoxComponent}
 * @see {@link ../../components/filterComponent/filterComponent|filterComponent}
 * @see {@link ../../sectionComponent/footerComponent/footerComponent|footerSectionComponent}
 */

function shopPage() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  let headerContent;
  if (currentUser && currentUser.role === "admin") {
    headerContent = headerAdminGenerator(
      {
        size: "medium",
        status: "default",
        logo: "/public/images/Logo/logo.svg",
        boxBuy: "/public/images/header/vector.png",
      }
    );
  } else if (currentUser) {
    headerContent = loggedInHeader(
      {
        size: "medium",
        status: "default",
        logo: "/public/images/Logo/logo.svg",
        boxBuy: "/public/images/header/vector.png",
      }
    );
  } else {
    headerContent = headerGenerator({
      size: "medium",
      status: "default",
      logo: "/public/images/Logo/logo.svg",
      boxBuy: "/public/images/header/vector.png",
    });
  }
  let shope = domGenerator({
    tag: "container",
    attributes: {
      id: "shopPageSection",
    },
    children: [
      {
       tag:headerContent,
      },

      {
        tag: searchBoxComponent({
          titleSearch:'فروشگاه ورق',
          size: "medium",
          status: "default",
        }),
      },
      {
        tag: filterComponent({
          size: "medium",
          statues: "default",
        }),
      },
      {
        tag: "div",
        attributes: { id: "productsContent" },
        children: [],
      },
      {
        tag: footerSectionComponent({
          contentAboutSection: "فروشگاه ورق",
          size: "large",
          status: "default",
          iconStart: "/public/images/footer/rectangle12.png",
          iconEnd: "/public/images/footer/rectangle13.png",
          upImage: "/public/images/footer/boy.png",
        }),
      },
    ],
  });

  return shope;
  // document.body.append(shope);
}

export default shopPage;
