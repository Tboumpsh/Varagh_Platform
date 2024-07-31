/**
 * Creates an array of `<a>` HTML elements with specified texts.
 * 
 * This function generates a specified number of `<a>` HTML elements and assigns each one text from the given
 * `texts` array. The number of elements created is determined by the `number` parameter. If the `texts` array
 * does not have enough elements to match the specified number, an error is logged to the console and the function
 * returns `undefined`.
 * 
 * **Error Handling:**
 * - If the length of the `texts` array is less than the `number` parameter, an error message is logged to the console.
 * 
 * **Return Value:**
 * - An array of `<a>` HTML elements with the corresponding text content.
 * 
 * **Example:**
 * ```javascript
 * // Create 3 links with specified texts
 * const links = createLinks(3, ["Home", "About", "Contact"]);
 * console.log(links); // Array of <a> elements with text "Home", "About", and "Contact"
 * ```
 * 
 * @param {number} number - The number of `<a>` elements to create.
 * @param {string[]} texts - An array of strings to use as the text content for the `<a>` elements. 
 * @returns {HTMLElement[]} An array of `<a>` HTML elements with the text content from the `texts` array.
 * @throws {Error} If `texts` array length is less than `number`, an error is logged to the console.
 */

function createLinks(number, texts) {
  // Create an array to store the tooltips
  if (texts.length < number) {
    console.error('number of text is lesses')
    return;
  }
  const links = [];

  // Loop through the specified number of tooltips
  for (let i = 0; i < number; i++) {
    // Create a new tooltip
   const link = document.createElement('a');
   link.textContent =texts[i]
    // Add the tooltip to the array
    links.push(link);
  }

  // Return the array of tooltips
  return links;
}

export default createLinks;
