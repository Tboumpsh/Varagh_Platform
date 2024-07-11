function generateLinks(input) {
  const { numberOfAs, texts } = input;

  if (texts.length !== numberOfAs) {
    throw new Error("The number of texts should match the number of <a> tags");
  }

  let result = "";
  for (let i = 0; i < numberOfAs; i++) {
    result += `<a>${texts[i]}</a>`;
  }

  return result;
}

//   const input = {
//     numberOfAs: 3,
//     texts: ["Link 1", "Link 2", "Link 3"]
//   };

export default generateLinks;
