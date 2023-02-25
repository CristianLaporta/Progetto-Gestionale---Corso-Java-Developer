package com.gestionale.gestionale;

import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class GestionaleController {
	 private static UtentiRepository utentiRepository;

	    @Autowired
	    public GestionaleController(UtentiRepository utentiRepository) {
	        this.utentiRepository = utentiRepository;
	    }
	    @PostMapping("/login")
	    public ResponseEntity<String> login(@RequestBody Utenti userLogin) {
	        Optional<Utenti> optionalUser = UtentiRepository.findByEmailAndPassword(userLogin.getEmail(), userLogin.getPassword());

	        if (optionalUser != null && optionalUser.isPresent()) {
	            String token = TokenGenerator.generateToken();
	            Utenti user = optionalUser.get();
	            user.setToken(token);
	            utentiRepository.save(user);
	            return ResponseEntity.ok(token);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
	//rest per creare utenti nel db
		@PostMapping("/creauser")
		public ResponseEntity<Utenti> creaUtente(@RequestBody Utenti nuovoUtente) {
		    try {
		        // Controlla se l'utente esiste già nel database
		        Optional<Utenti> utenteEsistente = utentiRepository.findByEmail(nuovoUtente.getEmail());
		        if (utenteEsistente.isPresent()) {
		            // Se l'utente esiste già, restituisce una bad request
		            return ResponseEntity.badRequest().build();
		        } else {
		            // Genera un nuovo token per l'utente
		            String token = TokenGenerator.generateToken();
		            nuovoUtente.setToken(token);
		            // Salva l'utente nel database
		            Utenti utenteSalvato = utentiRepository.save(nuovoUtente);
		            return ResponseEntity.ok(utenteSalvato);
		        }
		    } catch (Exception e) {
		        // Se c'è un errore, restituisce un internal server error
		        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		    }
		}
}
