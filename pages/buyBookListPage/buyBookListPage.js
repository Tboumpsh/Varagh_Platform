import domGenerator from "dom-generator";
import "./index.scss";

import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import headerAdminGenerator from "../../components/headerComponent/adminHeaderComponent";
import headerGenerator from "../../components/headerComponent/headerComponent";
import buttonGenerator from "../../components/buttonComponent/buttonComponent";
import loggedInHeader from "../../components/headerComponent/loggedInHeader";
import processPaymentSuccess from "../../src/js/buyBooks/downloadBooks";
import handlePayment from "../../src/js/shaparack/handelPay";

/**
 * Generates the book list page with appropriate header and footer.
 * Depending on the role of the current user (admin, logged in, or guest),
 * it generates different headers.
 *
 * This function:
 * 1. Retrieves the current user's role from local storage.
 * 2. Generates the appropriate header based on the user's role.
 * 3. Creates the main content of the book list page including a section for the book list and a footer.
 *
 * @function buyBookListPage
 * @returns {HTMLDivElement} - The generated book list page element.
 */

function buyBookListPage() {
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
  let buyBookList = domGenerator({
    tag: "div",
    attributes: {
      id: "buyBookListSection",
    },
    children: [
      {
        tag: headerContent,
      },
      {
        tag: "div",
        attributes: { id: "buyList" },
      },
      {
        tag: "div",
        attributes: { id: "totalPrice" },
        children: [
          {
            tag: buttonGenerator({
              content: "پرداخت سبد خرید",
              size: "medium",
              status: "primaryOrang",
              eventListeners: {
                click: () => {
                  const currentUser = JSON.parse(
                    localStorage.getItem("currentUser")
                  );
                  if (currentUser) {
                    handlePayment(currentUser.name);
                    processPaymentSuccess();
                   
                  } else {
                    alert("لطفا ابتدا وارد شوید.");
                  }
                },
              },
            }),
          },
        ],
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

  return buyBookList;
  // document.body.append(changeProfileUser);
}

export default buyBookListPage;
