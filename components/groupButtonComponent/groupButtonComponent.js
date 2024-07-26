import domGenerator from "dom-generator";
import "./index.scss";

import buttonGenerator from "../buttonComponent/buttonComponent";

function groupButtonGenerator({
  initialValue = 0,
  size = "medium",
  status = "primaryOrang",
  type = "button",
  className = "",
  anchorLink = "#",
  eventListeners = {},
  disabled,
  iconStart = "",
  iconEnd = "",
}) {
  let value = initialValue;

  const updateInputValue = (input, newValue) => {
    input.value = newValue;
  };

  let inputElement;

  const increment = () => {
    value += 1;
    updateInputValue(inputElement, value);
  };

  const decrement = () => {
    value -= 1;
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
        
        tag:buttonGenerator({
            content:'+',
            status:'counter',
            eventListeners:{click:increment}
        }),
      },
      {
        tag: "input",
        properties: { textContent: value },
        attributes: {
          class: `buttonGroup`,
          type: "text",
          readonly: true,
        },
      },
      {
        tag:buttonGenerator({
            content:'-',
            status:'counter',
            eventListeners:{click:decrement}
        }),
      },
    ],
  });

  // Find the input element and store a reference to it
  inputElement = buttonGroup.querySelector('input');

  if (disabled) {
    counterComponent.disabled = true;
  }

  return buttonGroup;
}

export default groupButtonGenerator;
