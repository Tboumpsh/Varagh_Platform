import domGenerator from "dom-generator";
import "./index.scss";

import heroSectionComponent from "../heroSectionComponent/heroSectionComponent";

/**
 * Generates a base button element with optional properties.
 * @param {Object} options - The options for generating the button.
 * @param {string} options.content - The text content of the button.
 * @param {string} [options.size="medium"] - The size of the button ("small", "medium", "large").
 * @param {string} [options.status="primaryFill"] - The status of the button ("primaryFill", "secondaryFill", "tertiaryFill", "quaternaryFill").
 * @param {string} [options.type="button"] - The type of the button ("button", "submit", "reset").
 * @param {string} [options.className=""] - Additional class names for the button.
 * @param {string} [options.anchorLink="#"] - The href link for the button if it acts as an anchor.
 * @param {Object} [options.eventListeners={}] - Event listeners to attach to the button.
 * @param {boolean} [options.disabled] - Whether the button should be disabled.
 * @param {string} [options.iconStart=""] - The URL of the image icon to display at the start of the button.
 * @param {string} [options.iconEnd=""] - The URL of the image icon to display at the end of the button.
 * @returns {HTMLDivElement} - The generated button element.
 */
function aboutSectionComponent({
  contentTitle,
  // paragraphContent,
  size = "medium",
  statues = "primary",
  className = "",
  // eventListeners = {},
  // gifSrc = "",
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
          srcHero: "/public/images/aboutPage/Group-24.gif",
        })
      },
    ]
  });

    return aboutSections;
  // about.append(aboutSections);
}

export default aboutSectionComponent;
