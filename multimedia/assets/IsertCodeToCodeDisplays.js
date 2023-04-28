/**
 * inserts code sample into html code based on embedded-code-X id
 * @params none
 */
function IsertCodeToCodeDisplays() {
    const codeDisplaysDB = [
        `<video width="400px">\n\t<source src="link do filmiku" type="video/mp4">\n</video>`,
        `<video width="400px" autoplay controls>\n\t<source src="link do filmiku" type="video/mp4">\n</video>`,
        `<iframe width="850" height="478" src="https://www.youtube.com/embed/..."\n\tframeborder="0" allow="accelerometer; autoplay; clipboard-write;\n\tencrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>\n</iframe>`,
        `<iframe src="https://www.youtube.com/embed/..."\n\tframeborder="0" allow="accelerometer; autoplay; clipboard-write;\n\tencrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>\n</iframe>`,
        `<audio controls>\n\t<source src="{ścieżka do pliku}" type="audio/{format pliku}">\n</audio>`,
        `<iframe style="border-radius:12px" src="{link do Spotify}" width="350px" height="80"\n\tframeBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;\n\tencrypted-media; fullscreen; picture-in-picture" loading="lazy">\n</iframe>`,
        `<iframe style="border-radius:12px" src="{link do Spotify}"  width="250" height="352"\n\tframeBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;\n\tencrypted-media; fullscreen; picture-in-picture" loading="lazy">\n</iframe>`,
        `<iframe width="75%" height="125" scrolling="no" frameborder="no" allow="autoplay"\n\tsrc="{link do soundcloud"></iframe>\n<div style="font-size: 10px; color: #cccccc; line-break: anywhere;word-break: normal;\n\toverflow: hidden;white-space: nowrap;\n\ttext-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans\n\tUnicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">\n</div>`
    ];

    for (let i = 0; i < codeDisplaysDB.length; i++) {
        document.querySelector(`#embedded-code-${i}`).innerText = codeDisplaysDB[i];
    }
};
IsertCodeToCodeDisplays();