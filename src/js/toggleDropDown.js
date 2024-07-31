/**
 * Toggles the visibility of a dropdown menu by changing its display style between "block" and "none".
 * 
 * This function toggles the visibility of an HTML element with the specified `dropdownId` by switching its CSS
 * `display` property. If the element is currently displayed (`display` is "block"), it hides the element 
 * by setting `display` to "none". If the element is hidden, it shows the element by setting `display` to "block".
 * 
 * **Note:** This function assumes that the element with the given `dropdownId` exists in the DOM and that its
 * display style can be toggled between "block" and "none".
 * 
 * **Example:**
 * ```javascript
 * // Toggle the visibility of the dropdown with ID "myDropdown"
 * toggleDropdown("myDropdown");
 * ```
 * 
 * @param {string} dropdownId - The ID of the HTML element whose visibility is to be toggled. This should be
 *                               a valid ID of an element present in the DOM.
 * 
 * @returns {void} This function does not return any value.
 */
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

export default toggleDropdown;
