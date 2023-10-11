export function header(photographerData) {

    const picture = `assets/photosID/${photographerData.portrait}`

    // Créer photographer-header (infos / contact-button / picture)
    const article = document.getElementsByClassName('photograph-header')[0]

    const button = document.getElementsByClassName('contact_button')[0]
  
    const infoPhotographer = document.createElement('div')
    infoPhotographer.classList.add('info-photographer')
    infoPhotographer.setAttribute("tabindex", "0")
    infoPhotographer.setAttribute("aria-label", `Vous êtes sur le profil de ${photographerData.name} ${photographerData.city} ${photographerData.country} ${photographerData.tagline}`)
            
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

    imgPhotographer.setAttribute("tabindex", "0")
    imgPhotographer.setAttribute("aria-label", `portrait de ${photographerData.name}`)  

    article.appendChild(imgPhotographer)
            
    // Changer l'ordre d'affichage des infos et du bouton
    article.insertBefore(infoPhotographer, button)
}
