
import { mediaFactory } from "../factory/mediaFactory.js"
import { media } from "../pages/photographer.js"
import { displayCarrousel } from "./carrousel.js"

// Fonction qui affiche la galerie à l'ouverture de la page

export function filterGallery() {

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

// Fonction qui permet de trier la galerie
  
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

    mediaFactory(sortedArray)
    displayCarrousel()
}

