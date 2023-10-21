import { dropDown } from "../utils/dropDownSort.js"
import { bottomBanner } from "../utils/bottomBanner.js"
import { getPhotographer, getMedia} from "../utils/data.js"
import { header } from "../templates/headerPhotographer.js"
import { displayCarrousel } from "../utils/carrousel.js"
import { mediaFactory } from "../factory/mediaFactory.js"
import { filterGallery } from "../utils/gallery.js"



export let photograph = await getPhotographer()
export let media = await getMedia(photograph.id)

// Initialisation de la page photographer.js
async function init () {
    header(photograph)
    dropDown()
    mediaFactory(media)
    bottomBanner(photograph)
    displayCarrousel()
    filterGallery()
}   

init()