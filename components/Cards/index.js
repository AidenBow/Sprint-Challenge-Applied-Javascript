// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



function Card(data) {
    const card = document.createElement('div')
    card.classList.add('card')

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = data.headline

    const authorContainer = document.createElement('div')
    authorContainer.classList.add('author')

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const img = document.createElement('img')
    img.setAttribute('src', data.authorPhoto)

    const author = document.createElement('span')
    author.textContent = `By ${data.authorName}`

    card.appendChild(headline)
    card.appendChild(authorContainer)
    authorContainer.appendChild(imgContainer)
    imgContainer.appendChild(img)
    authorContainer.appendChild(author)

    return card
}
//const axios = require('axios');

const cardContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    for (var key in response.data.articles) {
        if (response.data.articles.hasOwnProperty(key)) {
            response.data.articles[key].forEach(article => cardContainer.appendChild(Card(article)))
        }
    }
    })
  .catch(error => {
    console.log(error);
  })
