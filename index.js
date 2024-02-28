const quoteText = document.querySelector(".quote-content");
const authorName = document.querySelector(".author_name");
console.log(authorName);
quoteBtn = document.querySelector("button");
console.log(quoteBtn);

function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote ...";
  console.log("clicked");
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      quoteText.innerText = data.content;
      authorName.innerText = data.author;
      quoteBtn.innerText = "New Quote";
    });
}
quoteBtn.addEventListener("click", randomQuote);
