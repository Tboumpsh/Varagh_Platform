import planePage from "./planPage";

/**
 * Renders the "Plan Page" section by clearing the existing content of the main element
 * and appending the new content generated by the `planePage` function.
 * 
 * This function performs the following tasks:
 * 1. Retrieves the HTML element with the ID `main`.
 * 2. Clears the existing content of this element by setting its `innerHTML` to an empty string.
 * 3. Appends the content generated by the `planePage` function to the `main` element.
 * 
 * @function renderPlanPage
 * 
 * @returns {void} This function does not return a value. It directly manipulates the DOM by updating the `main` element.
 * 
 * @example
 * // Usage
 * renderPlanPage();
 * 
 * @see {@link ./planPage|planePage} for details about the `planePage` function that generates the content to be appended.
 */

function renderPlanPage() {
    let main = document.getElementById("main");
    main.innerHTML = "";
    main.append(planePage());
  }
  export default renderPlanPage;
  