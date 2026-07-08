// Default Login Credentials

const USER_ID = "bob";
const PASSWORD = "123";

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
// ==========================
// Theme Toggle
// ==========================

window.onload = function () {

    let mode = localStorage.getItem("theme");

    if (mode == "dark") {

        document.body.classList.add("dark");

        document.getElementById("themeBtn").innerHTML =
            "☀️";

    }

    else {

        document.body.classList.add("light");

    }

}

function toggleTheme(){

    if(document.body.classList.contains("dark")){

        document.body.classList.remove("dark");

        document.body.classList.add("light");

        localStorage.setItem("theme","light");

        document.getElementById("themeBtn").innerHTML =
            "🌙";

    }

    else{

        document.body.classList.remove("light");

        document.body.classList.add("dark");

        localStorage.setItem("theme","dark");

        document.getElementById("themeBtn").innerHTML =
            "☀️";

    }

}