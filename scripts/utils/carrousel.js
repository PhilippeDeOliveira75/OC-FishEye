let galleryCardArray

let index

//Création du carrousel

export function displayCarrousel() {

    const carrouselContainer = '#carrouselContainer'

    if (document.querySelector('#carrousel')) document.querySelector('#carrousel').remove()

    const carrousel = document.createElement('div')
    carrousel.setAttribute("id", 'carrousel')
    
    const closeIcon = document.createElement('img')
    closeIcon.setAttribute("src", './assets/icons/closecarrousel.svg')
    closeIcon.setAttribute("alt", 'close carrousel')
    closeIcon.classList.add('close-carrousel')
    closeIcon.setAttribute("aria-label", 'fermer le carrousel')
    closeIcon.setAttribute("tabindex", "0")

    const chevronLeft = document.createElement('img')
    chevronLeft.setAttribute("src", './assets/icons/chevronleft.svg')
    chevronLeft.setAttribute("alt", 'chevronleft')
    chevronLeft.setAttribute("aria-label", 'media précédent')
    chevronLeft.setAttribute("tabindex", "0")
    chevronLeft.classList.add('chevron-left')

    const mediaContainer = document.createElement('div')
    mediaContainer.classList.add('media-container')

    const imageCarrousel = document.createElement('img')
    imageCarrousel.setAttribute("src", '')
    imageCarrousel.setAttribute("alt", '')
    imageCarrousel.setAttribute("aria-label", 'image carrousel')
    imageCarrousel.setAttribute("tabindex", "0")
    imageCarrousel.classList.add('image-carrousel')

    const videoCarrousel = document.createElement('video')
    videoCarrousel.setAttribute("src", '')
    videoCarrousel.setAttribute("alt", '')
    videoCarrousel.setAttribute('controls',true)
    videoCarrousel.setAttribute("aria-label", 'video carrousel')
    videoCarrousel.setAttribute("tabindex", "0")
    videoCarrousel.classList.add('image-carrousel')

    const mediaTitle = document.createElement('h2')
    mediaTitle.classList.add('media-title')
    
    const chevronRight = document.createElement('img')
    chevronRight.setAttribute("src", './assets/icons/chevronright.svg')
    chevronRight.setAttribute("alt", 'chevronright')
    chevronRight.setAttribute("aria-label", 'media suivant')
    chevronRight.setAttribute("tabindex", "0")
    chevronRight.classList.add('chevron-right')

    document.querySelector(carrouselContainer).appendChild(carrousel)
    carrousel.appendChild(mediaContainer)
    mediaContainer.appendChild(imageCarrousel)
    mediaContainer.appendChild(videoCarrousel)
    mediaContainer.appendChild(mediaTitle)
    carrousel.appendChild(closeIcon)
    carrousel.appendChild(chevronLeft)
    carrousel.appendChild(chevronRight)

    galleryCardArray = document.querySelectorAll('.galleryCardImg')

    //fonction pour afficher le carrousel au clic ou press entrer sur la bonne image (on garde l'index de l'image cliquée)

    galleryCardArray.forEach((e, i) => {
        const main = document.querySelector('main')
        const header = document.querySelector('header')
        e.addEventListener('click', () => {
          index = i
          header.style.display = 'none'
          main.style.display = 'none'
          carrousel.style.display = 'flex'
          sortMediaBy(e, imageCarrousel, videoCarrousel)
        })
      
        e.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            index = i
            header.style.display = 'none'
            main.style.display = 'none'
            carrousel.style.display = 'flex'
            sortMediaBy(e, imageCarrousel, videoCarrousel)
          }
        })
    })

    close(closeIcon, carrousel)
    previous(chevronLeft, imageCarrousel, videoCarrousel)
    next(chevronRight, imageCarrousel, videoCarrousel)
}



function sortMediaBy(e, image, video, title) {
    let media = e.closest('.galleryCard').querySelector('.galleryCardImg')

    if (media.classList.contains('galleryCardVideo')){
        video.src = media.src
        video.style.display = 'block'
        image.style.display = 'none'

        // Lecture ou pause d'une vidéo avec la barre espace
        document.addEventListener('keydown', event => {
            if (event.key === ' ') {
                if (video.paused) {
                    video.play()
                } else {
                    video.pause()
                }
            }
        })
        
    } else {
        image.src = media.src
        image.style.display = 'block'
        video.style.display = 'none'
    }
    const mediaTitle = document.querySelector('.media-title')
    mediaTitle.textContent = title ? title : e.closest('.galleryCard').querySelector('h2').textContent
}

// Fermer le carrousel au clic, echap ou tabulation + entrée sur l'icone close

function close (closeIcon, carrousel) {
    const main = document.querySelector('main')
    const header = document.querySelector('header')
    closeIcon.addEventListener('click', () => {
        carrousel.style.display = 'none'
        header.style.display = 'block'
        main.style.display = 'block'
    })

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            carrousel.style.display = 'none'
            header.style.display = 'block'
            main.style.display = 'block'
        } else if (event.key === 'Enter' && document.activeElement === closeIcon) {
            carrousel.style.display = 'none'
            header.style.display = 'block'
            main.style.display = 'block'
        }
    })
}

// Navigation dans le carrousel au click, flêche, ou tabulation + entrée vers l'ement précédent

function previous (a, b, c) {
    a.addEventListener('click', () => {
        index--
        if (index < 0) {
            index = galleryCardArray.length - 1
        }
        sortMediaBy (galleryCardArray [index], b, c)
    })

    document.addEventListener('keydown', event => {
        if (event.key === 'ArrowLeft') {
            index--
            if (index < 0) {
                index = galleryCardArray.length - 1
            }
            sortMediaBy (galleryCardArray [index], b, c)
        } else if (event.key === 'Enter' && document.activeElement === a) {
            index--
            if (index < 0) {
                index = galleryCardArray.length - 1
            }
            sortMediaBy (galleryCardArray [index], b, c)
        }
    })
}

// Navigation dans le carrousel au click, flêche, ou tabulation + entrée vers l'ement suivant

function next (a, b, c) {
    a.addEventListener('click', () => {
        index++
        if (index > galleryCardArray.length - 1) {
            index = 0
        }
        sortMediaBy (galleryCardArray [index], b, c)
    })

    // Ajouter un écouteur d'événements "keydown" pour la touche "Flèche droite"
    document.addEventListener('keydown', event => {
        if (event.key === 'ArrowRight') {
            index++
            if (index > galleryCardArray.length - 1) {
                index = 0
            }
            sortMediaBy (galleryCardArray [index], b, c)
        } else if (event.key === 'Enter' && document.activeElement === a) {
            index++
            if (index > galleryCardArray.length - 1) {
                index = 0
            }
            sortMediaBy (galleryCardArray [index], b, c)
        }
    })
}