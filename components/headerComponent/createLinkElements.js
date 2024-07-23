// linkCreator.js
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
  