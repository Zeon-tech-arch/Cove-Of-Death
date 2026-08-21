let correctUsername = "Zeon";
let correctPassword = "169661?!";

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {
        console.log("Login Successful!");
    } else {
        console.log("Incorrect username or password");
    }
}
