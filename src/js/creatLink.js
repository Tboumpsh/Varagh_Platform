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
