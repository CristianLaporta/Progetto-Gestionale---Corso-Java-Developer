const div = document.getElementById("aiuto");
const email = localStorage.getItem("email");
const token = localStorage.getItem("token");
function reset(){
div.value = ""
}
function invia(){
    fetch("http://localhost:3000/inviasos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          token: token,
          reclamo:div.value
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
          alert("Richiesta inviata con successo! verrai contattato il prima possibile da un Amministratore!");
          div.value = "";
          }
        })
        .catch((error) => {
          console.log(error);
        });
}