const quoteContainer = document.getElementById("quote-container");

const quoteText = document.getElementById("quote");

const authorName = document.getElementById("author")

const  twitterButton = document.getElementById("twitter") ;

const newQuoteBtn = document.getElementById("new-quote");

// "https://type.fit/api/quotes"

let apiQoute = [];
function newQuote() {
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
}

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
         apiQoute = await response.json()

        console.log(apiQoute)

    newQuote()

    } catch (error) {
        console.log(error)  
    }
}
newQuoteBtn.addEventListener("click", newQuote)
getQuotes()