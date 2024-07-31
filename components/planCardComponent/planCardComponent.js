import domGenerator from "dom-generator";
import "./index.scss";

import buttonGenerator from "../buttonComponent/buttonComponent";
import handlePurchase from "../../src/js/shaparack/shaparack";

/**
 * Generates a card plan element with provided properties and event listeners.
 * @param {Object} options - The options for generating the card plan.
 * @param {string} options.titlePlan - The title of the plan.
 * @param {string} options.titlePlanDescription - The description of the plan title.
 * @param {string} options.priceText - The text displaying the price of the plan.
 * @param {string} options.priceTextDescription - The description of the price text.
 * @param {string} [options.size="medium"] - The size of the card plan ("small", "medium", "large").
 * @param {string} [options.status="primary"] - The status of the card plan.
 * @param {string} [options.color="white"] - The color of the button in the card plan.
 * @param {string} [options.className=""] - Additional class names for the card plan.
 * @param {Object} [options.eventListeners={}] - Event listeners to attach to the card plan.
 * @returns {HTMLDivElement} - The generated card plan element.
 */
function cardPlanGenerator({
  titlePlan,
  titlePlanDescription,
  priceText,
  priceTextDescription,
  size = "medium",
  status = "primary",
  color = "white",
  className = "",
  eventListeners = {},
}) {
  let cardPlan = domGenerator({
    tag: "div",
    attributes: {
      class: `cardPlanComponentWrapper  ${className}`,
    },
    dataAttributes: { size: size, status: status },
    children: [
      {
        tag: "div",
        attributes: { id: "titleGroup" },
        children: [
          {
            tag: "h2",
            properties: { textContent: titlePlan },
          },
          {
            tag: "p",
            properties: { textContent: titlePlanDescription },
          },
        ],
      },
      {
        tag: "div",
        attributes: { id: "priceGrope" },
        children: [
          {
            tag: "h3",
            properties: { textContent: priceText },
          },
          {
            tag: "p",
            properties: { textContent: priceTextDescription },
          },
        ],
      },

      {
        tag: buttonGenerator({
          content: "خرید پلن",
          size: "large",
          status: "plan",
          color: color,
          eventListeners: { click: () => handlePurchase(titlePlan, priceText) },
        }),
      },
    ],
  });

  return cardPlan;
  //   document.body.append(cardPlan);
}

export default cardPlanGenerator;
