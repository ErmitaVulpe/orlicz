dropdown = document.getElementById("dropdown")
dropdown.addEventListener("mouseenter", () => {
    document.querySelector(".dropdown-title").querySelector("span").innerText = "Wybierz samolot ▲"
    document.querySelector(':root').style.setProperty('--dropdown-height', document.querySelector(".dropdown-content").scrollHeight + "px");
    // document.querySelector(".dropdown-content").classList.add("dropdown-content-active")
})

dropdown = document.getElementById("dropdown")
dropdown.addEventListener("mouseleave", () => {
    document.querySelector(".dropdown-title").querySelector("span").innerText = "Wybierz samolot ▼"
    document.querySelector(':root').style.setProperty('--dropdown-height', "0");
    // document.querySelector(".dropdown-content").classList.remove("dropdown-content-active")
})
