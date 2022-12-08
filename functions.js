
let textElement = document.getElementsByClassName('block-animate');

let firstBlock = textElement[0];

const scrolled = ((window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

function upScroll(){
    window.scrollBy(0, 100)
}

function downScroll(){
    window.scrollBy(0, -100)
}


window.addEventListener("scroll", function () {
    const scrolled = ((window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    let firstBlock = document.getElementsByClassName("block-text-content")[0];
    let bottom = document.getElementsByClassName("bottom")[0];
    let secondblock = document.getElementsByClassName("block-graph-content")[0];
    let graphs = document.getElementsByClassName('block-graph-content')[0];
    let arrowDown = document.getElementById('arrow-down-animate');
    let arrowDownScroll = document.getElementById("arrow-up-scroll");
    let arrUpScrolll = document.getElementById("arrow-down-scroll");

    if (scrolled <= 4.99 && window.innerWidth > 600) {
        firstBlock.style.width = "70%";
        secondblock.style.width = "30%";
        bottom.style.width = "70%";

    }
    else if (scrolled > 5 && window.innerWidth > 600) {
        firstBlock.style.width = "30%"
        secondblock.style.width = "70%"
        bottom.style.width = "30%"

    }

    if (scrolled < 4.99) {
        graphs.style.display = "none";
        arrowDown.style.display = "block";
        arrUpScrolll.style.display = "none";
        arrowDownScroll.style.display = "none"
    }

    else if (scrolled > 5) {
        graphs.style.display = "block";
        arrowDown.style.display = "none";
        arrUpScrolll.style.display = "block";
        arrowDownScroll.style.display = "block"
    }
    // console.log(scrolled);

    const breakpoints = [5, 18, 26, 34, 46, 60, 66, 72, 83];

    for (let index = 0; index < breakpoints.length; index++) {

        if (scrolled < breakpoints[index] && scrolled > breakpoints[index - 1]) {
            let child = document.getElementById(`frame${index}`);
            child.style.display = "block";
            secondblock.appendChild(child);
        }

    }

})


var i = 0, j = 0, speed = 50;
element = document.getElementsByClassName('first-block-animate')[0].children;
text1 = element[0].innerHTML;
text2 = element[1].innerHTML;
function animateTextEffect() {
    element[0].innerHTML = element[1].innerHTML = '';
    typeWriter();
}

function typeWriter() {
    if (i < text1.length) {
        element[0].innerHTML += text1.charAt(i);
        setTimeout(typeWriter, speed);
        // console.log('hello');
        i++;
    }
    else if (j < text2.length) {
        element[1].innerHTML += text2.charAt(j);
        setTimeout(typeWriter, speed);
        j++;
    }
    else {
        i = j = 0;
    }
}

