import homeImage from "../assets/pizzeria-2.jpg"

function homePage() {
    const homeDiv = document.createElement('div')

    const heroDiv = document.createElement('div')
    heroDiv.classList.add("home-div")
    homeDiv.appendChild(heroDiv)

    const heroTitle = document.createElement('h1')
    heroTitle.textContent = "A pizza originated in Buenos Aires you must try"
    heroTitle.classList.add("hero-title")
    heroDiv.appendChild(heroTitle)  

    const pizzeriaImg = document.createElement('img')
    pizzeriaImg.setAttribute("src", homeImage)
    pizzeriaImg.setAttribute("alt", "pizza-img")
    pizzeriaImg.classList.add("home-page-pizza")
    heroDiv.appendChild(pizzeriaImg)

    const welcomeDiv = document.createElement('div')
    welcomeDiv.classList.add("welcome-div")
    heroDiv.appendChild(welcomeDiv)

    const welcomeMsg = document.createElement('h3')
    welcomeMsg.textContent = "Welcome to La Guitarrita"
    welcomeDiv.appendChild(welcomeMsg)

    const welcomeDesc = document.createElement('p')
    welcomeDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor imperdiet porta. Nullam placerat malesuada mauris non mattis. Fusce bibendum ante quis leo eleifend ultricies. In elit elit, interdum sit amet ultrices gravida, commodo vitae elit. Nam orci felis, faucibus et est vel, bibendum semper massa. Vivamus convallis, leo quis molestie feugiat, eros quam euismod ex, faucibus mattis nisi massa eu felis. Donec dapibus viverra nisl, ut aliquet lectus dapibus luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    welcomeDiv.appendChild(welcomeDesc)
    return homeDiv
}

export default homePage