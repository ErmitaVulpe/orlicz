function logout() {
    localStorage.setItem("loggedInAs", "");
    window.location.replace("../login/index.html");
};

function dbCheck() {
    if (localStorage.getItem("loggedInAs") == null ||
    localStorage.getItem("db-users") == null ||
    localStorage.getItem("db-users") == "") {
        window.location.replace("../index.html");
    };

    if (!Object.keys(JSON.parse(localStorage.getItem("db-users"))).includes(localStorage.getItem("loggedInAs"))) {
        localStorage.setItem("loggedInAs", "");
    };
};
dbCheck();
addEventListener('storage', () => {
    dbCheck();
});

function captcha() {
    let output = true;
    let rand = "";
    let input = "";
    let incorrectText = "";

    while (output) {
        rand = Math.floor(Math.random() * Math.floor(1000000)).toString();
        input = prompt(`Symulacja potwierdzenia Emaila\n${incorrectText}Kod weryfikacji: ${rand}\nWpisz kod weryfikacji:`);

        if (input === rand) {
            return output
        } else {
            incorrectText = "Podano nieprawidłowy kod. Spróbuj jeszcze raz\n";
        };
    };
};
