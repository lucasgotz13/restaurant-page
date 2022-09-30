import contactMapImage from '../assets/guitarrita-maps.png'

function contactPage() {
    const contactDiv = document.createElement('div')
    contactDiv.classList.add("contact-div")

    const contactTitle = document.createElement('h1')
    contactTitle.textContent = "Contact us"
    contactTitle.id = "contact-title"
    contactDiv.appendChild(contactTitle)

    const infoDiv = document.createElement("div")
    infoDiv.classList.add("info-div")
    contactDiv.appendChild(infoDiv)

    const contactAddress = document.createElement('p')
    contactAddress.innerHTML = "<span class='info-title'>Address</span>: Libertador Av. 3201"
    contactAddress.classList.add("contact-address")
    infoDiv.appendChild(contactAddress)

    const contactNumber = document.createElement('p')
    contactNumber.innerHTML = "<span class='info-title'>Contact number:</span> +54 223 910-5830"
    contactNumber.classList.add("contact-address")
    contactNumber.classList.add("contact-number")
    infoDiv.appendChild(contactNumber)

    const contactMail = document.createElement('p')
    contactMail.innerHTML = "<span class='info-title'>E-mail:</span> la.guitarrita@email.com"
    contactMail.classList.add('contact-address')
    contactMail.classList.add('contact-mail')
    infoDiv.appendChild(contactMail)

    const contactMedia = document.createElement('p')
    contactMedia.innerHTML = "<i class='fa-brands fa-twitter twitter-color'></i><i class='fa-brands fa-facebook facebook-color'></i><i class='fa-brands fa-instagram instagram-color'></i> @laguitarrita"
    contactMedia.classList.add('contact-address')
    contactMedia.classList.add('contact-media')
    infoDiv.appendChild(contactMedia)

    const contactMap = document.createElement('img')
    contactMap.src = contactMapImage
    contactMap.classList.add('contact-map')
    infoDiv.appendChild(contactMap)
    return contactDiv
}

export default contactPage