let login = localStorage.getItem("loggedInAs");

if (login === null) {
    localStorage.setItem("loggedInAs", "");
    login = ""
}

if (localStorage.getItem("db-users") === null || localStorage.getItem("db-users") === "") {
    localStorage.setItem("db-users", JSON.stringify({
        "krzysztof.kononowicz@gmail.com": {"password": "2137", "username": "Konon", "favourites": ["Kalkulator emerytury"]},
        "w@w.w": { "password": "w", "username": "wwwww", "favourites": [] }
        }
    ));
}

if (login == "") {
    window.location.replace("./login/index.html");
} else {
    window.location.replace("./home/index.html");
}