function initialPageLoad() {
    const div = document.createElement('div')

    const title = document.createElement('h1')
    title.id = "title"
    title.textContent = "La Guitarrita"
    div.appendChild(title)
    return div
}


export default initialPageLoad