//recupero i dati del utente
const email = localStorage.getItem("email");
const token = localStorage.getItem("token");
//chiamo il database per chiedere i log che servono per popolare la mia pagina home.html
fetch("http://localhost:3000/log", {
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
      const logDoom = document.querySelector("#movimentid");
      let contatore = 0;
      while (contatore < data.length) {
        let createh3 = document.createElement("h3");
        let createp = document.createElement("p");
        let createHr = document.createElement("hr");
        createh3.textContent = data[contatore].dataora;
        createp.textContent = data[contatore].log;
        logDoom.appendChild(createh3);
        logDoom.appendChild(createp);
        logDoom.appendChild(createHr);
        contatore++;
      }
    }
  })
  .catch((error) => {
    console.log(error);
  });
