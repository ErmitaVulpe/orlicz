export function logout() {
    localStorage.setItem("loggedInAs", "");
    window.location.replace("../login");
}

export function dbCheck() {
    if (localStorage.getItem("loggedInAs") == null ||
        localStorage.getItem("db-users") == null ||
        localStorage.getItem("db-calcs") == null) {
        window.location.replace("..");
    }
}

export function captcha() {
    let output = true;
    let rand = ""
    let input = ""
    let incorrectText = ""

    while (output) {
        rand = Math.floor(Math.random() * Math.floor(1000000)).toString();
        input = prompt(`Symulacja potwierdzenia Emaila\n${incorrectText}Kod weryfikacji: ${rand}\nWpisz kod weryfikacji:`)

        if (input === rand) {
            return output
        } else {
            incorrectText = "Podano nieprawidłowy kod. Spróbuj jeszcze raz\n"
        }
    }
}