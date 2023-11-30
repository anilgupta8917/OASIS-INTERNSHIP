document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    loginUser();
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    registerUser();
});

function loginUser() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Check user credentials (in a real-world scenario, you'd verify with a server)
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        document.getElementById("loginMessage").innerHTML = "Login successful.";
        // Redirect to a secured page after successful login
        window.location.href = "secured_page.html";
    } else {
        document.getElementById("loginMessage").innerHTML = "Invalid login credentials.";
    }
}

function registerUser() {
    var username = document.getElementById("regUsername").value;
    var password = document.getElementById("regPassword").value;

    // Store user credentials (in a real-world scenario, you'd use a server and a database)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    document.getElementById("regMessage").innerHTML = "Registration successful. You can now log in.";
}

function showRegistration() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("registrationContainer").style.display = "block";
}

function showLogin() {
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("registrationContainer").style.display = "none";
}
