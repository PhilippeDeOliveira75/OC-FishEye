async function getData () {
    let data = await fetch("../../data/photographers.JSON")
          .then((res) => res.json())
          .then((data) => data)
          return data
}

export async function getPhotographer () {

    let data = await getData ()

    // Catch URL
    const url = new URL(window.location.href)
    // Get params of URL
    const params = new URLSearchParams(url.search)
    // Get ID value
    const photographerId = params.get('id')

    let photographerData = data.photographers.filter((photographer) => photographer.id == photographerId)[0]
    return photographerData
}

export async function getMedia (id) {

    let data = await getData()

    let mediaData = data.media.filter(md => md.photographerId == id)
    return mediaData
}