let correctUsername = "Zeon";
let correctPassword = "169661?!";

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {

        window.location.href = "home.html";

    } else {

        document.getElementById("result").textContent =
            "Incorrect username or password.";

    }
}
