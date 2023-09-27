import { dropDown } from "../utils/dropDownSort.js";
import { bottomBanner } from "../utils/bottomBanner.js";
import { getPhotographer, getMedia} from "../utils/data.js";
import { header } from "../templates/headerPhotographer.js";
import { displayGallery } from "../utils/gallery.js";


export let photograph = await getPhotographer()
export let media = await getMedia(photograph.id)


async function init () {
    header(photograph)
    dropDown()
    displayGallery(media)
    bottomBanner(photograph)
}

init()