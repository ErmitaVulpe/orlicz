function sendCoordinatesToWebhook() {
    // Function to handle the API call
    function makeApiCall(latitude, longitude) {
        fetch(`https://tymon.wilczek.dev/webhook?latitude=${latitude}&longitude=${longitude}`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => document.querySelector("#loading-screen").classList.remove("active"))
    }

    const positionObj = {
        latitude: undefined,
        longitude: undefined
    }
    new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    .then(function (position) {
        positionObj.latitude = position.coords.latitude;
        positionObj.longitude = position.coords.longitude;
    })
    .then(() => {makeApiCall(positionObj.latitude, positionObj.longitude)})
    .catch(() => {makeApiCall(positionObj.latitude, positionObj.longitude)})
}
sendCoordinatesToWebhook();