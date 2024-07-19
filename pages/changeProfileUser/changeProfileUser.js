import domGenerator from "dom-generator";

import changeProfileSection from "../../sectionComponent/changeProfileSection/changeProfileSection";
import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import headerGenerator from "../../components/headerComponent/headerComponent";

function changeProfileUserSection() {
  let changeProfileUser = domGenerator({
    tag: "div",
    attributes: {
      id: "changeProfileUser",
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
        tag: "div",
        attributes: { id: "changeUserContent" },
        children: [
          {
            tag: changeProfileSection({
              changeProfileTitle: "پروفایل من",
              changeProfileParagraph:
                "در اینجا شما می‌توانید تصویری جذاب و منحصر به فرد برای پروفایل خود انتخاب کنید و آن را به راحتی ثبت کنید. ما می‌دانیم که انتخاب یک تصویر مناسب می‌تواند تجربه کاربری شما را شخصی‌تر و دلپذیرتر کند. با چند کلیک ساده، می‌توانید نمایه‌ای ایجاد کنید که نشان‌دهنده شخصیت و علایق شما باشد.",
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
  document.body.append(changeProfileUser);
}

export default changeProfileUserSection;
