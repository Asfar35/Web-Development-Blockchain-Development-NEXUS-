const quotes = [
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Life is what happens when you’re busy making other plans. - John Lennon",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "I have not failed. I’ve just found 10,000 ways that won’t work. - Thomas Edison",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
    "If you are not willing to risk the usual, you will have to settle for the ordinary. - Jim Rohn",
    "Opportunities don’t happen. You create them. - Chris Grosser",
    "I never dreamed about success. I worked for it. - Estee Lauder",
    "Believe you can and you’re halfway there. - Theodore Roosevelt",
    "Dream big and dare to fail. - Norman Vaughan",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson"
];

function generate(){
    const text = document.getElementById('box');
    const idx = Math.floor(Math.random()*quotes.length);
    text.innerHTML = quotes[idx];
}
// setInterval(generate,5000);
const b1 = document.querySelector('button');
b1.addEventListener('click',generate);

