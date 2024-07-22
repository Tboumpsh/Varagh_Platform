import domGenerator from "dom-generator";
import "./index.scss";

import heroSectionComponent from "../../sectionComponent/heroSectionComponent/heroSectionComponent";
import fetchBooksAndRenderTable from "../../components/booksTableComponent/booksTableComponent";
import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import fetchUsersAndRenderTable from "../../components/UsertableComponent/tableComponent";
import headerGenerator from "../../components/headerComponent/headerComponent";

function adminPage() {
  let admin = domGenerator({
    tag: "div",
    attributes: {
      id: "adminPageSection",
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

  // return header;
  main.append(admin);
  fetchUsersAndRenderTable();
  fetchBooksAndRenderTable();
}

export default adminPage;
