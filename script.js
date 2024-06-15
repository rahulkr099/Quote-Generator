const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

async function newQuote(){
    
    const apiUrl = 'https://dummyjson.com/quotes/random';
    try{
        const response = await fetch(apiUrl);
        let data = await response.json();
        console.log(data);

        authorText.innerText = data.author;
        quoteText.innerText = data.quote;
    }catch(error){
     console.log('error detected in api call');
    //  process.exit(1);
    }
}
newQuote();

//Tweet Quote
function tweetQuote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;

    const twitterUrl = 'https://twitter.com/intent/tweet?text=${quote} - ${author}';
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);


