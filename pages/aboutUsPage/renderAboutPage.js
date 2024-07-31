import aboutPage from "./aboutPage";

/**
 * Renders the About Page by appending the generated content to the main element.
 * It gets the main element from the DOM and appends the result of the aboutPage function to it.
 * Assumes that the main element exists in the DOM.
 */
function renderAboutPage() {
  let main = document.getElementById("main");
  main.append(aboutPage());
}
export default renderAboutPage;
