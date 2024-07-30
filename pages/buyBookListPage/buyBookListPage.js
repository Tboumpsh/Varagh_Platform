import domGenerator from "dom-generator";
import "./index.scss";

import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import headerAdminGenerator from "../../components/headerComponent/adminHeaderComponent";
import headerGenerator from "../../components/headerComponent/headerComponent";
import loggedInHeader from "../../components/headerComponent/loggedInHeader";

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
