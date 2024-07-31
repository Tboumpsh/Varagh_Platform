import domGenerator from "dom-generator";
import "./index.scss";

import heroSectionComponent from "../../sectionComponent/heroSectionComponent/heroSectionComponent";
import fetchBooksAndRenderTable from "../../components/booksTableComponent/booksTableComponent";
import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import fetchUsersAndRenderTable from "../../components/UsertableComponent/tableComponent";
import headerAdminGenerator from "../../components/headerComponent/adminHeaderComponent";
import loggedInHeader from "../../components/headerComponent/loggedInHeader";

/**
 * Generates the Admin Page content based on the current user's role.
 * If the user is an admin, it shows the admin header. If the user is logged in, it shows the logged-in header. Otherwise, it shows the default header.
 * The Admin Page includes sections like Hero, User Table, Books Table, and Footer.
 * @returns {HTMLDivElement} - The generated Admin Page element.
 */

function adminPage() {
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

  let admin = domGenerator({
    tag: "div",
    attributes: {
      id: "adminPageSection",
    },
    children: [
      {
        tag: headerContent,
      },
      {
        tag: heroSectionComponent({
          titleHero: "داشبورد مدیریت",
          contentHero:
            "اینجا جایی است که شما به طراحی آینده خویش پرداخته و مسیر سایت را هموار تر و روان تر کرده‌اید. در اینجا، با استفاده از ابزارها و گزارش‌های ماهانه، می‌توانید به بهترین شکل بازار خود را مدیریت کنید و تصمیماتی هوشمندانه برای رشد و پیشرفت سایت بگیرید. همچنین، از آخرین وضعیت فروش، موجودی کتاب‌ها و نظرات کاربران مطلع خواهید شد تا همواره در ارتباط با بازار باشید و تجربه خرید بی‌نظیری را برای مشتریانتان فراهم آورید. از ابزارها و امکانات ما استفاده کنید تا باورهای خود را ترسیم کنید، آنچه را که به دنبال آن هستید بسازید و رویای خود را به واقعیت تبدیل کنید.",
          size: "medium",
          status: "default",
          srcHero: "/public/images/adminPage/group11.png",
        }),
      },
      {
        tag: "div",
        attributes: { id: "userTableSection" },
      },
      {
        tag: "div",
        attributes: { id: "booksTableSection" },
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

  return admin;
  // main.append(admin);
  // fetchUsersAndRenderTable();
  // fetchBooksAndRenderTable();
}

export default adminPage;
