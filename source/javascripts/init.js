function change() {
  const body = document.querySelector('body');
  body.classList.toggle("nineties");
}

function interestsTicker(element) {
  const text = element.dataset.text;
  const tickerElement = document.querySelector('.favoritethingsticker');

  tickerElement.textContent = text;
}