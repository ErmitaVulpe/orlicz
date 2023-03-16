const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


// for scroll menu

dropdown = document.getElementById("dropdown")
dropdown.addEventListener("mouseenter", () => {
    document.querySelector(".dropdown-title").querySelector("span").innerText = "Wybierz samolot ▲"
    document.querySelector(':root').style.setProperty('--dropdown-height', document.querySelector(".dropdown-content").scrollHeight + "px");
})

dropdown = document.getElementById("dropdown")
dropdown.addEventListener("mouseleave", () => {
    document.querySelector(".dropdown-title").querySelector("span").innerText = "Wybierz samolot ▼"
    document.querySelector(':root').style.setProperty('--dropdown-height', "0");
})
