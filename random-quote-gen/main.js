const quoteContainer = document.getElementById("quote-container");

const quoteText = document.getElementById("quote");

const authorName = document.getElementById("author")

const  twitterButton = document.getElementById("twitter") ;

const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader")

// GET QUOTE FROM API
// https://api.quotable.io/random

// SHOW LOADING
function showLoading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// hide loading
function hideLoading(){
   if(!loader.hidden){
    loader.hidden = true;
    quoteContainer.hidden = false;
   }
}

const getQoute = async() => {
    showLoading()
    const apiUrl = "https://api.quotable.io/random";

    try {
       const response = await fetch(apiUrl);
       const data = await response.json()
       console.log(data);
       if (data.author === "") {
        authorName.innerText = "Unknown";
        
        
       } else {
        authorName.innerText = data.author;
       }
    //   check quote length to determine the styling
       if (data.content.length > 50) {
        quoteText.classList.add('long-quote')
        
       } else {
        quoteText.classList.add('long-quote')
       }
       authorName.innerText = data.author;
       quoteText.innerText = data.content
       hideLoading()
    } catch (error) {
        console.log("Error fetching quote", error)
    }
}
const tweetQuote = ()=>{
    const quote = quoteText.innerText;
    const  author = authorName.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${ quote}-${author}`
    window.open(twitterUrl, "_blank")
}
newQuoteBtn.addEventListener("click",getQoute )
twitterButton.addEventListener("click",tweetQuote )
getQoute()