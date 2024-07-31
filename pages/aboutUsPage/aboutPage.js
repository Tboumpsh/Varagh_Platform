import domGenerator from "dom-generator";
import "./index.scss";

import aboutSectionComponent from "../../sectionComponent/aboutSectionComponent/aboutSectionComponent";
import socialSection from "../../sectionComponent/socialSectionComponent/socialSectionComponent";
import contactUsComponent from "../../sectionComponent/contactUsComponent/contactUsComponent";
import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import headerAdminGenerator from "../../components/headerComponent/adminHeaderComponent";
import headerGenerator from "../../components/headerComponent/headerComponent";
import loggedInHeader from "../../components/headerComponent/loggedInHeader";

/**
 * Generates the About Page content based on the current user's role.
 * If the user is an admin, it shows the admin header. If the user is logged in, it shows the logged-in header. Otherwise, it shows the default header.
 * The About Page includes sections like About Us, Contact Us, Social Media, and Footer.
 * @returns {HTMLDivElement} - The generated About Page element.
 */
function aboutPage() {
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
  let about = domGenerator({
    tag: "div",
    attributes: {
      id: "aboutPageSection",
    },
    children: [
      {
        tag: headerContent,
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
          size: "large",
          status: "default",
          iconStart: "/public/images/footer/rectangle12.png",
          iconEnd: "/public/images/footer/rectangle13.png",
          upImage: "/public/images/footer/boy.png",
        }),
      },
    ],
  });

  return about;
  // document.body.append(about);
}

export default aboutPage;
