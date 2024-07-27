
var imgs = Array.from(document.querySelectorAll(".item img"));

var lightBoxContainer = document.getElementById('lightBoxContainer');

var lightBox = document.getElementById('lightBox');

var ntBtn = document.getElementById('next');
var bkBtn = document.getElementById('back');
var exBtn = document.getElementById('exit');


var curIndex = 0;

for (var i = 0; i < imgs.length; i++) {

    imgs[i].addEventListener('click', function (e) {

        curIndex = imgs.indexOf(e.target)

        var imgSrc = e.target.getAttribute('src');

        console.log(curIndex)

        lightBoxContainer.style.display = 'flex';

        lightBox.style.backgroundImage = `url(${imgSrc})`

    }

    )

}

function nextSlide() {

    curIndex++;

    if (curIndex == imgs.length) {
        curIndex = 0
    }

    var imgSrc = imgs[curIndex].getAttribute('src');

    lightBox.style.backgroundImage = `url(${imgSrc})`


}
ntBtn.addEventListener('click', nextSlide);

function lastSlide() {

    curIndex--;

    if (curIndex < 0) {
        curIndex = imgs.length - 1
    }


    var imgSrc = imgs[curIndex].getAttribute('src');

    lightBox.style.backgroundImage = `url(${imgSrc})`
}
bkBtn.addEventListener('click', lastSlide);

function exit() {

    lightBoxContainer.style.display = 'none';

}
exBtn.addEventListener('click', exit);


document.addEventListener('keydown', function (e) {

    console.log(e.code)

    if (e.code == 'Escape') {
        exit();
    }
    else if (e.code == 'ArrowRight') {
        nextSlide();
    }
    else if (e.code == 'ArrowLeft') {
        lastSlide();
    }




})