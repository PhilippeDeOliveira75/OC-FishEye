const carrousel = document.querySelector('#carrousel')

const closeIcon = document.createElement('img')
closeIcon.setAttribute("src", './assets/icons/closecarrousel.svg')
closeIcon.setAttribute("alt", 'close carrousel')
closeIcon.classList.add('close-carrousel')

const chevronLeft = document.createElement('img')
chevronLeft.setAttribute("src", './assets/icons/chevronleft.svg')
chevronLeft.setAttribute("alt", 'chevronleft')

const imageCarrousel = document.createElement('img')
imageCarrousel.setAttribute("src", '')
imageCarrousel.setAttribute("alt", '')
imageCarrousel.classList.add('image-carrousel')

const chevronRight = document.createElement('img')
chevronRight.setAttribute("src", './assets/icons/chevronright.svg')
chevronRight.setAttribute("alt", 'chevronright')

carrousel.appendChild(closeIcon)
carrousel.appendChild(chevronLeft)
carrousel.appendChild(imageCarrousel)
carrousel.appendChild(chevronRight)


export function displayCarrousel(imageUrl) {

    document.querySelectorAll('.galleryCard').forEach((e) => {
        e.addEventListener('click', () => {
            const imageUrl = e.querySelector('img').src
            displayCarrousel(imageUrl)
            carrousel.style.display = 'block'
        })
    })

    if (imageUrl) {
        imageCarrousel.src = imageUrl
    }
}


export function closeCarrousel () {

    closeIcon.addEventListener('click', () => {
        carrousel.style.display = 'none'
    })
}

export function navigationCarrousel () { 
    document.querySelectorAll('.galleryCard').forEach((e, index) => {
        console.log(index);
        console.log(e);
        
    })
}
