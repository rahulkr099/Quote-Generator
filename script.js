const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

    let loading = document.getElementById('loader');
    let quoteBox = document.getElementById('quote-box');


//show Loader
function loader() {
    loading.hidden = false;
    quoteBox.style.display = "none";
}
//hide loader
function complete() {
    if (!loading.hidden) {
        loading.hidden = true;
        quoteBox.style.display= "";
    }
}
//API is called here using async function
async function newQuote() {
    loader();
    const apiUrl = 'https://dummyjson.com/quotes';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        let random = Math.floor(Math.random() * data.quotes.length);
        console.log(random);
        authorText.innerText = data.quotes[random].author;
        quoteText.innerText = data.quotes[random].quote;
        complete();
    } catch (error) {
        console.log('error detected in api call');
        newQuote();}
    // }finally{
    //     complete();
    // }
}
newQuote();
//Tweet Quote
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}-${author}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);




