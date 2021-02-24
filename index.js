function fetchQuote() {
  // Get  quotes from API
  const url = "https://api.chucknorris.io/jokes/random";
  // Get the element to update
  const quoteParagrah = document.getElementById("quote-text");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.value);
      quoteParagrah.innerText = data.value;
    });
}

fetchQuote();

// Get button
const redBtn = document.querySelector(".btn");

redBtn.addEventListener("click", fetchQuote);
