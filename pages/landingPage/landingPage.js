import domGenerator from "dom-generator";

import cheapestCardSectionComponent from "../../sectionComponent/cheapestCardSectionComponent/CheapestCardSectionComponent";
import newestCardSectionComponent from "../../sectionComponent/newest‌CardSectionComponent/newestCardsectionComponent";
import bestSellerSectionComponent from "../../sectionComponent/bestSellerSectionComponent/bestSellerSectionComponent";
import categorySectionComponent from "../../sectionComponent/categorySectionComponent/categoryComponentSection";
import heroSectionComponent from "../../sectionComponent/heroSectionComponent/heroSectionComponent";
import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import headerGenerator from "../../components/headerComponent/headerComponent";

function landingPage() {
  let landing = domGenerator({
    tag: "div",
    attributes: {
      id: "landingPageSection",
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
          titleHero: "کتابخانه ورق",
          contentHero:
            'به "کتابخانه ورق" خوش آمدید، جایی که عشق به کتاب و دانش به هم می‌پیوندند. اینجا نه تنها یک کتابخانه، بلکه یک ماجراجویی بی‌پایان در دنیای کتاب‌هاست. با کتابخانه ورق، دنیای جدیدی از اطلاعات و داستان‌ها را کشف کنید و به جمع علاقه‌مندان به کتاب و مطالعه بپیوندیانه ورق" خوش آمدید، جایی که عشق به کتاب و دانش به هم می‌پیوندند. اینجا نه تنها یک کتابخانه، بلکه یک ماجراجویی بی‌پایان در دنیای کتاب‌هاست. با کتابخانه ورق، دنیای جدیدی از اطلاعات و داستان‌ها را کشف کنید و به جمع علاقه‌مندان به کتاب و مطالعه بپیوندید.د.',
          size: "medium",
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
              titleBestSeller: "پر فروش ترین ",
              size: "medium",
              status: "default",
            }),
          },
          {
            tag: newestCardSectionComponent({
              titleNewest: "جدیدترین",
              size: "medium",
              status: "default",
            }),
          },
          {
            tag: cheapestCardSectionComponent({
              titleCheapest: "ارزان ترین",
              size: "medium",
              status: "default",
            }),
          },
        ],
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
  document.body.append(landing);
}

export default landingPage;