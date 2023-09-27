export function dropDown (){
    const menu = document.querySelector('.select-choice')
    const chevron = document.querySelector('.chevron')
    const dropDown = document.querySelector('.active-choice')
    const selected = document.querySelector('.active-choice span')
    const optionArray = document.querySelectorAll('.choice')
    const dropdownSelect = document.querySelector('.active-choice select');

    dropDown.addEventListener('mouseover', () => {
        
        chevron.classList.add('active')
        menu.classList.add('active')
        optionArray.forEach(e => {
            if(selected.textContent === e.textContent){
                e.style.display = 'none'
                }
            else{
                e.style.display = 'block'
            }
            selectedClick(e, selected, menu,chevron)
        })

    })

    dropDown.addEventListener('click', () => {
        menu.classList.remove('active')
        console.log('click')
    })
    document.querySelector('.filter-choice').addEventListener('mouseleave', () => {
        chevron.classList.remove('active')
        menu.classList.remove('active')
    })
}

function selectedClick (e, button, menu, chevron){
    e.addEventListener('click', () => {
        button.textContent = e.textContent
        chevron.classList.remove('active')
        menu.classList.remove('active')
    })
}

dropDown()