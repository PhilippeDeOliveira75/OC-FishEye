function photographerTemplate(data) {

    const { name, portrait, city, tagline, price, id, country } = data;
    const picture = `assets/photosID/${portrait}`;

    function getUserCardDOM() {
        
        const article = document.createElement('article');

        const linkProfile = document.createElement('a');
        linkProfile.setAttribute('href', './photographer.html?id=' + id);

        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);

        const namePhotographer = document.createElement('h2');
        namePhotographer.textContent = name;

        const location = document.createElement('p');
        location.classList.add('location');

        location.textContent = city + ', ' + country;
        const tags = document.createElement('p');

        tags.classList.add('tags');
        tags.textContent = tagline;

        const priceByDay = document.createElement('p');
        priceByDay.classList.add('price');
        priceByDay.textContent = price + '€/jour';

        article.appendChild(linkProfile);
        linkProfile.appendChild(img);
        linkProfile.appendChild(namePhotographer);
        article.appendChild(location);
        article.appendChild(tags);
        article.appendChild(priceByDay);
        
        return (article);
    }
    return { name, picture, getUserCardDOM }
}