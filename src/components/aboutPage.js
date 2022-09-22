function aboutPage() {
    const aboutDiv = document.createElement('div')
    aboutDiv.classList.add("about-div")

    const aboutImg = document.createElement('img')
    aboutImg.setAttribute("src", "../src/assets/about-la-guitarrita.jpg")
    aboutImg.classList.add("about-img")
    aboutDiv.appendChild(aboutImg)

    return aboutDiv
}

export default aboutPage