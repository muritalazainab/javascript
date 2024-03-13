const quoteContainer = document.getElementById("quote-container");

const quoteText = document.getElementById("quote");

const authorName = document.getElementById("author")

const  twitterButton = document.getElementById("twitter") ;

const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader")


// "https://type.fit/api/quotes"

let apiQoute = []

// show loading
function loading (){
    loader.hidden = false;
    quoteContainer.hidden = true;
    
}
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

function newQuote() {
    loading();
    const quote = apiQoute[Math.floor(Math.random() * apiQoute.length)];
    // console.log(quote);
    if(!quote.author){
        authorName.textContent = "Unknown"
    }else{
        authorName.textContent = quote.author
    }
    // check quote length to determine the styling
    if(quote.text.length > 50){
    quoteText.classList.add("long-quote")
    }else{
        quoteText.classList.remove("long-quote")
    }


    
    quoteText.textContent = quote.text
    complete()
}

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    loading();
    try {
        const response = await fetch(apiUrl);
         apiQoute = await response.json()

        console.log(apiQoute)

    newQuote()

    } catch (error) {
        console.log(error)  
    }
}
function tweetQuotes(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${ quoteText.textContent}-${authorName.textContent} `
    window.open(twitterUrl, "_blank")

}
twitterButton.addEventListener("click", tweetQuotes)




newQuoteBtn.addEventListener("click", newQuote)
getQuotes()
tweetQuotes()