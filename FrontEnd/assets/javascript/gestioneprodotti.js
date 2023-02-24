//recupero i dati del utente
const email = localStorage.getItem("email");
const token = localStorage.getItem("token");
const ruolo = localStorage.getItem("ruolo");
//chiamo il database per chiedere i log che servono per popolare la mia pagina home.html
fetch("http://localhost:3000/prodotti", {
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
      const dati = document.getElementById("dati");
      let contatore = 0;

      while (contatore < data.length) {
        const tr = document.createElement("tr");
if(email == data[contatore].creatore || ruolo == "true"){
    tr.innerHTML = `
    <td>${data[contatore].data}</td>
    <td>${data[contatore].descrizione}</td>
    <td>${data[contatore].importo}</td>
    <td>${data[contatore].tipo}</td>
    <td>${data[contatore].nome} (${data[contatore].creatore})</td>
    <td><img onclick="rimuoviprodotto(${data[contatore].id})" src="/assets/img/icon/trash.png" alt="trash"></td>
    <td><img src="/assets/img/icon/pen.png" alt="pen"></td>
    `;
    
}else{
    tr.innerHTML = `
    <td>${data[contatore].data}</td>
    <td>${data[contatore].descrizione}</td>
    <td>${data[contatore].importo}</td>
    <td>${data[contatore].tipo}</td>
    <td>${data[contatore].nome} (${data[contatore].creatore})</td>
    <td><img src="/assets/img/icon/divieto.png" alt="trash"></td>
    <td><img src="/assets/img/icon/divieto.png" alt="pen"></td>
    `;
}





dati.appendChild(tr)
contatore++; 
}
      
    }
  })
  .catch((error) => {
    console.log(error);
  });


  function rimuoviprodotto(id){
    let decisione = prompt("Sei sicuro di eliminare questo prodotto?");
    if (decisione == "si") {
      //per essere sintatticamente corretto, in quanto stiamo eliminando un utente, ci scrivo delete
      fetch("http://localhost:3000/eliminaprodotto", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          token: token,
          idelimina: id,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data == false) {
            alert("non hai i permessi necessari per eliminare il prodotto.");
          } else {
            alert("prodotto eliminato con successo!");
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
     rimuoviprodotto(id);
    }
  }