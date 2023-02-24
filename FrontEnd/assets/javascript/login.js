//controllo se esiste un token nel local storage, se esiste allora mando l'utente nella home che farà la verifica del token e rimarrà loggato nel caso sia tutto ok
let dato = localStorage.getItem("token");
if(dato != null){
    location.href = "/home.html";
}



//funzione che serve per fare l'accesso al gestionale
function accedi(){
//recupero username e password
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

fetch('http://localhost:3000/login', {
 method: 'POST',
 headers: {
    'Content-Type': 'application/json'
 },   
 body: JSON.stringify({
    email:email,
    password:password
 })
})
.then(response => response.json())
.then(data =>{
if(data.length != 0){
    localStorage.setItem("email",email);
    localStorage.setItem("token",data)
   location.href = "/home.html";
}else{
    alert("i dati sono sbagliati!")
}
}).catch((error) =>{
    console.log(error)
})



}

