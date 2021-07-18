

var i = setTimeout(function () {
    clearTimeout(i);

    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("potionGif").style.display = "block";
}, 1000);

