/**
 * inserts code sample into html code based on embedded-code-X id
 * @params none
 */
function InsertCodeToCodeDisplays() {
    const codeDisplaysDB = [
        `<video width="400px">\n\t<source src="link do filmiku" type="video/mp4">\n</video>`,
        `<video width="400px" autoplay controls>\n\t<source src="link do filmiku" type="video/mp4">\n</video>`,
        `<iframe width="850" height="478" src="https://www.youtube.com/embed/..."\n\tframeborder="0" allow="accelerometer; autoplay; clipboard-write;\n\tencrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>\n</iframe>`,
        `<iframe src="https://www.youtube.com/embed/..."\n\tframeborder="0" allow="accelerometer; autoplay; clipboard-write;\n\tencrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>\n</iframe>`,
        `<audio controls>\n\t<source src="{ścieżka do pliku}" type="audio/{format pliku}">\n</audio>`,
        `<iframe style="border-radius:12px" src="{link do Spotify}" width="350px" height="80"\n\tframeBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;\n\tencrypted-media; fullscreen; picture-in-picture" loading="lazy">\n</iframe>`,
        `<iframe style="border-radius:12px" src="{link do Spotify}"  width="250" height="352"\n\tframeBorder="0" allowfullscreen="" allow="autoplay; clipboard-write;\n\tencrypted-media; fullscreen; picture-in-picture" loading="lazy">\n</iframe>`,
        `<iframe width="75%" height="125" scrolling="no" frameborder="no" allow="autoplay"\n\tsrc="{link do soundcloud"></iframe>\n<div style="font-size: 10px; color: #cccccc; line-break: anywhere;word-break: normal;\n\toverflow: hidden;white-space: nowrap;\n\ttext-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans\n\tUnicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">\n</div>`,
        `<img src="{ścieżka do pliku}">`,
        `<img src="{ścieżka do pliku}">`,
        `<img src="{ścieżka do pliku}">`,
        `<div class="tenor-gif-embed img" data-postid="22497337" data-share-method="host"\ndata-aspect-ratio="0.83125"><a href="{Link do tenor}"></a><a\nhref="{Link do tenor}"></a></div><script type="text/javascript" async\nsrc="https://tenor.com/embed.js"></script>`,
        `<iframe src="https://www.google.com/maps/d/embed?mid=1bkXd4HsQ3gBSl50q806JJ_qqTCE\n\t&hl=en&ehbc=2E312F" width="640" height="480">\n</iframe>`,
        `<iframe class="gmaps-embed" frameborder="0" style="border:0" src="https://www.\n\tgoogle.com/maps/embed/v1/directions?origin=Current%20Location&\n\tdestination=place_id:ChIJgUs--GHLHkcRRsq4jpVHbzI&key=<API-KEY>"\n\tallowfullscreen>\n</iframe>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d39111.31\n\t653344697!2d20.96458196618042!3d52.21690937749413!2m3!1f0!2f0!3f0!3m2\n\t!1i1024!2i768!4f13.1!4m13!3e1!4m5!1s0x471ecd30c0e362a3%3A0xd0d33b4cfb78\n\t1897!2sSobieskiego%20100%2C%20Warsaw%2C%20Poland!3m2!1d52.1971018!2d21.\n\t040973599999997!4m5!1s0x471ecb61f83e4b81%3A0x326f47958eb8ca46!2sTechnikum\n\t%20Elektroniczne%20nr%201%2C%20Marcina%20Kasprzaka%2021%2C%20Warsaw%2C%20\n\tPoland!3m2!1d52.2284747!2d20.9706302!5e0!3m2!1sen!2sde!4v1683716074438!5m2\n\t!1sen!2sde"width="640" height="480" style="border:0;"allowfullscreen=""\n\tloading="lazy"referrerpolicy="no-referrer-when-downgrade">\n</iframe>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d78202.2505440628\n\t9!2d20.970629!3d52.228482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb61f83e\n\t4b81%3A0x326f47958eb8ca46!2sTechnikum%20Elektroniczne%20nr%201!5e0!3m2!1se\n\tn!2sde!4v1683717974551!5m2!1sen!2sde" width="600" height="450"\n\tstyle="border:0;"allowfullscreen="" loading="lazy"\n\treferrerpolicy="no-referrer-when-downgrade">\n</iframe>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4806.27476002357\n\t9!2d18.720846!3d52.963943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471cca13526b\n\t2af9%3A0xb6b24e4966338f96!2sObi-Wana%20Kenobiego%2C%087-162%20Grabowiec%2C\n\t%20Poland!5e0!3m2!1sen!2sde!4v1683718122354!5m2!1sen!2sde" width="600"\n\theight="450" style="border:0;" allowfullscreen="" loading="lazy"\n\treferrerpolicy="no-referrer-when-downgrade">\n</iframe>`,
        `<iframe style="width: 20vw; aspect-ratio: 0.75;" src="https://www.youtube.com/\n\tembed/LAfZNeuHhP4?list=PLGdcNQeugLtkLaxx7P_skrG10lIXgWl6B" frameborder="0"\n\tallow="accelerometer; autoplay; clipboard-write; encrypted-media;\n\tgyroscope; picture-in-picture; web-share" allowfullscreen>\n</iframe>`,
        `<video class="video-embed" id="shalalala">\n\t<source src="assets/multimedia/video/TF2_india.MP4" type="video/mp4">\n</video>`,
        `<video class="video-embed" id="shalalala" controls>\n\t<source src="assets/multimedia/video/TF2_india.MP4" type="video/mp4">\n</video>`
    ];

    for (let i = 0; i < codeDisplaysDB.length; i++) {
        document.querySelector(`#embedded-code-${i}`).innerText = codeDisplaysDB[i];
    }
};
InsertCodeToCodeDisplays();