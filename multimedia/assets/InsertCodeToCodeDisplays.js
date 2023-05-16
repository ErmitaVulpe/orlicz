/**
 * inserts code sample into html code based on embedded-code-X id
 * @params none
 */
function InsertCodeToCodeDisplays() {
    const codeDisplaysDB = [
        `<video class="video-embed" id="shalalala" controls>
        <source src="assets/multimedia/video/brazilian_hokage_saying_shahada.MP4" type="video/mp4">
        </video>`,
        `<video width="400px" autoplay controls>\n\t<source src="link do filmiku" type="video/mp4">\n</video>`,
        `<iframe class="video-embed" src="https://www.youtube.com/embed/OlahNrlcgS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        `<iframe class="video-embed" src="https://www.youtube.com/embed/QYcLGAeCGsc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        `<audio class="audio-embed" controls>
            <source src="assets/multimedia/audio/penismusic.mp3" type="audio/mp3">
        </audio>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7B40TUv35niDQtvjZpnWb6?utm_source=generator" width="350px" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0trTpNYmHAK3EihaZBd2h6?utm_source=generator" width="250" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        `<iframe width="75%" height="125" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/483834900&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"></div>`,
        `<img class="img" src="assets/multimedia/images/egg.jpg">`,
        `<img class="img" src="assets/multimedia/images/LordFoog.png">`,
        `<img class="img" src="assets/multimedia/images/garfield-movie.gif">`,
        `<div class="tenor-gif-embed img" data-postid="22497337" data-share-method="host" data-aspect-ratio="0.83125"><a href="https://tenor.com/view/amog-us-among-us-among-us-imposter-imposter-meme-gif-22497337">Amog Us Among Us GIF</a>from <a href="https://tenor.com/search/amog+us-gifs">Amog Us GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>`,
        `<iframe class="gmaps-embed" src="https://www.google.com/maps/d/embed?mid=1bkXd4HsQ3gBSl50q806JJ_qqTCE&hl=en&ehbc=2E312F"></iframe>`,
        `<iframe class="gmaps-embed" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?origin=Current%20Location&destination=place_id:ChIJgUs--GHLHkcRRsq4jpVHbzI&key=AIzaSyC-5CY9mOCeg5Y3IhPqi_Yd0-DZtWrJl-E" allowfullscreen></iframe>`,
        `<iframe class="gmaps-embed" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d39111.31653344697!2d20.96458196618042!3d52.21690937749413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e1!4m5!1s0x471ecd30c0e362a3%3A0xd0d33b4cfb781897!2sSobieskiego%20100%2C%20Warsaw%2C%20Poland!3m2!1d52.1971018!2d21.040973599999997!4m5!1s0x471ecb61f83e4b81%3A0x326f47958eb8ca46!2sTechnikum%20Elektroniczne%20nr%201%2C%20Marcina%20Kasprzaka%2021%2C%20Warsaw%2C%20Poland!3m2!1d52.2284747!2d20.9706302!5e0!3m2!1sen!2sde!4v1683716074438!5m2!1sen!2sde" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        `<iframe class="gmaps-embed" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34847.2243812369!2d20.967741499714126!3d52.23872769439283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb61f83e4b81%3A0x326f47958eb8ca46!2sTechnikum%20Elektroniczne%20nr%201!5e0!3m2!1sen!2sde!4v1683716412234!5m2!1sen!2sde" tyle="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        `<iframe class="gmaps-embed" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1723.001874340683!2d18.718404219778375!3d52.96378733838728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471cca13526b2af9%3A0xb6b24e4966338f96!2sObi-Wana%20Kenobiego%2C%2087-162%20Grabowiec%2C%20Poland!5e0!3m2!1sen!2sde!4v1683717030793!5m2!1sen!2sde" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
        `<iframe style="width: 20vw; aspect-ratio: 0.75;" src="https://www.youtube.com/embed/LAfZNeuHhP4?list=PLGdcNQeugLtkLaxx7P_skrG10lIXgWl6B" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        `<video class="video-embed" id="shalalala">
            <source src="assets/multimedia/video/TF2_india.MP4" type="video/mp4">
        </video>`,
        `<video class="video-embed" id="shalalala" controls>
            <source src="assets/multimedia/video/TF2_india.MP4" type="video/mp4">
        </video>`
    ];

    for (let i = 0; i < codeDisplaysDB.length; i++) {
        document.querySelector(`#embedded-code-${i}`).innerText = codeDisplaysDB[i];
    }
};
InsertCodeToCodeDisplays();