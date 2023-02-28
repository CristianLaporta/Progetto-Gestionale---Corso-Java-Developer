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
    <td><img src="/assets/img/icon/pen.png" onclick="modal('modifica','${data[contatore].data}','${data[contatore].descrizione}','${data[contatore].importo}','${data[contatore].tipo}','${data[contatore].id}')" alt="pen"></td>
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

let datas;
let descriziones;
let importos;
let ids;
  //function che ci servirà per aprire un modal
function modal(tipo2,data,descrizione,importo,tipo,id) {
  const modal = document.getElementById("modal");
  modal.classList.toggle("displaynone");
if(tipo2 == "modifica"){

modal.innerHTML = `
 <!--     ci troviamo al interno del modal -->
<button class="myButton" onclick="modal()">X</button>
<h3 class="modalh3">Gestisci Movimento</h3>
<div id="label">
 <!--    qui ci inserisco un calendar -->
<label for="data">Data</label>
<br>
<input type="date" id="data" placeholder="Inserisci la data">
<br>
<label for="descrizione">Descrizione</label>
<br>
<input type="text" id="descrizione" placeholder="Inserisci la descrizione">
<br>
<label for="importo">importo</label>
<br>
<input type="text" id="importo" placeholder="Inserisci il tuo importo">
<br>
<p>Tipo di transazione</p>
<!--     qui ci inserisco un radius -->
<label for="entrata">Entrata</label>
<input type="radio" id="entrata" name="opzioni" value="Entrata">
<label for="uscita">Uscita</label>
<input type="radio" id="uscita" name="opzioni" value="Uscita">
<br>
</div>
<div id="buttonmodal">
<button onclick="applicamodifica()" class="myButton2">Applica Modifiche</button><button class="myButton2" onclick="resetmodal('gestionemovimenti')">Reset Campi</button><button class="myButton2" onclick="resetdefault()">Reset dati Movimenti</button>
`
if(tipo == "entrata"){
  document.getElementById("entrata").setAttribute("checked", "true");

}else{
  document.getElementById("uscita").setAttribute("checked", "true");

}
ids= id;
document.getElementById("data").value = data;
document.getElementById("descrizione").value = descrizione;
document.getElementById("importo").value= importo;
descriziones= descrizione;
importos = importo;
datas= data;
}else if(tipo2 == "crea"){
  modal.innerHTML = `
  <!--     ci troviamo al interno del modal -->
 <button class="myButton" onclick="modal()">X</button>
 <h3 class="modalh3">Crea Movimento</h3>
 <div id="label">
  <!--    qui ci inserisco un calendar -->
 <label for="data">Data</label>
 <br>
 <input type="date" id="data" placeholder="Inserisci la data">
 <br>
 <label for="descrizione">Descrizione</label>
 <br>
 <input type="text" id="descrizione" placeholder="Inserisci la descrizione">
 <br>
 <label for="importo">importo</label>
 <br>
 <input type="text" id="importo" placeholder="Inserisci il tuo importo">
 <br>
 <p>Tipo di transazione</p>
 <!--     qui ci inserisco un radius -->
 <label for="entrata">Entrata</label>
 <input type="radio" id="entrata" name="opzioni" value="Entrata">
 <label for="uscita">Uscita</label>
 <input type="radio" id="uscita" name="opzioni" value="Uscita">
 <br>
 </div>
 <div id="buttonmodal">
 <button onclick="creamovimento()" class="myButton2">Crea</button><button class="myButton2" onclick="resetmodal('gestionemovimenti')">Reset Campi</button>
 `
}

}
//function che resetta i valori di default del utente selezionato
function resetdefault() {
  document.getElementById("data").value = datas;
  document.getElementById("importo").value = importos;
  document.getElementById("descrizione").value = descriziones;
 
}

//function che serve per applicare le modifiche del nostro modal
function applicamodifica() {
  const modal = document.getElementsByName("opzioni");
  let radius;
  if(modal[0].checked == true){
    radius = "Entrata"
  }else{
   radius = "Uscita"
  } 
  const data =document.getElementById("data").value;
  const importo = document.getElementById("importo").value;
  const descrizione = document.getElementById("descrizione").value;

  fetch("http://localhost:3000/modificaprodotto", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      token: token,
      ids: ids,
     radius: radius,
      data: data,
      importo: importo,
      descrizione: descrizione,
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
      } else if (data == true) {
     alert("prodotto modificato con successo!")
     //aggiorno la pagina in modo tale che l'utente si aggiorni
     location.reload();
      
    }else if (data == "nopermessi"){
      alert("Non hai i permessi per modificare la tabella!");
    }
  
  }
      
      )
    .catch((error) => {
      console.log(error);
    });

}

function creamovimento(){
  const modal = document.getElementsByName("opzioni");
  let radius;
  if(modal[0].checked == true){
    radius = "Entrata"
  }else{
   radius = "Uscita"
  } 
  const data =document.getElementById("data").value;
  const importo = document.getElementById("importo").value;
  const descrizione = document.getElementById("descrizione").value;
if(data.length !=0 && importo.length != 0 && descrizione.length != 0 && radius != undefined){

  fetch("http://localhost:3000/aggiungiprodotto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      token: token,
     radius: radius,
      data: data,
      importo: importo,
      descrizione: descrizione,
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
      } else if (data == true) {
     alert("prodotto Aggiunto con successo!")
     //aggiorno la pagina in modo tale che l'utente si aggiorni
     location.reload();
      
    }else if (data == "nopermessi"){
      alert("Non hai i permessi per modificare la tabella!");
    }
  
  }
      
      )
    .catch((error) => {
      console.log(error);
    });
  }
}