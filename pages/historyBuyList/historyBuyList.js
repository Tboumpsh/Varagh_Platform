import domGenerator from "dom-generator";
import "./index.scss";

import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import headerAdminGenerator from "../../components/headerComponent/adminHeaderComponent";
import headerGenerator from "../../components/headerComponent/headerComponent";
import loggedInHeader from "../../components/headerComponent/loggedInHeader";

/**
 * Generates the "Books Love" page which includes a header, a section for displaying 
 * favorite books, and a footer. The header displayed depends on the user's role.
 * 
 * The function performs the following tasks:
 * 1. Retrieves the current user information from local storage.
 * 2. Depending on the user's role, it selects an appropriate header component:
 *    - If the user is an admin, it uses the `headerAdminGenerator`.
 *    - If the user is logged in but not an admin, it uses the `loggedInHeader`.
 *    - If the user is not logged in, it uses the `headerGenerator`.
 * 3. Constructs the main content of the page using `domGenerator`, including:
 *    - The selected header component.
 *    - An empty `div` for displaying favorite books (identified by `id` "loveListSection").
 *    - A footer component generated by `footerSectionComponent`.
 * 
 * This function does not take any parameters and returns a DOM element representing 
 * the "Books Love" page.
 * 
 * @function booksLovePage
 * 
 * @returns {HTMLElement} The DOM element representing the "Books Love" page.
 * 
 * 
 * @see {@link ../../components/headerComponent/adminHeaderComponent|headerAdminGenerator} 
 * for details about the admin header component.
 * @see {@link ../../components/headerComponent/headerComponent|headerGenerator} 
 * for details about the default header component.
 * @see {@link ../../components/headerComponent/loggedInHeader|loggedInHeader} 
 * for details about the logged-in user header component.
 * @see {@link ../../sectionComponent/footerComponent/footerComponent|footerSectionComponent} 
 * for details about the footer component.
 */

function historyBuyList() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  let headerContent;
  if (currentUser && currentUser.role === "admin") {
    headerContent = headerAdminGenerator({
      size: "medium",
      status: "default",
      logo: "/public/images/Logo/logo.svg",
      boxBuy: "/public/images/header/vector.png",
    });
  } else if (currentUser) {
    headerContent = loggedInHeader({
      size: "medium",
      status: "default",
      logo: "/public/images/Logo/logo.svg",
      boxBuy: "/public/images/header/vector.png",
    });
  } else {
    headerContent = headerGenerator({
      size: "medium",
      status: "default",
      logo: "/public/images/Logo/logo.svg",
      boxBuy: "/public/images/header/vector.png",
    });
  }
  let historyList = domGenerator({
    tag: "div",
    attributes: {
      id: "historyBuyListSection",
    },
    children: [
      {
        tag: headerContent,
      },
      {
        tag: "div",
        attributes: { id: "historyListSection" },
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

  return historyList;
}

export default historyBuyList;