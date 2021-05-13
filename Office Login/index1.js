function login() {
    var user = document.getElementById("username").value;
    localStorage["userName"] = user;
    location.href = "index2.html";
}
