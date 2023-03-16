function toggle2() {
    var remember = document.getElementById("switch-toggle2");
    if (remember.checked) {
        gen_table1_alt()
        popup()
        setTimeout(() => {
            document.querySelector(':root').style.setProperty('--table1-separator-height', '4px');
        }, 0);
    } else {
        gen_table1()
        popup()
        setTimeout(() => {
            document.querySelector(':root').style.setProperty('--table1-separator-height', '0');
        }, 0);
    }
}