//recupero i dati del utente
const email2 = localStorage.getItem("email");
const token = localStorage.getItem("token");

setTimeout(() => {
  document.getElementById("email").value = user[0].email;
  document.getElementById("tel").value = user[0].telefono;
  document.getElementById("name").value = user[0].nome;
  document.getElementById("imgprofile").value = user[0].linkImgProfile;
  document.getElementById("surname").value = user[0].cognome;
}, 1000);

function ripristina() {
  document.getElementById("email").value = "";
  document.getElementById("tel").value = "";
  document.getElementById("name").value = "";
  document.getElementById("imgprofile").value = "";
  document.getElementById("surname").value = "";
}

function salva() {
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const imgprofile = document.getElementById("imgprofile").value;

  if (
    email.length != 0 ||
    tel.length != 0 ||
    name.length != 0 ||
    surname.length != 0
  ) {
    if (email.length == 0) {
      alert("scrivi una mail!");
    }
    if (tel.length == 0) {
      alert("scrivi un numero di telefono!");
    }
    if (name.length == 0) {
      alert("scrivi un nome!");
    }
    if (surname.length == 0) {
      alert("scrivi un cognome!");
    }
    if (imgprofile.length == 0) {
      alert("inserisci un link per la foto profilo!");
    }

    fetch("http://localhost:3000/impostazioni", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email2,
        token: token,
        email2: email,
        tel: tel,
        name: name,
        surname: surname,
        imgprofile: imgprofile,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length == 0) {
          localStorage.removeItem("email");
          localStorage.removeItem("token");
          location.href = "/index.html";
        } else {
          if (data == "errore") {
            alert("errore imprevisto, riprova più tardi.");
          } else {
            alert("dati modificati con successo!");
            //aggiorno la pagina in modo tale che l'utente si aggiorni
            location.reload();
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
