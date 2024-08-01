import domGenerator from "dom-generator";
import "./index.scss";

import heroSectionComponent from "../../sectionComponent/heroSectionComponent/heroSectionComponent";
import planSectionCard from "../../sectionComponent/planSectionComponent/planSectionComponent";
import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import headerAdminGenerator from "../../components/headerComponent/adminHeaderComponent";
import dividerComponent from "../../components/dividerComponent/dividerComponent";
import headerGenerator from "../../components/headerComponent/headerComponent";
import loggedInHeader from "../../components/headerComponent/loggedInHeader";

/**
 * Generates and returns the HTML structure for the "Plane Page" section of the website.
 * The function performs the following tasks:
 * 1. Retrieves the current user's information from local storage.
 * 2. Based on the user's role, selects the appropriate header component:
 *    - Admin: Uses `headerAdminGenerator`.
 *    - Logged-in user: Uses `loggedInHeader`.
 *    - Guest: Uses `headerGenerator`.
 * 3. Constructs the main content of the page using `domGenerator` which includes:
 *    - A header section with the selected header component.
 *    - A hero section with a title, content, and an image.
 *    - A divider component with left and right images.
 *    - A plan section card with an image title.
 *    - A footer section with various icons and content.
 * 
 * @function planePage
 * 
 * @returns {HTMLElement} A DOM element representing the complete "Plane Page" section.
 * 
 * @example
 * // Usage
 * const planePageElement = planePage();
 * document.body.appendChild(planePageElement);
 * 
 * @see {@link ../../components/headerComponent/adminHeaderComponent|headerAdminGenerator} for details about the header component for admins.
 * @see {@link ../../components/headerComponent/headerComponent|headerGenerator} for details about the default header component.
 * @see {@link ../../components/headerComponent/loggedInHeader|loggedInHeader} for details about the header component for logged-in users.
 * @see {@link ../../components/dividerComponent/dividerComponent|dividerComponent} for details about the divider component.
 * @see {@link ../../sectionComponent/heroSectionComponent/heroSectionComponent|heroSectionComponent} for details about the hero section component.
 * @see {@link ../../sectionComponent/planSectionComponent/planSectionComponent|planSectionCard} for details about the plan section card component.
 * @see {@link ../../sectionComponent/footerComponent/footerComponent|footerSectionComponent} for details about the footer section component.
 */

function planePage() {
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
  let plans = domGenerator({
    tag: "div",
    attributes: {
      id: "booksLoveSection",
    },
    children: [
      {
        tag: headerContent,
      },
      {
        tag: heroSectionComponent({
          titleHero: "عضویت کتابخانه",
          contentHero:
            "اینجا جایی است که شما به طراحی آینده خویش پرداخته و مسیر سایت را هموار تر و روان تر کرده‌اید. در اینجا، با استفاده از ابزارها و گزارش‌های ماهانه، می‌توانید به بهترین شکل بازار خود را مدیریت کنید و تصمیماتی هوشمندانه برای رشد و پیشرفت سایت بگیرید. همچنین، از آخرین وضعیت فروش، موجودی کتاب‌ها و نظرات کاربران مطلع خواهید شد تا همواره در ارتباط با بازار باشید و تجربه خرید بی‌نظیری را برای مشتریانتان فراهم آورید. از ابزارها و امکانات ما استفاده کنید تا باورهای خود را ترسیم کنید، آنچه را که به دنبال آن هستید بسازید و رویای خود را به واقعیت تبدیل کنید.",
          size: "large",
          status: "default",
          srcHero: "/public/images/planCards/shopBoy.png",
        }),
      },
      {
        tag: dividerComponent({
          imageR: "/public/images/planCards/r.svg",
          imageL: "/public/images/planCards/l.svg",
        }),
      },
      {
        tag: planSectionCard({
          size: "large",
          status: "default",
          imageTitle: "/public/images/planCards/plantitle.svg",
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

  return plans;
//   document.body.append(plans);
}

export default planePage;
