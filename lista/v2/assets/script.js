window.onscroll = function() {
    direction = this.oldScroll > this.scrollY;
    this.oldScroll = this.scrollY;

    const element = document.querySelector('.body');
    const bgposold = getComputedStyle(element).backgroundPositionY;
    const bgpos = parseInt(bgposold.slice(0, -2));
    
    if(direction) {
        var output = String(bgpos + 2) + "px";
    }
    else {
        var output = String(bgpos - 2) + "px";
    }
    element.style.backgroundPositionY = output;
}

function css_animation() {
    const element = document.querySelector('.navbarcontainer');
    const translation = getComputedStyle(element).transform;
    var array = JSON.parse("[" + translation.slice(7).slice(0, -1) + "]");
    
    var r = document.querySelector(':root');
    const rstyle = getComputedStyle(r);

    const l1 = document.querySelector('#l1');
    const l2 = document.querySelector('#l2');
    const l3 = document.querySelector('#l3');

    if(array[4] == 0) {
        array[4] = -250;
        var navbar = "0px"
        
        l1.style.x = 9
        l1.style.y = 9
        l1.style.width = 33
        l1.style.rx = 3
        l1.style.transform = "none"

        l2.style.x = 9
        l2.style.y = 22
        l2.style.width = 33
        l2.style.rx = 3

        l3.style.x = 9
        l3.style.y = 35
        l3.style.width = 33
        l3.style.rx = 3
        l3.style.transform = "none"
    }
    else {
        array[4] = 0;
        var navbar = "250px"
        
        l1.style.x = 10.1213
        l1.style.y = 6
        l1.style.width = 46.67
        l1.style.rx = 2.91421
        l1.style.transform = "matrix(0.707107, 0.707107, -0.707107, 0.707107, 7.2071, -5.39948)"

        l2.style.x = 22
        l2.style.y = 22
        l2.style.width = 6
        l2.style.rx = 3

        l3.style.x = 6
        l3.style.y = 39.0007
        l3.style.width = 46.67
        l3.style.rx = 2.91421
        l3.style.transform = "matrix(0.707107, -0.707107, 0.707107, 0.707107, -25.8203, 15.6657)"
    }
    element.style.transform = "matrix("+ array +")";
    r.style.setProperty("--navbar-width", navbar);
}

function collapse(in1) {
    const text = "text" + in1
    var e = getComputedStyle(document.getElementById(text)).maxHeight

    const r = document.querySelector("#" + text)
    const s = document.getElementById(text).scrollHeight

    if(e == "0px") {
        r.style.maxHeight = s + "px"
        document.getElementById('b' + in1).innerText = "˄ zwiń ˄"
    }
    else {
        r.style.maxHeight = "0px"
        window.scrollBy({
            top: -s,
            left: 0,
            behavior: 'smooth'
        })
        document.getElementById('b' + in1).innerText = "˅ rozwiń ˅"
    }
}