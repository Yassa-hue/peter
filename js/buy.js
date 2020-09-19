let cdnum = document.getElementById("cdnum"),
    cdnumerr = document.getElementById("cdnumerr"),
    exdate = document.getElementById("exdate"),
    exdateerr = document.getElementById("exdateerr"),
    password = document.getElementById("password"),
    passworderr = document.getElementById("passworderr")
    buy = document.getElementById("buy");


function validateCdnum (value) {
    return (value.length === 16)
}

function  validateExdate(value) {
    if (value.search('-') > -1){
        value = value.split("-");
        let month = value[0],
            year = value[1];
        return ((month >= 12 && month > 0) && (year > 20));
    } else {
        return false;
    }
}

function validatePassword(value) {
    return (!isNaN(value) && value.length === 3)
}

exdate.onfocus = function () {
    exdate.value = "-"
}

cdnum.onblur = function () {
    if (validateCdnum(cdnum.value))
        cdnumerr.innerHTML = "";
    else
        cdnumerr.innerHTML = "Invalid";
}

exdate.onblur = function () {
    if (validateExdate(exdate.value))
        exdateerr.innerHTML = "";
    else
        exdateerr.innerHTML = "Invalid";
}

password.onblur = function () {
    if (validatePassword(password.value))
        passworderr.innerHTML = "";
    else
        passworderr.innerHTML = "Invalid";
}

buy.onclick = function () {
    if (validateCdnum(cdnum.value) && validateExdate(exdate.value) && validatePassword(password.value)) {
        alert("Successful Operation");
    } else
        alert("Invalid Inputs");
}