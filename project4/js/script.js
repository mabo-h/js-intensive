//Задание 1-2

let str = document.querySelector('.text').textContent;

function getQuotationMarks() {
    document.querySelector('.text').innerHTML = str.replace(/'/g, '"');
}
function getSingleQuotes() {
    document.querySelector('.text').innerHTML = str.replace(/"/g, '\'');

}
function getQuotationMarksSpeech() {
    document.querySelector('.text').innerHTML = str.replace(/\B'|'\B/g, '"');
}
