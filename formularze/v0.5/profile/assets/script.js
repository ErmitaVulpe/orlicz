window.addEventListener("load", function () {
    const email = localStorage.getItem("loggedInAs");
    const db = JSON.parse(localStorage.getItem("db-users"))[email];

    document.getElementById("title-welcome-text").innerText += ` ${db["username"]}!`;
    document.getElementById("logout").addEventListener("click", logout);
    document.getElementById("title-container").addEventListener("click", () => { window.location.replace("../home/index.html") });

    document.getElementById("username").innerText = db["username"];
    document.getElementById("name").innerText = db["data"]["name"];
    document.getElementById("lastname").innerText = db["data"]["lastname"];
    document.getElementById("pesel").innerText = db["data"]["pesel"];
    document.getElementById("nip").innerText = db["data"]["nip"];
});