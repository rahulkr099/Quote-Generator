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