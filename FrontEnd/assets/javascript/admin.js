const admin = localStorage.getItem("ruolo");
if(admin != "true"){
    location.href = "/home.html";
}