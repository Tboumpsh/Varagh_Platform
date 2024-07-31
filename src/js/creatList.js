/**
 * Generates an unordered list (`<ul>`) with list items (`<li>`) based on the specified number and texts.
 * 
 * This function creates an unordered list (`<ul>`) where each list item (`<li>`) is populated with text from the
 * `myTexts` array. The number of list items is determined by the `myNumber` parameter. The function currently uses
 * hardcoded values for `myNumber` and `myTexts` for demonstration purposes.
 * 
 * **Note:** The parameters `myNumber` and `myTexts` are overwritten by hardcoded values within the function.
 * 
 * **Return Value:**
 * - An HTML `<ul>` element containing `<li>` elements with text content from the `myTexts` array.
 * 
 * **Example:**
 * ```javascript
 * // Generate a list with predefined number and texts
 * const list = listGenerator();
 * document.body.appendChild(list); // Append the generated list to the body
 * ```
 * 
 * @returns {HTMLElement} An HTML `<ul>` element containing list items with text content from the `myTexts` array.
 */
function listGenerator(myNumber, myTexts) {
  function createList(number, texts) {
    let ul = document.createElement("ul");
    for (let i = 1; i <= number; i++) {
      let li = document.createElement("li");
      let text = texts[i - 1];
      li.textContent = text;
      ul.appendChild(li);
    }
    return ul;
  }

  myNumber = 5;
  myTexts = ["ضمانت کالا", "پشتیبانی سریع", "ارسال رایگان", "کالای مرجوعی", "تضمین امنیت"];

  let myList = createList(myNumber, myTexts);

  return myList;
}
export default listGenerator;
