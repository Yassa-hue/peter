let name = document.getElementById("name"),
    nameErr = document.getElementById("nameErr"),
    email = document.getElementById("email"),
    emailErr = document.getElementById("emailErr");
function validateEmail (email) {
    let a = email.search(/@/),
        b = email.search(/.com/),
        c = email.search(/[0-9]/);
    return ((a > -1 && b > -1 && c > -1) && (a < b && c < a));
}
function validateName(name) {
    return (name.length > 4
        && name.search(/[0-9]/g) < 0
    );
}
name.onblur = function () {
    let res = validateName(this.value)
    if (!res)
        nameErr.innerHTML = "Invalid"
    else
        nameErr.innerHTML = ""
}
email.onblur = function () {
    let res = validateEmail(this.value)
    if (!res)
        emailErr.innerHTML = "Invalid"
    else
        emailErr.innerHTML = ""
}