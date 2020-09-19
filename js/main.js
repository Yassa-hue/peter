let password = document.getElementById("password"),
    passwordErr = document.getElementById("passwordErr"),
    email = document.getElementById("email"),
    emailErr = document.getElementById("emailErr"),
    login = document.getElementById("login");
function validateEmail (email) {
    let a = email.search(/@/),
        b = email.search(/.com/),
        c = email.search(/[0-9]/);
    return ((a > -1 && b > -1 && c > -1) && (a < b && c < a));
}
function validatepassword(password) {
    return (password.length >= 8);
}
// function validateName(name) {
//     return (name.length > 4
//         && name.search(/[0-9]/g) < 0
//     );
// }
password.onblur = function () {
    let res = validatepassword(this.value)
    if (!res)
        passwordErr.innerHTML = "Invalid"
    else
        passwordErr.innerHTML = ""
}
email.onblur = function () {
    let res = validateEmail(this.value)
    if (!res)
        emailErr.innerHTML = "Invalid"
    else
        emailErr.innerHTML = ""
}

login.onclick = function () {
    if (validateEmail(email.value) && validatepassword(password.value))
        this.href = 'home.html'
    else
        this.href = ''
}
