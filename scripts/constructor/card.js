import { totalLikes } from "../utils/bottomBanner.js"

// Mise en place de la classe card

export class card {
    constructor (dataCard) {
        this.id = dataCard.photographerId
        this.dataCard = dataCard
        this.path = dataCard.image ? dataCard.image : dataCard.video
        this.idCard = dataCard.id
        this.title = dataCard.title
        this.likes = dataCard.likes
        this.likeCount = this.likeCount()
        this.iconHeart = this.iconHeart()
        this.article = this.createCard()
    }

    // Création de l'élément nombre de likes

    likeCount () {
        const cardLike = document.createElement('p')
        cardLike.setAttribute("id", "like" )
        cardLike.setAttribute("aria-label", `${this.likes} likes`)
        cardLike.setAttribute("tabindex", "0")
        cardLike.textContent = this.likes

        return cardLike
    }

    // Icone coeur

    iconHeart () {
        const cardIconLike = document.createElement('img')
        cardIconLike.setAttribute("id", "heart" )
        cardIconLike.setAttribute("src", "assets/icons/heart.svg")
        cardIconLike.setAttribute("alt", "likes")
        cardIconLike.setAttribute("aria-label", `Ajouter ou retirer un like`)
        cardIconLike.setAttribute("tabindex", "0")

        return cardIconLike
    }

    // Création de la card

    createCard () {

        const galleryCard = document.createElement('article')
        galleryCard.setAttribute("id", this.idCard)
        galleryCard.classList.add('galleryCard')
        gallery.appendChild(galleryCard)
                    
        if (this.dataCard.image) {
            const cardImg = document.createElement('img') 
            cardImg.setAttribute("src", `assets/gallery/${this.id}/${this.path}`)
            cardImg.setAttribute("alt", this.title)
            cardImg.setAttribute("aria-label", this.title)
            cardImg.setAttribute("tabindex", "0")
            cardImg.classList.add('galleryCardImg')
            galleryCard.appendChild(cardImg)
    
        } else if (this.dataCard.video) {
            const cardVideo = document.createElement('video');
            cardVideo.setAttribute("src", `assets/gallery/${this.id}/${this.path}`);
            cardVideo.setAttribute("alt", this.title);
            cardVideo.setAttribute("aria-label", this.title)
            cardVideo.setAttribute("tabindex", "0")
            cardVideo.classList.add('galleryCardImg')
            cardVideo.classList.add('galleryCardVideo')
            galleryCard.appendChild(cardVideo);
        }
    
        const titleAndLike = document.createElement('div')
        titleAndLike.classList.add('titleAndLike')
        galleryCard.appendChild(titleAndLike)
            
        const cardTitle = document.createElement('h2')
        cardTitle.textContent = this.title
        titleAndLike.appendChild(cardTitle)
    
        const likeAndHeart = document.createElement('div')
        likeAndHeart.classList.add('likeAndHeart')
        titleAndLike.appendChild(likeAndHeart)
    

        likeAndHeart.appendChild(this.likeCount);
        likeAndHeart.appendChild(this.iconHeart);
        
        return galleryCard

    }

    displayCard () {
        const gallery = document.getElementById('gallery')
        gallery.appendChild(this.article)
    }

    // Fonction qui permet de mettre à jour le nombre de likes au click et touche entrée

    updateLike () {
        this.iconHeart.addEventListener('click', ()  => {
            if (this.iconHeart.classList.contains('liked')) {
                this.likes--;
                this.likeCount.textContent = this.likes;
                this.iconHeart.classList.remove('liked');
            } else {
                this.likes++;
                this.likeCount.textContent = this.likes;
                this.iconHeart.classList.add('liked');
            }
            totalLikes()
        })
    
        this.iconHeart.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                if (this.iconHeart.classList.contains('liked')) {
                    this.likes--;
                    this.likeCount.textContent = this.likes;
                    this.iconHeart.classList.remove('liked');
                } else {
                    this.likes++;
                    this.likeCount.textContent = this.likes;
                    this.iconHeart.classList.add('liked');
                }
                totalLikes()
            }
        })
    }
}