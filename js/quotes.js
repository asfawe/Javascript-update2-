const quotes = [
    {
        quote: "Folks are usually about as happy as they make their minds up to be.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Whatever you are, be a good one.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
        author: "Abraham Lincoln",
    },
    {
        quote: "To ease another’s heartache is to forget one’s own.",
        author: "Abraham Lincoln",
    },
    {
        quote: "And in the end it is not the years in your life that count, it’s the life in your years.",
        author: "Abraham Lincoln",
    },
    {
        quote: "You can fool all the people some of the time, and some of the people all the time, but you cannot fool all the people all the time.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Success is going from failure to failure without losing your enthusiasm.",
        author: "Abraham Lincoln",
    },
    {
        quote: "My best friend is a person who will give me a book I have not read.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Leave nothing for tomorrow which can be done today.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Nearly all men can stand adversity, but if you want to test a man’s character, give him power.",
        author: "Abraham Lincoln",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;