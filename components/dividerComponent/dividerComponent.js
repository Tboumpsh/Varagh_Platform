import domGenerator from "dom-generator";
import "./index.scss";

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
