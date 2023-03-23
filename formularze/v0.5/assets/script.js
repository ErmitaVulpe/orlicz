let login = localStorage.getItem("loggedInAs");

if (login === null) {
    localStorage.setItem("loggedInAs", "");
    login = ""
}

if (localStorage.getItem("db-users") === null || localStorage.getItem("db-users") === "") {
    localStorage.setItem("db-users", JSON.stringify({
        "krzysztof.kononowicz@gmail.com": {"password": "2137", "username": "Konon", "favourites": ["Kalkulator emerytury"], "data": {"name": "Krzysztof", "lastname": "Kononowicz", "address": "Szkolna 17", "pesel": "", "nip": ""}},
        "w@w.w": { "password": "w", "username": "wwwww", "favourites": [], "data": {"name": "", "lastname": "", "address": "", "pesel": "", "nip": ""}}
        }
    ));
}

if (login == "") {
    window.location.replace("./login/index.html");
} else {
    window.location.replace("./home/index.html");
}