function photographerTemplate(data) {

    const { name, portrait, city, tagline, price, id, country } = data
    const picture = `assets/photosID/${portrait}`

    function getUserCardDOM() {

        const linkProfile = document.createElement('a')
        linkProfile.setAttribute('href', './photographer.html?id=' + id)
        linkProfile.setAttribute('aria-label', `lien vers la page du photographe  ${name}  ${city}  ${country}  ${tagline}  ${price} euro par jour`)

        const article = document.createElement('article')

        const img = document.createElement('img')
        img.setAttribute("src", picture)
        img.setAttribute("alt", `portrait ${name}`)

        const namePhotographer = document.createElement('h2')
        namePhotographer.textContent = name     

        const location = document.createElement('p')
        location.classList.add('location')

        location.textContent = city + ', ' + country
        const tags = document.createElement('p')

        tags.classList.add('tags')
        tags.textContent = tagline

        const priceByDay = document.createElement('p')
        priceByDay.classList.add('price')
        priceByDay.textContent = price + '€/jour'

        linkProfile.appendChild(article)
        article.appendChild(img)
        article.appendChild(namePhotographer)
        article.appendChild(location)
        article.appendChild(tags)
        article.appendChild(priceByDay)
        
        return (linkProfile)
    }
    return { name, picture, getUserCardDOM}
}