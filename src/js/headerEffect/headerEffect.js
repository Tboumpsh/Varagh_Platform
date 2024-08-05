function headerEffect(header) {
    let isAtTop = true;
    let timer = null;
  
    function handleScroll() {
      if (window.scrollY > 0 && isAtTop) {
        // Scroll down behavior
        header.style.height = "110px";
        header.style.width = "100%";
        header.style.top = "0";
        header.style.borderRadius = "0";
        header.style.transition = "all 0.2s"
        isAtTop = false;
  
        // Clear any existing timer
        clearTimeout(timer);
      } else if (window.scrollY === 0 && !isAtTop) {
        // Scroll back to top behavior
        header.style.height = ""; // Reset height
        header.style.width = ""; // Reset width
        header.style.top = "";
        header.style.borderRadius = "15px" // Reset top
        isAtTop = true;
      }
    }
  
    // Add scroll event listener to window
    window.addEventListener("scroll", handleScroll);

  // Add scroll event listener to window
  window.addEventListener("scroll", handleScroll);
}




export default headerEffect