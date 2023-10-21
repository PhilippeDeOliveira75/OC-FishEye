//fonction de calcul du nombre de likes total photographer.js

export function totalLikes() {

    document.querySelectorAll('#totalLikes').forEach(e => e.remove())

    let totalLikes = 0;
    document.querySelectorAll('#like')
    .forEach(e => totalLikes += Number(e.textContent))

    const likeSum = document.createElement('p')
    likeSum.textContent = totalLikes
    likeSum.setAttribute("id", "totalLikes")

    const likesNumberAndHeart = document.querySelector('.likes-number-and-heart')
    likesNumberAndHeart.appendChild(likeSum)

    return totalLikes;

}


//Création du bottomBanner photographer.js

export function bottomBanner(data) {

    const mainPhotographer = document.getElementById('main')
  
    const bottomBanner = document.createElement('div')
    bottomBanner.classList.add('bottom-banner')
    mainPhotographer.appendChild(bottomBanner)
  
    const likesNumberAndHeart = document.createElement('div')
    likesNumberAndHeart.classList.add('likes-number-and-heart')
    bottomBanner.appendChild(likesNumberAndHeart);
  
    const heartImg = document.createElement('img')
    heartImg.setAttribute("src", "assets/icons/blackheart.svg")
    heartImg.setAttribute("alt", "likes")
    likesNumberAndHeart.appendChild(heartImg)

    const pricePerDay = document.createElement('p')
    pricePerDay.classList.add('price-per-day')
    pricePerDay.textContent = `${data.price} $ / jour`
    bottomBanner.appendChild(pricePerDay)

    totalLikes()

}
  
