function actionWhenMouseOver(imgName) {
    var img = document.getElementById(imgName);
    img.style['transform'] = "scale(1.6)";
    img.style['transition'] = "0.3s";
}

function actionWhenMouseOut(imgName) {
    var img = document.getElementById(imgName);
    img.style['transform'] = "scale(1)";
    img.style['transition'] = "0.3s";
    img.style['z-index'] = "0";
}

var POPUP_COUNTER_KEY = 'popupCounter';
var nullification = () => {
    sessionStorage.removeItem(POPUP_COUNTER_KEY);
};
var timer;
$(window).scroll(function() {
    var currentCounter = +sessionStorage.getItem(POPUP_COUNTER_KEY);
    if ((!currentCounter) && ($(document).scrollTop() >= $('#form_appear').offset().top)) {
        sessionStorage.setItem(POPUP_COUNTER_KEY, 1);
        document.getElementById('popup').style = "visibility:visible; opacity:1";
        document.getElementById('popup-content').style = "opacity:1; transform:translate(0px, 0px);";
        timer = setTimeout(nullification, 60 * 1000);
        return;
    }
});

document.getElementById("leave-app").onclick = lvppbtn;

function lvppbtn() {
    document.getElementById('popup').style = "visibility:visible; opacity:1";
    document.getElementById('popup-content').style = "opacity:1; transform:translate(0px, 0px);";
    clearTimeout(timer);
    setTimeout(nullification, 300 * 1000);
}


document.getElementById("btn_close").onclick = btnclose;

function btnclose() {
    document.getElementById('popup').style = "visibility:hidden; opacity:0";
    document.getElementById('popup-content').style = "opacity:0; transform: translate(0px, -100%)";
}

window.addEventListener("keyup", function(e) {
    if (e.keyCode == 27) {
        document.getElementById('popup').style = "visibility:hidden; opacity:0";
        document.getElementById('popup-content').style = "opacity:0; transform: translate(0px, -100%)";
    }
}, false);

$('.ignore').click(function(e) {
    var anch = this.hash.slice(0);
    if (!anch || !anch[0] === "#") return;
    e.preventDefault();
    window.location.hash = '';
    var offset = $(anch).offset();
    $("html, body").animate({ scrollTop: $(anch).offset().top }, 100);
    if (history.pushState) { history.pushState({}, null, window.location.pathname); }
});