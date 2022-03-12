const quotes = [
	{
		quote: "123",
		author: "a",
	},
	{
		quote: "456",
		author: "b",
	},
	{
		quote: "3",
		author: "c",
	},
	{
		quote: "4",
		author: "d",
	},
	{
		quote: "5",
		author: "e",
	},
	{
		quote: "6",
		author: "f",
	},
];

Array.prototype.sample = function () {
	return this[Math.floor(Math.random() * this.length)];
};
const quoteSpan = document.querySelector("#quote span:first-child");
const authorSpan = document.querySelector("#quote span:nth-child(2)");

const { quote, author } = quotes.sample();

quoteSpan.innerText = quote;
authorSpan.innerText = author;
