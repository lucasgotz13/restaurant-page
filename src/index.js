import initialPageLoad from './components/initialPage.js'
import homePage from './components/homePage.js'
import aboutPage from './components/aboutPage.js'
const staticContent = document.getElementById('static-content')
const dynamicContent = document.getElementById('dynamic-content')
staticContent.appendChild(initialPageLoad())

const buttonDiv = document.createElement('div')
buttonDiv.classList.add('button-div')
staticContent.appendChild(buttonDiv)

const homeButton = document.createElement('button')
homeButton.textContent = "Home"
homeButton.classList.add('button-24')
homeButton.addEventListener('click', () => {
    dynamicContent.innerHTML = ""
    dynamicContent.appendChild(homePage())
}) 
buttonDiv.appendChild(homeButton)

const aboutButton = document.createElement('button')
aboutButton.textContent = "About"
aboutButton.classList.add('button-24')
aboutButton.addEventListener('click', () => {
    dynamicContent.innerHTML = ""
    dynamicContent.appendChild(aboutPage())
})
buttonDiv.appendChild(aboutButton)

const contactButton = document.createElement('button')
contactButton.classList.add('button-24')
contactButton.textContent = "Contact"
buttonDiv.appendChild(contactButton)

dynamicContent.appendChild(homePage())