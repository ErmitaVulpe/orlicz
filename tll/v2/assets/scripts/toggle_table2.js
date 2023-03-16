function toggle() {
    var remember = document.getElementById("switch-toggle");
    if (remember.checked) {
        document.querySelector(':root').style.setProperty('--nth-row', '#555');
    } else {
        document.querySelector(':root').style.setProperty('--nth-row', '#686767');
    }
}