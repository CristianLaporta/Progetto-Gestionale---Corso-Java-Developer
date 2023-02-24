//recupero i dati del utente
const email = localStorage.getItem("email");
const token = localStorage.getItem("token");
//chiamo il database per chiedere i log che servono per popolare la mia pagina home.html
fetch("http://localhost:3000/user", {
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
      const div = document.getElementById("userp");
      let contatore = 0;
      let admin;
      while (contatore < data.length) {
        if (data[contatore].email != email) {
          if (data[contatore].admin == "true") {
            admin = "admin";
          } else {
            admin = "collega";
          }

          const li = document.createElement("li");
          li.innerHTML = `
<div class="immagine-utente">
    <img src="${data[contatore].linkImgProfile}" alt="user">
</div>
<div class="dettagli-utente">
    <h4>Nome Utente:</h4>
    <h2>${data[contatore].nome} ${data[contatore].cognome} (${admin})</h2>
    <h4>Dati Utente:</h4>
    <p>Email: ${data[contatore].email}</p>
    <p>Telefono: ${data[contatore].telefono}</p>
</div>
<div class="button">
        <img class="trash" onclick="eliminautente(${data[contatore].id})" src="/assets/img/icon/trash.png" alt="trash">
        <img src="/assets/img/icon/pen.png" alt="pen"> 
</div>
`;
          let hr = document.createElement("hr");
          div.appendChild(li);

          if (contatore + 2 != data.length) {
            div.appendChild(hr);
          }
        }
        contatore++;
      }
    }
  })
  .catch((error) => {
    console.log(error);
  });

function eliminautente(id) {
  let decisione = prompt("Sei sicuro di eliminare l'utente con id " + id + "?");
  if (decisione == "si") {
    //per essere sintatticamente corretto, in quanto stiamo eliminando un utente, ci scrivo delete
    fetch("http://localhost:3000/eliminauser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        token: token,
        idutenteel: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data == false) {
          alert("non hai i permessi necessari per eliminare un utente.");
        } else {
          alert("utente eliminato con successo!");
          //aggiorno la pagina in modo tale che l'utente eliminato si elimini dal doom in tempo reale
          location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (decisione == "no") {
    console.log("non faccio nulla");
  } else if (decisione == null) {
    console.log("non faccio nulla");
  } else {
    alert("devi scrivere si oppure no");
    eliminautente(id);
  }
}
