import domGenerator from "dom-generator";
import "./index.scss";

import buttonGenerator from "../buttonComponent/buttonComponent";

/**
 * Generates a group of buttons with an input field that displays a numerical value. 
 * The group includes increment and decrement buttons to modify the value displayed in the input field.
 * 
 * @function groupButtonGenerator
 * @param {Object} options - Configuration object for the button group.
 * @param {number} [options.initialValue=0] - The initial value displayed in the input field. Defaults to `0`.
 * @param {string} [options.size="medium"] - The size of the buttons. Defaults to `"medium"`.
 * @param {string} [options.status="primaryOrang"] - The status/style of the buttons. Defaults to `"primaryOrang"`.
 * @param {string} [options.type="button"] - The type of the buttons. Defaults to `"button"`.
 * @param {string} [options.className=""] - Additional class names to apply to the button group container. Defaults to an empty string.
 * @param {string} [options.anchorLink="#"] - The URL to link to if the button is an anchor. Defaults to `"#"`.
 * @param {Object} [options.eventListeners={}] - Event listeners to attach to the buttons. Defaults to an empty object.
 * @param {boolean} [options.disabled=false] - Whether the button group should be disabled. Defaults to `false`.
 * @param {string} [options.iconStart=""] - The URL of the icon to display at the start of the button. Defaults to an empty string.
 * @param {string} [options.iconEnd=""] - The URL of the icon to display at the end of the button. Defaults to an empty string.
 * 
 * @returns {HTMLElement} The generated button group element containing increment, input, and decrement buttons.
 * 
 */

function groupButtonGenerator({
  initialValue = 0,
  size = "medium",
  status = "primaryOrang",
  className = "",
  eventListeners = {},
  disabled,
  iconStart = "",
  iconEnd = "",
  onValueChange // New callback for value change
}) {
  let value = initialValue;

  const updateInputValue = (input, newValue) => {
    input.value = newValue;
    if (onValueChange) {
      onValueChange(newValue); // Call the callback with the new value
    }
  };

  let inputElement;

  const increment = () => {
    value += 1;
    updateInputValue(inputElement, value);
  };

  const decrement = () => {
    value -= 1;
    if (value < 0) {
      value = 0;
    }
    updateInputValue(inputElement, value);
  };

  let buttonGroup = domGenerator({
    tag: "div",
    attributes: {
      class: `buttonGroupComponent  ${className}`,
    },
    dataAttributes: { size: size, status: status },
    children: [
      {
        tag: buttonGenerator({
          content: '+',
          status: 'counter',
          eventListeners: { click: increment }
        }),
      },
      {
        tag: "input",
        properties: { value: value },
        attributes: {
          class: `buttonGroup`,
          id: 'quantityInput',
          type: "text",
          readonly: true,
          min: 0,
          max: 5,
        },
      },
      {
        tag: buttonGenerator({
          content: '-',
          status: 'counter',
          eventListeners: { click: decrement }
        }),
      },
    ],
  });

  inputElement = buttonGroup.querySelector('input');

  if (disabled) {
    buttonGroup.disabled = true;
  }

  return buttonGroup;
}

export default groupButtonGenerator;
