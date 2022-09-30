import image from "../assets/about-house.jpg"

function aboutPage() {
    const aboutDiv = document.createElement('div')
    aboutDiv.classList.add("about-div")

    const aboutImg = document.createElement('img')
    aboutImg.setAttribute("src", image)
    aboutImg.classList.add("about-img")
    aboutDiv.appendChild(aboutImg)

    const whoDiv = document.createElement('div')
    whoDiv.classList.add("who-div")
    aboutDiv.appendChild(whoDiv)

    const whoTitle = document.createElement("h1")
    whoTitle.textContent = "About us"
    whoTitle.classList.add("who-title")
    whoDiv.appendChild(whoTitle)

    const whoDesc = document.createElement("p")
    whoDesc.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolor id quisquam assumenda consequuntur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolor id quisquam assumenda consequuntur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolor id quisquam assumenda consequuntur."
    whoDesc.id = "who-desc"
    whoDiv.appendChild(whoDesc)

    return aboutDiv
}

export default aboutPage