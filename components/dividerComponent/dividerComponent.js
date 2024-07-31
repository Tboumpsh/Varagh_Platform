import domGenerator from "dom-generator";
import "./index.scss";

/**
 * Generates a divider component with optional images on the left and right sides.
 * 
 * This function creates a divider component that displays two images: one on the left and one on the right.
 * The images are specified by the `imageL` and `imageR` parameters. If no image is provided for one side, 
 * that side will be empty.
 * 
 * @function dividerComponent
 * @param {Object} options - Configuration object for the divider component.
 * @param {string} [options.imageR=""] - The URL of the image to display on the right side of the divider. Defaults to an empty string.
 * @param {string} [options.imageL=""] - The URL of the image to display on the left side of the divider. Defaults to an empty string.
 * 
 * @returns {HTMLElement} The generated divider component element containing the images.
 * 
 */

function dividerComponent({ imageR = "", imageL = "" }) {
  let divider = domGenerator({
    tag: "div",
    attributes: { id: "dividerSection" },
    children: [
      {
        tag: "img",
        attributes: {
          src: imageR,
        },
      },
      {
        tag: "img",
        attributes: {
          src: imageL,
        },
      },
    ],
  });

  return divider;
}

export default dividerComponent;
