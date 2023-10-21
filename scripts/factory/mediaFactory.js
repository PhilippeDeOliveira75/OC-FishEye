import { card } from "../constructor/card.js";

// Fonction qui affiche la galerie à l'ouverture de la page

export function mediaFactory(media) {
    document.querySelectorAll('.galleryCard').forEach(e => e.remove())
    
    media.forEach(data => {
        if (data.image) {
            let tmp = new card(data, 'image')
            tmp.displayCard()
            tmp.updateLike()

        }else if (data.video) {
            let tmp = new card(data, 'video')
            tmp.displayCard()
            tmp.updateLike()
        }
    })
}
