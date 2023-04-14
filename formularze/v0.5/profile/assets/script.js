window.addEventListener("load", function () {
    const email = localStorage.getItem("loggedInAs");
    const db = JSON.parse(localStorage.getItem("db-users"))[email];

    const submitMessage = document.getElementById("buttons");
    let isSubmitMessageActive = false;

    document.getElementById("title-welcome-text").innerText += ` ${db["username"]} !`;
    document.getElementById("logout").addEventListener("click", logout);

    document.getElementById("title-container").addEventListener("click", () => {
        window.location.replace("../home/index.html")
    });

    function discardChanges() {
        document.getElementById("username").value = db["username"];
        document.getElementById("name").value = db["data"]["name"];
        document.getElementById("lastname").value = db["data"]["lastname"];
        document.getElementById("pesel").value = db["data"]["pesel"];
        document.getElementById("nip").value = db["data"]["nip"];
    }
    discardChanges();

    document.getElementById("cancel").addEventListener("click", () => { discardChanges() });
    document.getElementById("submit").addEventListener("click", () => {
        console.log(JSON.parse(localStorage.getItem("db-users")));
        db["username"] = document.getElementById("username").value;
        db["data"]["name"] = document.getElementById("name").value;
        db["data"]["lastname"] = document.getElementById("lastname").value;
        db["data"]["pesel"] = document.getElementById("pesel").value;
        db["data"]["nip"] = document.getElementById("nip").value;

        let lolo = JSON.parse(localStorage.getItem("db-users"));
        lolo[email] = db
        localStorage.setItem("db-users", JSON.stringify(lolo));

        if (!isSubmitMessageActive) {
            submitMessage.classList.add("active");
            isSubmitMessageActive = true;
            setTimeout(() => {
                submitMessage.classList.remove("active");
                isSubmitMessageActive = false;
            }, 2000);
        }
    });
});