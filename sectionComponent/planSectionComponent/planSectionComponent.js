import domGenerator from "dom-generator";
import "./index.scss";

import cardPlanGenerator from "../../components/planCardComponent/planCardComponent";
import { monthlyPrice } from "../../constants/informationUS";
import { WeeklyPrice } from "../../constants/informationUS";
import { yearlyPrice } from "../../constants/informationUS";

/**
 * Generates a section for displaying various subscription plans with their details.
 * 
 * This function creates a section that includes a title image and several plan cards. Each card represents a different subscription plan (weekly, monthly, and yearly) with relevant details.
 * 
 * @param {Object} options - The options for generating the plan section.
 * @param {string} [options.size="medium"] - The size of the section ("small", "medium", "large"). Defaults to "medium".
 * @param {string} [options.statues="primaryFill"] - The status of the section ("primaryFill", "secondaryFill", etc.). Defaults to "primaryFill".
 * @param {string} [options.className=""] - Additional CSS class names to apply to the section. Defaults to an empty string.
 * @param {Object} [options.eventListeners={}] - An object containing event listeners to attach to the section's elements. Keys are event types (e.g., "click") and values are handler functions.
 * @param {string} [options.imageTitle=""] - The URL of the image to display at the top of the section. Defaults to an empty string.
 * 
 * @returns {HTMLDivElement} The DOM element representing the plan section with subscription plans.
 * 
 * @see {@link domGenerator}
 * @see {@link cardPlanGenerator}
 * @see {@link monthlyPrice}
 * @see {@link WeeklyPrice}
 * @see {@link yearlyPrice}
 */

function planSectionCard({
  size = "medium",
  statues = "primaryFill",
  className = "",
  eventListeners = {},
  imageTitle = "",
}) {
  let planSection = domGenerator({
    tag: "div",
    attributes: {
      class: `planSection ${className}`,
    },
    dataAttributes: { size: size, status: statues },
    children: [
      {
        tag: "div",
        attributes: {
          id: `titleSection`,
        },
        children: [
          {
            tag: "img",
            attributes: { src: imageTitle },
          },
        ],
      },
      {
        tag: "div",
        attributes: { id: "planSectionCard" },
        children: [
          {
            tag: cardPlanGenerator({
              titlePlan: "پلن ماهانه",
              titlePlanDescription: "این پلن ها برای راحتی شما قرار داده شده است و قیمت های ان به ریال است",
              priceText: monthlyPrice,
              priceTextDescription: "برای تمدید این پلن فقط 50٪ از قیمت حقیقی آن را پرداخت کنید",
              size: "medium",
              status: "default",
              color: "orange",
            }),
          },
          {
            tag: cardPlanGenerator({
              titlePlan: "پلن هفتگی",
              titlePlanDescription: "این پلن ها برای راحتی شما قرار داده شده است و قیمت های ان به ریال است",
              priceText: WeeklyPrice,
              priceTextDescription: "برای تمدید این پلن فقط 50٪ از قیمت حقیقی آن را پرداخت کنید",
              size: "medium",
              status: "oranges",
              color: "white",
            }),
          },
          {
            tag: cardPlanGenerator({
              titlePlan: "پلن سالانه",
              titlePlanDescription: "این پلن ها برای راحتی شما قرار داده شده است و قیمت های ان به ریال است",
              priceText: yearlyPrice,
              priceTextDescription: "برای تمدید این پلن فقط 50٪ از قیمت حقیقی آن را پرداخت کنید",
              size: "medium",
              status: "default",
              color: "orange",
            }),
          },
        ],
      },
    ],
  });

  return planSection;
}

export default planSectionCard;
