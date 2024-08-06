import domGenerator from "dom-generator";
import "./index.scss";

import changeProfileSection from "../../sectionComponent/changeProfileSection/changeProfileSection";
import footerSectionComponent from "../../sectionComponent/footerComponent/footerComponent";
import headerAdminGenerator from "../../components/headerComponent/adminHeaderComponent";
import headerGenerator from "../../components/headerComponent/headerComponent";
import loggedInHeader from "../../components/headerComponent/loggedInHeader";

/**
 * Generates a section for changing the user's profile.
 * This function:
 * 1. Retrieves the current user from localStorage.
 * 2. Selects the appropriate header based on the user's role.
 * 3. Creates a section with a profile change form and a footer.
 *
 * @function changeProfileUserSection
 * @returns {HTMLDivElement} - The generated profile change section.
 *
 * @description
 * - If the current user is an admin, an admin header is generated.
 * - If the current user is logged in but not an admin, a logged-in header is generated.
 * - If the user is not logged in, a default header is generated.
 * - The section includes a profile change form with a title and description, as well as a footer.
 */

function changeProfileUserSection() {

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
  let changeProfileUser = domGenerator({
    tag: "div",
    attributes: {
      id: "changeProfileUser",
    },
    children: [
      {
        tag: headerContent,
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
          size: "large",
          status: "default",
          iconStart: "/public/images/footer/rectangle12.png",
          iconEnd: "/public/images/footer/rectangle13.png",
          upImage: "/public/images/footer/boy.png",
        }),
      },
    ],
  });

  return changeProfileUser;
  // document.body.append(changeProfileUser);
}

export default changeProfileUserSection;
