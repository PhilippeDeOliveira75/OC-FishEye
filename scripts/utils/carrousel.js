let galleryCardArray

let index 

export function displayCarrousel() {

    if (document.querySelector('#carrousel')) document.querySelector('#carrousel').remove()

    const carrousel = document.createElement('div')
    carrousel.setAttribute("id", 'carrousel')
    document.querySelector('main').appendChild(carrousel)
    

    const closeIcon = document.createElement('img')
    closeIcon.setAttribute("src", './assets/icons/closecarrousel.svg')
    closeIcon.setAttribute("alt", 'close carrousel')
    closeIcon.classList.add('close-carrousel')

    const chevronLeft = document.createElement('img')
    chevronLeft.setAttribute("src", './assets/icons/chevronleft.svg')
    chevronLeft.setAttribute("alt", 'chevronleft')

    const mediaContainer = document.createElement('div')
    mediaContainer.classList.add('medai-container')

    const imageCarrousel = document.createElement('img')
    imageCarrousel.setAttribute("src", '')
    imageCarrousel.setAttribute("alt", '')
    imageCarrousel.classList.add('image-carrousel')

    const videoCarrousel = document.createElement('video')
    videoCarrousel.setAttribute("src", '')
    videoCarrousel.setAttribute("alt", '')
    videoCarrousel.setAttribute('controls',true)
    videoCarrousel.classList.add('image-carrousel')
    
    const chevronRight = document.createElement('img')
    chevronRight.setAttribute("src", './assets/icons/chevronright.svg')
    chevronRight.setAttribute("alt", 'chevronright')

    document.querySelector('main').appendChild(carrousel)
    carrousel.appendChild(mediaContainer)
    mediaContainer.appendChild(imageCarrousel)
    mediaContainer.appendChild(videoCarrousel)
    carrousel.appendChild(closeIcon)
    carrousel.appendChild(chevronLeft)
    carrousel.appendChild(chevronRight)

    galleryCardArray = document.querySelectorAll('.galleryCard')


    chevronLeft.addEventListener('click', () => {
        index--
        console.log(index)
        if (index < 0) {
            index = galleryCardArray.length - 1
        }
        sortMediaBy (galleryCardArray [index], videoCarrousel, imageCarrousel)
    })

    chevronRight.addEventListener('click', () => {
        index++
        console.log(index)
        if (index > galleryCardArray.length - 1) {
            index = 0
        }
        sortMediaBy (galleryCardArray [index], videoCarrousel, imageCarrousel)

    })

    closeIcon.addEventListener('click', () => {
        carrousel.style.display = 'none'
    })
    
    galleryCardArray.forEach((e, i) => e.addEventListener('click', () => {

        index = i

        carrousel.style.display = 'block'

        sortMediaBy(e, videoCarrousel, imageCarrousel)
    }))
}

function sortMediaBy(e, video, image) {
    let media = e.closest('.galleryCard').querySelector('.galleryCardImg')

    if (media.classList.contains('galleryCardVideo')){
        video.src = media.src
        video.style.display = 'block'
        image.style.display = 'none'
    } else {
        image.src = media.src
        image.style.display = 'block'
        video.style.display = 'none'
    }
}