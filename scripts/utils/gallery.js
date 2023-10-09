import { card } from "../class/card.js"
import { media } from "../pages/photographer.js"
import { displayCarrousel } from "./carrousel.js"

export function displayGallery(media) {
  document.querySelectorAll('.galleryCard').forEach(e => e.remove())

  media.forEach(data => {
      let tmp = new card(data)
      tmp.displayCard()
      tmp.updateLike()
  });

  document.querySelectorAll('.choice').forEach(e => {
      e.addEventListener('click', () => {
          sortMediaBy(e.textContent)
      })

      e.addEventListener('keydown', event => {
          if (event.key === 'Enter') {
              sortMediaBy(e.textContent)
          }
      })
  })
}
  
export function sortMediaBy(value) {
    
    let sortedArray = []
  
    if (value === "Titre") {
      sortedArray = media.sort(function compare(a, b) {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
        return 0
      })
    }
  
    if (value === "Popularité") {
      sortedArray = media.sort(function compare(a, b) {
        if (Number(a.likes) > Number(b.likes)) return -1
        if (Number(a.likes) < Number(b.likes)) return 1
        return 0
      })
    }
  
    if (value === "Date") {
      sortedArray = media.sort(function compare(a, b) {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return dateB - dateA
      })
    }

    displayGallery(sortedArray)
    displayCarrousel()
  }

