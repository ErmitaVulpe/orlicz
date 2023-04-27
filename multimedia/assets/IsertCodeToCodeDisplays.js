/**
 * inserts code sample into html code based on embedded-code-X id
 * @params none
 */
function IsertCodeToCodeDisplays() {
    const codeDisplaysDB = [
        `<video width="400px">\n\t<source src="link do filmiku" type="video/mp4">\n</video>`
    ];

    for (let i = 0; i < codeDisplaysDB.length; i++) {
        document.querySelector(`#embedded-code-${i}`).innerText = codeDisplaysDB[i];
    }
};
IsertCodeToCodeDisplays();