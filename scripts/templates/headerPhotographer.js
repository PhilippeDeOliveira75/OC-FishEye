export function header(photographerData) {

    const picture = `assets/photosID/${photographerData.portrait}`

    // Creat photographer-header (infos / contact-button / picture)
    const article = document.getElementsByClassName('photograph-header')[0]

    const button = document.getElementsByClassName('contact_button')[0]

    const bodyPhotographer = document.getElementsByTagName('body')
            
    const infoPhotographer = document.createElement('div')
    infoPhotographer.classList.add('info-photographer')
            
    const namePhotographer = document.createElement('h1')
    namePhotographer.textContent = `${photographerData.name}`
    infoPhotographer.appendChild(namePhotographer)
            
    const location = document.createElement('p')
    location.textContent = `${photographerData.city}, ${photographerData.country}`
    infoPhotographer.appendChild(location)
            
    const citation = document.createElement('blockquote')
    citation.textContent = `${photographerData.tagline}`
    infoPhotographer.appendChild(citation)

    const imgPhotographer = document.createElement('img')
    imgPhotographer.setAttribute("src", picture)
    imgPhotographer.setAttribute("alt", photographerData.name)
    article.appendChild(imgPhotographer)
            
    // Change display order of infos and button
    article.insertBefore(infoPhotographer, button)
}