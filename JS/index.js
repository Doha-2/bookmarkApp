function randomText() {
  var quotes = [
    `"Resentment is like drinking poison and waiting for your enemies to die."--Nelson Mandela`,
    `"You miss 100% of the shots you don't take."--Wayne Gretzy`,
    `"Do not take life too seriously. You will not get out alive."--Elbert Hubbard`,
    `"The best revenge is massive success."--Frank Sinatra`,
    `"It's not what happens to you, but how you react to it that matters."--Epictetus`,
  ];
var quoteElement = document.getElementById("quote");
var randomText = Math.floor(Math.random() * quotes.length);
quoteElement.textContent = quotes[randomText];
var quoteElement = document.getElementById("quote");
}
