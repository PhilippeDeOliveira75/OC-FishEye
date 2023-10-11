export function dropDown (){
    const menu = document.querySelector('.select-choice')
    const chevron = document.querySelector('.chevron')
    const dropDown = document.querySelector('.active-choice')
    const selected = document.querySelector('.active-choice span')
    const optionArray = document.querySelectorAll('.choice')

    dropDown.addEventListener('click', () => { 
        chevron.classList.add('active')
        menu.classList.add('active')
        optionArray.forEach(e => {
            if(selected.textContent === e.textContent){
                e.style.display = 'none'
                }
            else{
                e.style.display = 'block'
            }
            e.setAttribute('tabindex', '0')
            selectedClick(e, selected, menu,chevron)
            e.addEventListener('keydown', event => { 
                if (event.key === 'Tab' && e === optionArray[optionArray.length - 1]) {
                    optionArray[0].focus() 
                }
            })
        })
    })
    
}

function selectedClick (e, button, menu, chevron){

    e.addEventListener('click', () => {
        button.textContent = e.textContent
        chevron.classList.remove('active')
        menu.classList.remove('active')
    })

    e.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            button.textContent = e.textContent
            chevron.classList.remove('active')
            menu.classList.remove('active')

        }
    })
}

dropDown()