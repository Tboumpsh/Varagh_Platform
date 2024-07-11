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
  myTexts = ["متن اول", "متن دوم", "متن سوم", "متن چهارم", "متن پنجم"];

  let myList = createList(myNumber, myTexts);

  return myList;
}
export default listGenerator;
