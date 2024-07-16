import domGenerator from "dom-generator";
import "./index.scss";

/**
 * Generates an input element with the specified attributes and event listeners.
 *
 * @param {{
 *   inputId: string,
 *   inputClass: string,
 *   placeholder: string,
 *   type: string,
 *   disabled: boolean,
 *   eventListeners: object,
 *   fontSize: string,
 *   size: string,
 *   statues: string,
 * }} options - The options for the input element.
 * @returns {HTMLInputElement} The generated input element.
 */

function inputGenerator({
  inputId = "",
  inputClass = "",
  placeholder = "",
  type = "text",
  disabled,
  eventListeners = {},
  fontSize = "medium",
  size = "medium",
  statues = "mainInput",
  maiLength = 5,
  maxLength = 30,
}) {
  let input = domGenerator({
    tag: "input",
    attributes: {
      id: inputId,
      class: `inputInsurance ${inputClass}`,
      placeholder: placeholder,
      minLength: maiLength,
      maxLength: maxLength,
    },
    dataAttributes: { size: size, status: statues, fontSize: fontSize },
    eventListeners,
  });
  input.type = type ?? "text";

  if (disabled) {
    button.disabled = true;
  }

  return input;
}
export default inputGenerator;