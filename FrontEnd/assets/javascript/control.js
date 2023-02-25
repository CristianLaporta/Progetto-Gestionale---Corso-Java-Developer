function menu() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("active");
}
//variabile che conterrà i dati del utente
let user = [];
//creo un controllo per verificare se l'utente è loggato

let dato = localStorage.getItem("token");
if (dato == null) {
  location.href = "/index.html";
} else {
  //recupero i dati del utente
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  fetch("http://localhost:3000/verifica", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      token: token,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data == false) {
        alert(
          "Sei stato disconnesso in quanto il token salvato nel tuo browser non sembra essere vero."
        );
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        location.href = "/index.html";
      } else {
        user = data;
        const navbar = document.getElementById("navbar");
        let elementsName = document.createElement("p");
        elementsName.textContent = data[0].nome;
        elementsName.classList.add("nome");
        navbar.appendChild(elementsName);
        const imgProfile = document.getElementById("user");
        imgProfile.src = data[0].linkImgProfile;
        localStorage.setItem("ruolo", user[0].admin);
        adminpannel();
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
//funzione per il logout
function logout() {
  alert("Logout effetuato con successo!");
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  location.href = "/index.html";
}
//funzione per far spawnare il pannello admin in caso in cui sia loggato un admin.
function adminpannel() {
  let admin = localStorage.getItem("ruolo");
  if (admin == "true") {
    const menu = document.getElementById("menuLaterale");
    const a = document.createElement("a");
    a.href = "/admin.html";
    a.textContent = "Pannello Admin";
    menu.appendChild(a);
    const a2 = document.createElement("a");
    const menu2 = document.getElementById("ulmenu");
    const li = document.createElement("li");
    a2.textContent = "Pannello Admin";
    a2.href = "/admin.html";
    li.appendChild(a2);
    menu2.appendChild(li);
  }
}

//funzione per resettare tutti i campi del modal

function resetmodal(nomePagina) {
  if (nomePagina == "gestioneutenti") {
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
  }
  if(nomePagina == "gestionemovimenti"){

      document.getElementById("entrata").setAttribute("checked", "false");

      document.getElementById("uscita").setAttribute("checked", "false");

    document.getElementById("data").value = "";
    document.getElementById("descrizione").value = "";
    document.getElementById("importo").value= "";
  }
}
