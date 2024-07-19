import domGenerator from "dom-generator";

import aboutSectionComponent from "../../sectionComponent/aboutSectionComponent/aboutSectionComponent";
import socialSection from "../../sectionComponent/socialSectionComponent/socialSectionComponent";
import contactUsComponent from "../../sectionComponent/contactUsComponent/contactUsComponent";
import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import headerGenerator from "../../components/headerComponent/headerComponent";

function aboutPage() {
  let about = domGenerator({
    tag: "div",
    attributes: {
      id: "aboutPageSection",
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
        tag: aboutSectionComponent({
          contentTitle: "درباره ما",
          size: "medium",
          status: "default",
        }),
      },
      {
        tag: contactUsComponent({
          contactTitle: "ارتباط با ما",
          mobileTitle: "شماره موبایل",
          addressTitle: "آدرس",
          telephoneTitle: "شماره تلفن",
          size: "medium",
          status: "default",
          imageSrc: "/public/images/aboutPage/businessidea.png",
        }),
      },
      {
        tag: socialSection({
          titleCategory: "ما را در فضای مجازی دنبال کنید",
          size: "small",
          status: "default",
          instagram: "/public/images/aboutPage/social/insta.png",
          linkedin: "/public/images/aboutPage/social/linkdin.png",
          whatsapp: "/public/images/aboutPage/social/whatsapp.png",
          email: "/public/images/aboutPage/social/email.png",
        }),
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
  document.body.append(about);
}

export default aboutPage;
