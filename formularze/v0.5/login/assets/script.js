if (localStorage.getItem("loggedInAs") != "") {
    window.location.replace("../home/index.html");
}

// // import "../../assets/utils";
// import { dbCheck, captcha } from "../../assets/utils.js";
// dbCheck()

const RegExForMail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

function popup(text) {
    document.getElementById("popup").classList.add("active");
    document.getElementById("popup-text").innerText = text;

    setTimeout(() => {
        document.getElementById("popup").classList.remove("active");
    }, 5000);
}

window.addEventListener("load", function () {
    const db = JSON.parse(localStorage.getItem("db-users"));


    // Strona logowanie

    document.getElementById("logging-in-button").addEventListener("click", function () {
        let email = document.getElementById('email-text').value;
        let password = document.getElementById('password-text').value;

        if (Object.keys(db).includes(email) && RegExForMail.test(email)) {
            document.getElementById("incorrect-mail").classList.remove("active");
            document.getElementById("incorrect-password").classList.remove("active");
        } else {
            document.getElementById("incorrect-mail").classList.add("active");
            document.getElementById("incorrect-password").classList.add("active");
        };


        if (Object.keys(db).includes(email)) {
            if (db[email]["password"] == password) {
                localStorage.setItem("loggedInAs", email)
                window.location.replace("../index.html");
            } else {
                document.getElementById("incorrect-password").classList.add("active");
            }
        };
    });

    function goToLogin() {
        document.getElementById("logging-in").classList.remove("disabled")
        document.getElementById("registration").classList.add("disabled")
        document.getElementById("reset").classList.add("disabled")
    };

    function goToRegistration() {
        document.getElementById("logging-in").classList.add("disabled")
        document.getElementById("registration").classList.remove("disabled")
        document.getElementById("reset").classList.add("disabled")
    }; 
    
    function goToReset() {
        document.getElementById("logging-in").classList.add("disabled")
        document.getElementById("registration").classList.add("disabled")
        document.getElementById("reset").classList.remove("disabled")
    };

    document.getElementById("registration-redirect-button").addEventListener("click", goToRegistration);
    document.getElementById("reset-redirect-button").addEventListener("click", goToReset);


    // strona rejestracji

    document.getElementById('registration-email-text').addEventListener('input', function () {
        const registrationEmailText = document.getElementById('registration-email-text')
        let email = document.getElementById('registration-email-text').value;

        if (Object.keys(db).includes(registrationEmailText.value) || !RegExForMail.test(email)) {
            document.getElementById("registration-incorrect-mail").classList.add("active");
        } else {
            document.getElementById("registration-incorrect-mail").classList.remove("active");
        }
    });

    document.getElementById('registration-name-text').addEventListener('input', function () {
        if (document.getElementById('registration-name-text').value == "") {
            document.getElementById("registration-incorrect-placeholder").classList.add("active");
        } else {
            document.getElementById("registration-incorrect-placeholder").classList.remove("active");
        }
    });

    document.getElementById('registration-password-text2').addEventListener('input', function () {
        if (document.getElementById('registration-password-text1').value == document.getElementById('registration-password-text2').value) {
            document.getElementById("registration-incorrect-password").classList.remove("active");
        } else {
            document.getElementById("registration-incorrect-password").classList.add("active");
        }
    });

    document.getElementById("registration-submit-button").addEventListener("click", function () {
        let chk = 0

        let email = document.getElementById('registration-email-text').value;
        if (Object.keys(db).includes(email) || !RegExForMail.test(email)) {
            document.getElementById("registration-incorrect-mail").classList.add("active");
            chk++;
        } else { document.getElementById("registration-incorrect-mail").classList.remove("active"); }

        let username = document.getElementById('registration-name-text').value;
        if (username == "") {
            document.getElementById("registration-incorrect-placeholder").classList.add("active");
            chk++;
        } else { document.getElementById("registration-incorrect-placeholder").classList.remove("active"); };

        let pass1 = document.getElementById('registration-password-text1').value;
        let pass2 = document.getElementById('registration-password-text2').value;
        if ((pass1 != pass2) || pass1 == "" || pass2 == "") {
            document.getElementById("registration-incorrect-password").classList.add("active");
            chk++;
        } else { document.getElementById("registration-incorrect-password").classList.remove("active"); };

        if (chk != 0) { return };
        if (!captcha()) { return };

        db[email] = { "password": pass1, "username": username, "favourites": [], "data": { "name": "", "lastname": "", "address": "", "pesel": "", "nip": "" } }
        localStorage.setItem("db-users", JSON.stringify(db));
        goToLogin()
        document.getElementById('registration-email-text').value = ""
        document.getElementById('registration-name-text').value = ""
        document.getElementById('registration-password-text1').value = ""
        document.getElementById('registration-password-text2').value = ""

        popup("Konto zostało stworzone!\nproszę sie zalogować")
    });

    document.getElementById("registration-go-back").addEventListener("click", goToLogin);


    // strona resetowania

    document.getElementById('reset-email-text').addEventListener('input', function () {
        const resetEmailText = document.getElementById('reset-email-text')
        let email = document.getElementById('reset-email-text').value;

        if (!Object.keys(db).includes(resetEmailText.value) || !RegExForMail.test(email)) {
            document.getElementById("reset-incorrect-mail").classList.add("active");
        } else {
            document.getElementById("reset-incorrect-mail").classList.remove("active");
        }
    });

    document.getElementById('reset-password-text2').addEventListener('input', function () {
        if (document.getElementById('reset-password-text1').value == document.getElementById('reset-password-text2').value) {
            document.getElementById("reset-incorrect-password").classList.remove("active");
        } else {
            document.getElementById("reset-incorrect-password").classList.add("active");
        }
    });

    document.getElementById("reset-submit-button").addEventListener("click", function () {
        let chk = 0

        const resetEmailText = document.getElementById('reset-email-text').value

        if (!Object.keys(db).includes(resetEmailText) || !RegExForMail.test(resetEmailText)) {
            document.getElementById("reset-incorrect-mail").classList.add("active");
            chk++;
        } else { document.getElementById("reset-incorrect-mail").classList.remove("active") };

        let pass1 = document.getElementById('reset-password-text1').value;
        let pass2 = document.getElementById('reset-password-text2').value;
        if ((pass1 != pass2) || pass1 == "" || pass2 == "") {
            document.getElementById("reset-incorrect-password").classList.add("active");
            chk++;
        } else { document.getElementById("reset-incorrect-password").classList.remove("active"); };

        if (chk != 0) { return };
        if (!captcha()) { return };

        db[resetEmailText]["password"] = pass1
        localStorage.setItem("db-users", JSON.stringify(db));
        goToLogin()
        document.getElementById('reset-email-text').value = ""
        document.getElementById('reset-password-text1').value = ""
        document.getElementById('reset-password-text2').value = ""

        popup("hasło zostało zresetowane")
    });

    document.getElementById("reset-go-back").addEventListener("click", goToLogin);
});


