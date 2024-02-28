const quoteText = document.querySelector(".quote-content");
const authorName = document.querySelector(".author_name");
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
console.log(copyBtn);
console.log(soundBtn);
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
      quoteBtn.classList.remove("loading");
    });
}
quoteBtn.addEventListener("click", randomQuote);

soundBtn.addEventListener("click", () => {
  try {
    console.log("click");
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    console.log(utterance);
    speechSynthesis.speak(utterance);
  } catch (e) {
    console.log(e);
  }
});
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(`${quoteText.innerText}`);
});
