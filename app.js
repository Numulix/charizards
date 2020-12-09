// const cardsElement = document.getElementById('cards');
const cardsElement = document.querySelector('#cards');
const apiUrl = 'https://api.pokemontcg.io/v1/cards?name=';

const form = document.querySelector('form');
const input = document.querySelector('input');
const imageDiv = document.getElementById('cards');

// Add an event listener on form submission
form.addEventListener('submit', formSubmission);

function formSubmission(event) {
  event.preventDefault();
  imageDiv.innerHTML = '';
  const term = input.value;

  search(term)
    .then(displayCards)
}

function search(term) {
  const url = `${apiUrl}${term}`

  return fetch(url)
    .then(res => res.json())
    .then(result => {
      return result.cards;
    })
}

function displayCards(cards) {
  cards.forEach(card => {
    const imgElement = document.createElement('img');
    imgElement.src = card.imageUrl;
    imageDiv.appendChild(imgElement)
  })
}