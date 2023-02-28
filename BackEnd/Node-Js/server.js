//ho importato la libreria express che mi serve per il corretto funzionamento del nostro server node js.
const express = require("express"); // ricorda di usare il comando npm install express per scaricare la libreria.
//importo mysql per comunicare con il database
const mysql = require("mysql"); // ricorda di usare il comando npm install mysql per scaricare la libreria.
//importo cors per risolvere eventuali problemi di sicurezza che potrebbero bloccare le richieste http.
const cors = require("cors"); // ricorda di usare il comando npm install cors per saricare la libreria.
//importo il bodyparser che mi servirà per ricevere informazioni dal front end con le chiamate post.
const bodyParser = require("body-parser"); //ricorda di usare il comando npm install body-parser per scaricare la libreria.
//dichiaro una variabile app con al interno express in modo da utilizzarla in ogni operazione che io andò ad eseguire.
const app = express();
// indico ad express di utilizzare la libreria cors
app.use(cors());
//indico ad express di utilizzare la libreria body parser
app.use(bodyParser.json());
// creo la configurazione per inserire i dati del nostro server mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gestionale",
});
//creo una costante con la porta che utilizzerà il nostro server node.js
const port = 3000;
//importo la libreria per generare dei token
var TokenGenerator = require("uuid-token-generator"); // ricorda di usare il comando npm install uuid-token-generator per scaricare la libreria.
const token2 = new TokenGenerator(256, TokenGenerator.BASE62); // serve per settare la libreria che genera i token, in questo caso 256 sono i caratteri e base62 e il tipo di codifica

//creo un api get che mi restiusice tutti i log della mia app
app.post("/log", (req, res) => {
  //chiediamo al database se esiste un utente con email specificata da front end e con token specificata dal front end.
  connection.query(
    "SELECT * FROM utenti WHERE email = '" +
      req.body.email +
      "' AND token = '" +
      req.body.token +
      "' ",
    function (err, risposta) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
      if (risposta.length == 0) {
        res.json(false);
      } else {
        //creo una richiesta al database inserendo una query che mi cerca ciò che voglio
        connection.query(
          "SELECT * FROM `ultimeoperazioni`ORDER BY id DESC ",
          function (err, risposta) {
            if (err) {
              console.log(
                "ci sono degli errori nella ricerca degli utenti. errore: " +
                  err
              );
            }
            res.json(risposta);
          }
        );
      }
    }
  );
});

//creo una chiama post per verificare se l'utente esiste nel database
app.post("/login", (req, res) => {
  //chiediamo al database se esiste un utente con email specificata da front end e con password specificata dal front end.
  connection.query(
    "SELECT * FROM utenti WHERE email = '" +
      req.body.email +
      "' AND password = '" +
      req.body.password +
      "' ",
    function (err, risposta) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
      if (risposta.length != 0) {
        let token = token2.generate();
        connection.query(
          "UPDATE `utenti` SET `token` = '" +
            token +
            "' WHERE `utenti`.`email` = '" +
            req.body.email +
            "'",
          function (err, risposta2) {
            log(
              undefined,
              "login",
              risposta[0].nome + " " + risposta[0].cognome
            );
            res.json(token);
          }
        );
      } else {
        res.json([]);
      }
    }
  );
});

//creo una chiama post per verificare se il token del utente è valido , e spedisco le informazioni qualora sia tutto ok
app.post("/verifica", (req, res) => {
  //chiediamo al database se esiste un utente con email specificata da front end e con password specificata dal front end.
  connection.query(
    "SELECT * FROM utenti WHERE email = '" +
      req.body.email +
      "' AND token = '" +
      req.body.token +
      "' ",
    function (err, risposta) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
      if (risposta.length == 0) {
        res.json(false);
      } else {
        risposta[0].password = undefined;
        risposta[0].token = undefined;
        risposta[0].id = undefined;
        res.json(risposta);
      }
    }
  );
});

//creo un api post che mi restiusice tutti gli utenti della mia app
app.post("/user", (req, res) => {
  //chiediamo al database se esiste un utente con email specificata da front end e con token specificata dal front end.
  connection.query(
    "SELECT * FROM utenti WHERE email = '" +
      req.body.email +
      "' AND token = '" +
      req.body.token +
      "' ",
    function (err, risposta) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
      if (risposta.length == 0) {
        res.json(false);
      } else {
        //creo una richiesta al database inserendo una query che mi cerca ciò che voglio
        connection.query(
          "SELECT * FROM `utenti`ORDER BY id DESC ",
          function (err, risposta) {
            if (err) {
              console.log(
                "ci sono degli errori nella ricerca degli utenti. errore: " +
                  err
              );
            }
            risposta[0].password = undefined;
            risposta[0].token = undefined;
            res.json(risposta);
          }
        );
      }
    }
  );
});

//creo un api post che mi restiusice tutti i prodotti aggiunti nella pagina web
app.post("/prodotti", (req, res) => {
  //chiediamo al database se esiste un utente con email specificata da front end e con token specificata dal front end.
  connection.query(
    "SELECT * FROM utenti WHERE email = '" +
      req.body.email +
      "' AND token = '" +
      req.body.token +
      "' ",
    function (err, risposta) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
      if (risposta.length == 0) {
        res.json(false);
      } else {
        //creo una richiesta al database inserendo una query che mi cerca ciò che voglio
        connection.query(
          "SELECT * FROM `movimenti` ORDER BY id DESC ",
          function (err, risposta2) {
            if (err) {
              console.log(
                "ci sono degli errori nella ricerca degli utenti. errore: " +
                  err
              );
            }
            res.json(risposta2);
          }
        );
      }
    }
  );
});
//creo un api post che mi restiusice tutti i prodotti aggiunti nella pagina web
app.post("/inviasos", (req, res) => {
  //chiediamo al database se esiste un utente con email specificata da front end e con token specificata dal front end.
  connection.query(
    "SELECT * FROM utenti WHERE email = '" +
      req.body.email +
      "' AND token = '" +
      req.body.token +
      "' ",
    function (err, risposta) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
      if (risposta.length == 0) {
        res.json(false);
      } else {
        //creo una richiesta al database inserendo una query che mi cerca ciò che voglio
        connection.query(
          "INSERT INTO `aiuto` (`id`, `reclamo`, `idutente`, `data`) VALUES (NULL, '" +
            req.body.reclamo +
            "', '" +
            risposta[0].id +
            "', current_timestamp()); ",
          function (err, risposta2) {
            if (err) {
              console.log(
                "ci sono degli errori nella ricerca degli utenti. errore: " +
                  err
              );
            }
            res.json(true);
          }
        );
      }
    }
  );
});

//creo un api post che mi permette di creare dei reclami
app.post("/aiuto", (req, res) => {
  //chiediamo al database se esiste un utente con email specificata da front end e con token specificata dal front end.
  connection.query(
    "SELECT * FROM utenti WHERE email = '" +
      req.body.email +
      "' AND token = '" +
      req.body.token +
      "' ",
    function (err, risposta) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
      if (risposta.length == 0) {
        res.json("false");
      } else {
        if (risposta[0].admin == "true") {
          console.log("sono entrato nel true");
          //creo una richiesta al database inserendo una query che mi cerca ciò che voglio
          connection.query(
            "SELECT * FROM `aiuto` ORDER BY id DESC LIMIT 1 OFFSET " +
              req.body.ciclo,
            function (err, risposta2) {
              if (err) {
                console.log(
                  "ci sono degli errori nella ricerca degli utenti. errore: " +
                    err
                );
              }
              if (risposta2.length != 0) {
                connection.query(
                  "SELECT * FROM `utenti` WHERE id = " + risposta2[0].idutente,
                  function (err, risposta3) {
                    if (err) {
                      console.log(
                        "ci sono degli errori nella ricerca degli utenti. errore: " +
                          err
                      );
                    }
                    let rispos = {
                      nome: risposta3[0].nome,
                      cognome: risposta3[0].cognome,
                      email: risposta3[0].email,
                      data: risposta2[0].data,
                      reclamo: risposta2[0].reclamo,
                    };
                    res.json(rispos);
                  }
                );
              } else {
                res.json("fine");
              }
            }
          );
        } else {
          res.json("false");
        }
      }
    }
  );
});

//creo un api post che mi permette di avere la length aggiornata
app.post("/aiutol", (req, res) => {
  //chiediamo al database se esiste un utente con email specificata da front end e con token specificata dal front end.
  connection.query(
    "SELECT * FROM utenti WHERE email = '" +
      req.body.email +
      "' AND token = '" +
      req.body.token +
      "' ",
    function (err, risposta) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
      if (risposta.length == 0) {
        res.json("false");
      } else {
        if (risposta[0].admin == "true") {
          connection.query("SELECT * FROM `aiuto` ", function (err, risposta2) {
            if (err) {
              console.log(
                "ci sono degli errori nella ricerca degli utenti. errore: " +
                  err
              );
            }
            res.json(risposta2.length);
          });
        } else {
          res.json("false");
        }
      }
    }
  );
});

//creo un api post che mi elimina un utente
app.delete("/eliminauser", (req, res) => {
  //chiediamo al database se esiste un utente con email specificata da front end e con token specificata dal front end.
  connection.query(
    "SELECT * FROM utenti WHERE email = '" +
      req.body.email +
      "' AND token = '" +
      req.body.token +
      "' ",
    function (err, risposta2) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
      if (risposta2.length == 0) {
        res.json(false);
      } else {
        if (risposta2[0].admin == "true") {
          //creo una richiesta al database inserendo una query che mi cerca ciò che voglio
          connection.query(
            "DELETE FROM utenti WHERE `utenti`.`id` = " + req.body.idutenteel,
            function (err, risposta1) {
              if (err) {
                console.log(
                  "ci sono degli errori nella ricerca degli utenti. errore: " +
                    err
                );
              }

              log(
                req.body.idutenteel,
                "eliminatoutente",
                risposta2[0].nome + " " + risposta2[0].cognome
              );
              res.json(true);
            }
          );
        } else {
          res.json(false);
        }
      }
    }
  );
});

//creo un api post che mi elimina un utente
app.delete("/eliminaprodotto", (req, res) => {
  //chiediamo al database se esiste un utente con email specificata da front end e con token specificata dal front end.
  connection.query(
    "SELECT * FROM utenti WHERE email = '" +
      req.body.email +
      "' AND token = '" +
      req.body.token +
      "' ",
    function (err, risposta2) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
      if (risposta2.length == 0) {
        res.json(false);
      } else {
        //selezionato la tabella che vogliamo eliminare in modo da recuperare l'email prima di elimarla effetiamente.
        connection.query(
          "SELECT * FROM `movimenti` WHERE id = " + req.body.idelimina,
          function (err, risposta3) {
            if (risposta3.length != 0) {
              if (
                risposta3[0].creatore == req.body.email ||
                risposta2[0].admin == "true"
              ) {
                connection.query(
                  "DELETE FROM movimenti WHERE `movimenti`.`id` = " +
                    risposta3[0].id,
                  function (err, risposta4) {
                    log(
                      risposta3[0].descrizione,
                      "eliminatomovimento",
                      risposta2[0].nome + " " + risposta2[0].cognome
                    );
                    res.json(true);
                  }
                );
              } else {
                res.json(false);
              }
            } else {
              res.json(false);
            }
          }
        );
      }
    }
  );
});

//creo un api put per le impostazioni
app.put("/impostazioni", (req, res) => {
  //chiediamo al database se esiste un utente con email specificata da front end e con token specificata dal front end.
  connection.query(
    "SELECT * FROM utenti WHERE email = '" +
      req.body.email +
      "' AND token = '" +
      req.body.token +
      "' ",
    function (err, risposta2) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
      if (risposta2.length == 0) {
        res.json(false);
      } else {
        connection.query(
          "UPDATE `utenti` SET `nome` = '" +
            req.body.name +
            "', `cognome` = '" +
            req.body.surname +
            "', `email` = '" +
            req.body.email2 +
            "', `linkImgProfile` = '" +
            req.body.imgprofile +
            "', `telefono` = '" +
            req.body.tel +
            "' WHERE `utenti`.`id` = " +
            risposta2[0].id +
            ";",
          function (err, risposta2) {
            if (err) {
              res.json("errore");
            } else {
              res.json(true);
            }
          }
        );
      }
    }
  );
});

//creo un api post che modifica gli utenti
app.put("/modificautente", (req, res) => {
  //chiediamo al database se esiste un utente con email specificata da front end e con token specificata dal front end.
  connection.query(
    "SELECT * FROM utenti WHERE email = '" +
      req.body.email +
      "' AND token = '" +
      req.body.token +
      "' ",
    function (err, risposta2) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
      if (risposta2.length == 0) {
        res.json(false);
      } else {
        if (risposta2[0].admin == "true") {
          connection.query(
            "UPDATE `utenti` SET `nome` = '" +
              req.body.nome2 +
              "', `cognome` = '" +
              req.body.cognome2 +
              "', `email` = '" +
              req.body.email2 +
              "', `telefono` = '" +
              req.body.telefono2 +
              "' WHERE `utenti`.`id` = " +
              req.body.id2 +
              ";",
            function (err, risposta3) {
              if (err) {
                res.json(err);
              } else {
                cambiamail(req.body.semail, req.body.email2);
                res.json(true);
              }
            }
          );
        } else {
          res.json("noadmin");
        }
      }
    }
  );
});

//creo un api post che modifica gli utenti
app.put("/modificaprodotto", (req, res) => {
  //chiediamo al database se esiste un utente con email specificata da front end e con token specificata dal front end.
  connection.query(
    "SELECT * FROM utenti WHERE email = '" +
      req.body.email +
      "' AND token = '" +
      req.body.token +
      "' ",
    function (err, risposta2) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
      if (risposta2.length == 0) {
        res.json(false);
      } else {
        connection.query(
          "SELECT * FROM `movimenti` WHERE id = '" + req.body.ids + "'",
          function (err, risposta3) {
            if (
              risposta2[0].email == risposta3[0].creatore ||
              risposta2[0].admin == "true"
            ) {
              if (risposta2.length != 0) {
                console.log(req.body.descrizione);
                connection.query(
                  "UPDATE `movimenti` SET `data` = '" +
                    req.body.data +
                    "', `descrizione` = '" +
                    req.body.descrizione +
                    "', `importo` = '" +
                    req.body.importo +
                    "', `tipo` = '" +
                    req.body.radius +
                    "' WHERE `movimenti`.`id` = '" +
                    req.body.ids +
                    "';",
                  function (err, risposta2) {
                    res.json(true);
                  }
                );
              }
            } else {
              res.json("nopermessi");
            }
          }
        );
      }
    }
  );
});

//creo un api post che modifica gli utenti
app.post("/aggiungiprodotto", (req, res) => {
  //chiediamo al database se esiste un utente con email specificata da front end e con token specificata dal front end.
  connection.query(
    "SELECT * FROM utenti WHERE email = '" +
      req.body.email +
      "' AND token = '" +
      req.body.token +
      "' ",
    function (err, risposta2) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
      if (risposta2.length == 0) {
        res.json(false);
      } else {
        connection.query(
          "INSERT INTO `movimenti` (`id`, `data`, `descrizione`, `importo`, `tipo`, `creatore`, `nome`) VALUES (NULL, '" +
            req.body.data +
            "', '" +
            req.body.descrizione +
            "', '" +
            req.body.importo +
            "', '" +
            req.body.radius +
            "', '" +
            risposta2[0].email +
            "', '" +
            risposta2[0].nome +
            " " +
            risposta2[0].cognome +
            "');",
          function (err, risposta2) {
            res.json(true);
          }
        );
      }
    }
  );
});

//metto in ascolto il nostro server node js in modo tale che quando avvio il server rimane avviato e risponde alle richieste.
// *** ricorda** app listen deve essere sempre in basso come ultima riga.
app.listen(port, () => {
  console.log(
    "ho startato correttamente il tuo server node js con la porta " + port
  );
});

//funzioni javascript

//funzione javascript per creare un log.
function log(messaggio, operazione, nome) {
  let testop = messaggio;
  //if per creare la frase corretta nel caso ci fosse un login.
  if (operazione == "login") {
    testop = nome + " ha effetuato un accesso al portale.";
  } else if (operazione == "eliminatoutente") {
    testop = nome + " ha eliminato un utente con id " + messaggio;
  } else if (operazione == "eliminatomovimento") {
    testop = nome + " ha eliminato un movimento contenente: " + messaggio;
  }
  connection.query(
    "INSERT INTO `ultimeoperazioni` (`id`, `dataora`, `log`) VALUES (NULL, current_timestamp(), '" +
      testop +
      "');",
    function (err, risposta) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
    }
  );
}

function cambiamail(emailvecchia, emailnuova) {
  connection.query(
    "UPDATE `movimenti` SET `creatore` = '" +
      emailnuova +
      "' WHERE `movimenti`.`creatore` = '" +
      emailvecchia +
      "';",
    function (err, risposta) {
      //se si crea un errore, allora stampa in console un messaggio
      if (err) {
        console.log(
          "ci sono degli errori nella ricerca degli utenti. errore: " + err
        );
      }
    }
  );
}
