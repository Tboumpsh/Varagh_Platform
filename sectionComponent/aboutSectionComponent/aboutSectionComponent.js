import domGenerator from "dom-generator";
import "./index.scss";

import heroSectionComponent from "../heroSectionComponent/heroSectionComponent";

/**
 * Generates an "About" section component for a webpage.
 * 
 * This function creates a section with a title and a hero component, formatted according to the provided options.
 * 
 * @param {Object} params - The parameters for configuring the "About" section.
 * @param {string} params.contentTitle - The title text for the "About" section.
 * @param {string} [params.size="medium"] - The size of the section. Defaults to "medium". This value is passed as a data attribute.
 * @param {string} [params.statues="primary"] - The status of the section. Defaults to "primary". This value is passed as a data attribute.
 * @param {string} [params.className=""] - Additional CSS class names to be applied to the section. Defaults to an empty string.
 * 
 * @returns {HTMLElement} The DOM element representing the "About" section.
 * 
 * @example
 * const aboutSection = aboutSectionComponent({
 *   contentTitle: "About Us",
 *   size: "large",
 *   statues: "secondary",
 *   className: "custom-class"
 * });
 * document.body.appendChild(aboutSection);
 * 
 * @see {@link ../heroSectionComponent/heroSectionComponent|heroSectionComponent}
 */

function aboutSectionComponent({
  contentTitle,
  size = "medium",
  statues = "primary",
  className = "",

}) {
  let aboutSections = domGenerator({
    tag: "div",
    attributes: {
      class: `aboutSection  ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    children: [
      {
        tag: "h2",
        properties: { textContent: contentTitle },
      },
      {
        tag: heroSectionComponent({
          contentHero:"در دنیای پرشتاب امروز، همه ما به دنبال یافتن لحظاتی هستیم که بتوانیم به آرامش برسیم و در دنیای کتاب‌ها غوطه‌ور شویم. کتابخانه آنلاین ورق با این هدف راه‌اندازی شده است که دسترسی به دنیایی از دانش، تخیل و الهام را برای شما آسان‌تر کند. ما در ورق بر این باوریم که هر کتاب یک سفر است و هر سفر داستانی دارد که منتظر است تا کشف شود. از داستان‌های هیجان‌انگیز و عاشقانه گرفته تا کتاب‌های علمی و آموزشی، مجموعه‌ای بی‌نظیر از بهترین عناوین را گردآوری کرده‌ایم تا نیازهای مختلف شما را برآورده کنیم.",
          size: "large",
          status: "default",
          srcHero: "/public/images/aboutPage/abouts (1).svg",
        })
      },
    ]
  });

    return aboutSections;
}

export default aboutSectionComponent;
