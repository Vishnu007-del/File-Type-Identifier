// Default Login Credentials

const USER_ID = "vishnuganesh";
const PASSWORD = "vishnu123";

function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        document.getElementById("message").innerHTML =
            "User ID and Password are required!";
        return;
    }

    if (username === USER_ID && password === PASSWORD) {

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);

        window.location.href = "dashboard.html";

    } else {

        document.getElementById("message").innerHTML =
            "Invalid User ID or Password";

    }
}