import domGenerator from "dom-generator";

import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import searchBoxComponent from "../../components/searchBoxComponent/searchBoxComponent";
import filterComponent from "../../components/filterComponent/filterComponent";
import headerGenerator from "../../components/headerComponent/headerComponent";

function shopPage() {
  let shope = domGenerator({
    tag: "div",
    attributes: {
      id: "shopPageSection",
    },
    children: [
      {
        tag: headerGenerator({
          size: "medium",
          status: "default",
          logo: "/public/images/Logo/logo.svg",
          boxBuy: "/public/images/header/vector.png",
        }),
      },
      {
        tag: "h2",
      },
      {
        tag: searchBoxComponent({
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
          size: "medium",
          status: "default",
          iconStart: "/public/images/footer/rectangle12.png",
          iconEnd: "/public/images/footer/rectangle13.png",
          upImage: "/public/images/footer/boy.png",
        }),
      },
    ],
  });

  // return header;
  document.body.append(shope);
}

export default shopPage;
