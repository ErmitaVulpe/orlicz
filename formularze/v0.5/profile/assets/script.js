window.addEventListener("load", function () {
    const db = JSON.parse(localStorage.getItem("db-users"));
    const email = localStorage.getItem("loggedInAs");

    document.getElementById("title-welcome-text").innerText += ` ${db[email]["username"]}!`;
    document.getElementById("logout").addEventListener("click", logout);
    document.getElementById("title-container").addEventListener("click", () => {window.location.replace("../home/index.html")});
});