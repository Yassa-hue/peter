let colors = document.getElementById("colors"),
    background = document.getElementById("body")
    size = document.getElementById("size")
    text = document.getElementById("text");
colors.onchange = function () {
    background.style.backgroundColor = colors.value;
}

size.onchange = function () {
    text.style.fontSize = size.value;
}