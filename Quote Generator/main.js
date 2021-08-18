let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
[
    '"Posso não concordar com nenhuma das palavras que você disser, mas defenderei até a morte o direito de você dizê-las." -Voltaire',
    '"O trabalho espanta três males: o vício, a pobreza e o tédio." -Voltaire',
    '"Ser senhor do seu tempo é ser senhor de si próprio." -Voltaire',
    '"A primeira lei da natureza é a tolerância - já que temos todos uma porção de erros e fraquezas." -Voltaire',
    '"Não prestamos para nada se só formos bons para nós próprios." -Voltaire',
];



btn.addEventListener('click',function()
{
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote; 
})
