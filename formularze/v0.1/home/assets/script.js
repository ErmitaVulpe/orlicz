import { logout } from "../../assets/utils.js";

const db = JSON.parse(localStorage.getItem("db-users"));
const email = localStorage.getItem("loggedInAs");
const favourites = db[email]["favourites"];

if (email == "") {
    window.location.replace("../login");
} else if (!Object.keys(db).includes(email)) {
    localStorage.setItem("loggedInAs", "")
    window.location.replace("../login");
}

window.addEventListener("load", function () {
    document.getElementById("logout").addEventListener("click", logout);

    document.getElementById("title-welcome-text").innerText += ` ${db[email]["username"]}!`;
});


const calcsTemplateDB = {
    "Matematyczne": [
        "Kalkulator prosty",
        "Kalkulator naukowy",
        "Kalkulator ułamków",
        "Kalkulator procentowy",
        "Generator liczb losowych",
        "Kalkulator trójkąta",
    ],
    "Finansowe": [
        "Kalkulator hipoteczny",
        "Kalkulator pożyczek",
        "Kalkulator kredytu samochodowego",
        "Kalkulator odsetek",
        "Kalkulator płatności",
        "Kalkulator emerytury",
        "Kalkulator amortyzacji",
        "Kalkulator inwestycji",
        "Kalkulator inflacji",
        "Kalkulator finansowy",
        "Kalkulator podatku dochodowego",
        "Kalkulator odsetek składanych",
        "Kalkulator wynagrodzeń",
        "Kalkulator stóp procentowych",
        "Kalkulator podatku od sprzedaży",
    ],
    "Fitness": [
        "Kalkulator BMI",
        "Kalkulator kalorii",
        "Kalkulator tkanki tłuszczowej",
        "Kalkulator BMR",
        "Kalkulator idealnej wagi",
        "Kalkulator tempa",
        "Kalkulator ciąży",
        "Kalkulator poczęcia ciąży",
        "Kalkulator terminu płatności",
    ],
    "Inne": [
        "Kalkulator wieku",
        "Kalkulator daty",
        "Kalkulator czasu",
        "Kalkulator godzin",
        "Kalkulator GPA",
        "Kalkulator ocen",
        "Kalkulator betonu",
        "Kalkulator podsieci",
        "Kalkulator konwersji",
        "Generator hasła",
    ]
};


const notFavouritesElement = document.getElementById("not-favourites");

Object.keys(calcsTemplateDB).forEach(title => {
    notFavouritesElement.innerHTML += `<div class="home-hr"><hr><span>${title}</span></div>`;

    let temp = `<div class="home-grid-container">`;

    calcsTemplateDB[title].forEach(element => {
        temp += `
        <div class="element"><span class="element-title">${element}</span>
            <div class="star-container">
                <svg class="star" width="100" height="100" viewBox="-50 -50 100 100">
                    <path class="star-outside" fill-rule="evenodd" clip-rule="evenodd" d="M54.787 3.66849C53.3394 -1.03837 46.6766 -1.03838 45.2289 3.66847L37.0442 30.2803C36.3976 32.3825 34.4531 33.8154 32.2536 33.8104L5.09869 33.7481C0.301306 33.7372 -1.75656 39.8333 2.06598 42.7321L24.4731 59.7245C26.1521 60.9977 26.8526 63.187 26.2247 65.1984L17.7206 92.4403C16.2671 97.0964 21.6589 100.865 25.5323 97.9008L46.9691 81.4941C48.7625 80.1215 51.2534 80.1215 53.0468 81.4941L74.4836 97.9008C78.3571 100.865 83.7489 97.0964 82.2954 92.4403L73.7913 65.1984C73.1633 63.187 73.8639 60.9977 75.5429 59.7245L97.95 42.7321C101.773 39.8333 99.7147 33.7372 94.9173 33.7481L67.7623 33.8104C65.5629 33.8154 63.6184 32.3826 62.9718 30.2803L54.787 3.66849ZM50.9632 15.4015C50.6723 14.4628 49.3437 14.4628 49.0528 15.4015L41.2804 40.4847C41.1507 40.9034 40.7635 41.1888 40.3252 41.1888H15.076C14.1188 41.1888 13.7085 42.4041 14.47 42.9842L34.9774 58.6077C35.3114 58.8621 35.4508 59.2981 35.3266 59.6991L27.5129 84.9156C27.2248 85.8453 28.2999 86.5969 29.0741 86.007L49.402 70.5204C49.76 70.2476 50.256 70.2476 50.614 70.5204L70.9419 86.007C71.7162 86.5969 72.7912 85.8453 72.5031 84.9156L64.6894 59.6991C64.5652 59.2981 64.7046 58.8621 65.0386 58.6077L85.5461 42.9842C86.3075 42.4041 85.8972 41.1888 84.94 41.1888H59.6908C59.2525 41.1888 58.8653 40.9034 58.7356 40.4847L50.9632 15.4015Z" fill="#C7C7C7" />
                    <path class="star-inside ${favourites.includes(element) ? "active" : ""}" d="M49.0462 7.02716C49.3401 6.09451 50.6599 6.09451 50.9538 7.02716L60.5563 37.5042C60.6875 37.9205 61.0735 38.2037 61.5101 38.2037H92.6483C93.6096 38.2037 94.0172 39.4276 93.2479 40.0039L68.0041 58.9178C67.6644 59.1723 67.5224 59.6137 67.65 60.0186L77.2797 90.5818C77.5717 91.5086 76.5039 92.2653 75.7263 91.6826L50.5996 72.8566C50.2442 72.5903 49.7558 72.5903 49.4004 72.8566L24.2737 91.6826C23.4961 92.2653 22.4283 91.5086 22.7203 90.5818L32.35 60.0186C32.4776 59.6137 32.3356 59.1723 31.9959 58.9178L6.75208 40.0039C5.9828 39.4276 6.39044 38.2037 7.3517 38.2037H38.4899C38.9265 38.2037 39.3125 37.9205 39.4437 37.5042L49.0462 7.02716Z" fill="#E6C200" />
                </svg>
            </div>
        </div>`
    });

    temp += `</div>`

    notFavouritesElement.innerHTML += temp;
});



function makeShitWork(element) {
    element.addEventListener("mouseenter", function () {
        element.classList.add("active");
    });

    element.addEventListener("mouseleave", function () {
        element.classList.remove("active");
    });
};

/* Input is the .element title */
function copyANode(title) {
    if (document.getElementById("favourites").innerHTML === "") {
        document.getElementById("favourites").innerHTML += `
        <div class="home-hr"><hr><span>Ulubione</span></div>
        <div class="home-grid-container" id="favourites-home-grid-container"></div>`;
    };

    const favouritesHomeGridContainer = document.getElementById("favourites-home-grid-container");

    let newNode = calcsBackedDB[title][0].cloneNode(true)
    favouritesHomeGridContainer.insertBefore(newNode, favouritesHomeGridContainer.getElementsByClassName("element")[0]);
    calcsBackedDB[title].push(newNode);

    makeTheFuckingStarWork(newNode.getElementsByClassName("star-container")[0]);

    return newNode
}

function makeTheFuckingStarWork(star) {
    star.addEventListener("click", function (event) {
        let elementTitle = star.parentElement.getElementsByClassName("element-title")[0].innerText;

        if (calcsBackedDB[elementTitle].length === 1) {
            this.getElementsByClassName("star-inside")[0].classList.add("active");
            let thisTitle = this.parentElement.getElementsByClassName("element-title")[0].innerText;
            makeShitWork(copyANode(thisTitle));

            /* New element still has a star shown bc it didnt encounter mouseleave event */
            calcsBackedDB[thisTitle][1].classList.remove("active");

            favourites.push(thisTitle);
            localStorage.setItem("db-users", JSON.stringify(db));
        } else if (calcsBackedDB[elementTitle].length === 2) {
            calcsBackedDB[elementTitle][1].parentElement.removeChild(calcsBackedDB[elementTitle][1])
            calcsBackedDB[elementTitle].splice(1, 1);
            favourites.splice(favourites.indexOf(elementTitle), 1);

            calcsBackedDB[elementTitle][0].getElementsByClassName("star-inside")[0].classList.remove("active");

            localStorage.setItem("db-users", JSON.stringify(db));

            // checkForFavourites()
            if (favourites.length === 0) {
                document.getElementById("favourites").innerHTML = "";
            }
        }
        event.stopPropagation();
    });
};


const calcsBackedDB = {};

const elements = Array.from(document.getElementById("not-favourites").getElementsByClassName("element"));
elements.forEach(element => {
    makeShitWork(element);

    calcsBackedDB[element.getElementsByClassName("element-title")[0].innerText] = [element]
});


const favouritesElement = document.getElementById("favourites");

if (favourites.length !== 0) {

    favouritesElement.innerHTML += `
            <div class="home-hr"><hr><span>Ulubione</span></div>
            <div class="home-grid-container" id="favourites-home-grid-container"></div>`;

    favourites.forEach(favourite => {
        makeShitWork(copyANode(favourite));
    });
};


const stars = Array.from(document.getElementById("not-favourites").getElementsByClassName("star-container"));
stars.forEach(star => {
    makeTheFuckingStarWork(star);
});