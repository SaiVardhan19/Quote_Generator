// The variable quotes is an array of dictionaries that contains "quotes" and "author" as the keys 
const quotes = [
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
];

// This function is used to generate a new quote by generating returning a dictionary in the quotes array at random position with the help of the Math Library 
function generateRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}

// This function is used to generate a new quote by invoking the generateRandomQuote() function and printing the quote and the author 
function updateQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const randomQuote = generateRandomQuote();
    quoteElement.textContent = randomQuote.quote;
    authorElement.textContent = "- " + randomQuote.author;
}

//This statement is invoked when the "New Quote" button is used through the index.html file
const newQuoteButton = document.getElementById('new-quote');
newQuoteButton.addEventListener('click', updateQuote);

// This statement is the driver code for the entire file that invokes the updateQuote() 
updateQuote();
