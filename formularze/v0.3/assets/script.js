let login = localStorage.getItem("loggedInAs");

if (login === null) {
    localStorage.setItem("loggedInAs", "");
    login = ""
}

if (localStorage.getItem("db-users") === null || localStorage.getItem("db-users") === "") {
    localStorage.setItem("db-users", JSON.stringify({   "krzysztof.kononowicz@gmail.com": {"password": "2137", "username": "Konon", "favourites": ["Kalkulator emerytury"]},
                                                        "w@w.w": { "password": "w", "username": "wwwww", "favourites": [] }
}));
}

let dbCalcs = localStorage.getItem("db-calcs");
if (dbCalcs === null) {
    localStorage.setItem("db-calcs", "");
}

if (login == "") {
    window.location.replace("./login");
} else {
    window.location.replace("./home");
}