const admin = localStorage.getItem("ruolo");
const email = localStorage.getItem("email");
const token = localStorage.getItem("token");
if (admin != "true") {
  location.href = "/home.html";
}

let lenght;
fetch("http://localhost:3000/aiutol", {
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
    if (data == "false") {
      alert(
        "Sei stato disconnesso in quanto il token salvato nel tuo browser non sembra essere vero."
      );
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      location.href = "/index.html";
    } else {
      length = data;
      generaiuti();
    }
  })
  .catch((error) => {
    console.log(error);
  });

let contatore = 0;

function generaiuti() {
  fetch("http://localhost:3000/aiuto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      token: token,
      ciclo: contatore,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data == "false") {
        alert(
          "Sei stato disconnesso in quanto il token salvato nel tuo browser non sembra essere vero."
        );
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        location.href = "/index.html";
      } else {
        if (data != "fine") {
          const div = document.getElementById("messaggi");
          const h2 = document.createElement("h2");
          const h3 = document.createElement("h3");
          const hr = document.createElement("hr");
          const h4 = document.createElement("H4");
          h2.textContent =
            "Dati utente: " + data.nome + " " + data.cognome + " " + data.email;
          h3.textContent = "Reclamo: " + data.reclamo;
          h4.textContent = "Data del reclamo: "+data.data;
          div.appendChild(h2);
          div.appendChild(h3);
          div.appendChild(h4)
          div.appendChild(hr);
          contatore++;
          setTimeout(() => {
            generaiuti();
          }, 500);
        }else{

            const spinner = document.getElementById("spinner");
           console.log(spinner)
            spinner.classList.toggle("displaynone");
            console.log(spinner)
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
