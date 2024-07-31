/**
 * Creates an array of link elements based on provided text and click handler.
 * 
 * This function generates an array of link element configurations, which can be used to create `<a>` elements in the DOM.
 * Each link is assigned a unique ID and an event listener that prevents the default action and calls a provided click handler with the index of the link.
 * 
 * @function createLinkElements
 * @param {string[]} linkTexts - An array of strings representing the text content for each link. Each string is used as the text for one `<a>` element.
 * @param {Function} handleLinkClick - A callback function that is called when a link is clicked. This function receives the index of the clicked link as its argument.
 * 
 * @returns {Object[]} An array of objects, each representing a link element with attributes, properties, and event listeners. The objects can be used with a function like `domGenerator` to create actual DOM elements.
 * 
 */
function createLinkElements(linkTexts, handleLinkClick) {
    return linkTexts.map((item, index) => {
      return {
        tag: 'a',
        attributes: {
          href: '#',
          class: 'header-link',
          id: `link-${index}`,
        },
        properties:{textContent:item},
        eventListeners: {
          click: (e) => {
            e.preventDefault();
            handleLinkClick(index);
          }
        }
      };
    });
  }
  
  export default createLinkElements;
  