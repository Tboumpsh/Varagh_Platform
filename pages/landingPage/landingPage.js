import domGenerator from "dom-generator";
import "./index.scss";

import cheapestCardSectionComponent from "../../sectionComponent/cheapestCardSectionComponent/CheapestCardSectionComponent";
import newestCardSectionComponent from "../../sectionComponent/newest‌CardSectionComponent/newestCardsectionComponent";
import bestSellerSectionComponent from "../../sectionComponent/bestSellerSectionComponent/bestSellerSectionComponent";
import categorySectionComponent from "../../sectionComponent/categorySectionComponent/categoryComponentSection";
import heroSectionComponent from "../../sectionComponent/heroSectionComponent/heroSectionComponent";
import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import headerAdminGenerator from "../../components/headerComponent/adminHeaderComponent";
import headerGenerator from "../../components/headerComponent/headerComponent";
import loggedInHeader from "../../components/headerComponent/loggedInHeader";
import renderLandingPage from "./renderLandingPage";

/**
 * Generates the landing page content with a dynamic header based on the current user's role.
 * The landing page includes a hero section, category section, content sections for best sellers,
 * newest items, and cheapest items, and a footer section. The footer section also includes an event
 * listener to render the landing page again on click.
 *
 * @function landingPage
 * @returns {HTMLDivElement} - The generated landing page element.
 *
 * @description
 * - Retrieves the current user from local storage and determines the header to display based on the user's role.
 * - Creates a `div` element with the ID `"landingPageSection"` using `domGenerator`.
 * - Includes the following child components:
 *   - Header component (`headerAdminGenerator`, `loggedInHeader`, or `headerGenerator`).
 *   - Hero section component with a title, content, and image.
 *   - Category section component with titles and images for different categories.
 *   - Content section containing:
 *     - Best seller section component.
 *     - Newest section component.
 *     - Cheapest section component.
 *   - Footer section component with a click event listener that triggers `renderLandingPage`.
 */

function landingPage() {

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

  let landing = domGenerator({
    tag: "div",
    attributes: {
      id: "landingPageSection",
    },
    children: [
      {
        tag: headerContent,
      },
      {
        tag: heroSectionComponent({
          titleHero: "کتابخانه ورق",
          contentHero:
            'کشف دنیای بی‌پایان کتاب‌ها در فروشگاه و کتابخانه آنلاین ورق آیا تا به حال آرزو داشته‌اید که به یک دنیای جادویی از کتاب‌ها دسترسی داشته باشید؟ جایی که می‌توانید هر کتابی را که می‌خواهید، در هر زمانی که می‌خواهید، با یک کلیک ساده بیابید؟ فروشگاه و کتابخانه آنلاین ورق دقیقاً همان جایی است که به دنبال آن بوده‌اید. با مجموعه‌ای بی‌نظیر از کتاب‌های الکترونیکی و چاپی، ورق شما را به سفری شگفت‌انگیز در دنیای داستان‌ها، دانش‌ها و ایده‌ها می‌برد. از جدیدترین پرفروش‌ها تا کلاسیک‌های فراموش‌نشدنی، ما همه چیز را برای هر نوع سلیقه‌ای در اختیار داریم.',
          size: "small",
          status: "default",
          srcHero: "/public/images/landinPage/heroSection/herosection.png",
        }),
      },
      {
        tag: categorySectionComponent({
          titleCategory: "دسته بندی",
          siz: "medium",
          status: "default",
          teenager: "/public/images/landinPage/categoryImages/tenager.svg",
          old: "/public/images/landinPage/categoryImages/old.svg",
          child: "/public/images/landinPage/categoryImages/child.svg",
        }),
      },
      {
        tag: "div",
        attributes: { id: "contentSection" },
        children: [
          {
            tag: bestSellerSectionComponent({
              titleBestSeller: " پر فروش ترین کتاب ها",
              size: "medium",
              status: "default",
            }),
          },
          {
            tag: newestCardSectionComponent({
              titleNewest: "جدیدترین کتاب ها",
              size: "medium",
              status: "default",
            }),
          },
          {
            tag: cheapestCardSectionComponent({
              titleCheapest: "ارزان ترین کتاب ها",
              size: "medium",
              status: "default",
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
          eventListeners:{click: ()=> renderLandingPage()}
        }),
      },
    ],
  });

  return landing;
}

export default landingPage;
