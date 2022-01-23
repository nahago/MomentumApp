const quotes = [
    {
        quote: "The goal of life is living in agreement with nature.",
        author: "Zeno",
    },
    {
        quote: "Only I can change my life. No one can do it for me.",
        author: "Carol Burnett",
    } ,
    {
        quote: "The universe is change; our life is what our thoughts make it.",
        author: "Marcus Aurelius Antoninus",
    },    
    {
        quote: "The true traveler is he who goes on foot, and even then, he sits down a lot of the time.",
        author: "Colette",
    },
    {
        quote: "Age is foolish and forgetful when it underestimates youth.",
        author: "J. K. Rowling",
    },    
    {
        quote: "Life is pleasant. Death is peaceful. It's the transition that's troublesome.",
        author: "Isaac Asimov",
    },    
    {
        quote: "Learn as much by writing as by reading.",
        author: "Lord Acton",
    },    
    {
        quote: "A book that is shut is but a block.",
        author: "Thomas Fuller",
    },    
    {
        quote: "He who laughs, lasts!",
        author: "Mary Pettibone Poole",
    },    
    {
        quote: "Never leave that 'till tomorrow which you can do today.",
        author: "Benjamin Franklin",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;