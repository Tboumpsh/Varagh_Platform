import domGenerator from "dom-generator";
import "./index.scss";

import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import searchBoxComponent from "../../components/searchBoxComponent/searchBoxComponent";
import filterComponent from "../../components/filterComponent/filterComponent";
import headerGenerator from "../../components/headerComponent/headerComponent";

function shopPage() {
  let shope = domGenerator({
    tag: "container",
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
