package com.gestionale.gestionale;

import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class GestionaleController {
	 private static UtentiRepository utentiRepository;

	    @Autowired
	    public GestionaleController(UtentiRepository utentiRepository) {
	        this.utentiRepository = utentiRepository;
	    }
	    //login del app
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
		//rest per eliminare un utente
		 @DeleteMapping("/eliminauser/{id}")
		    public ResponseEntity<String> eliminaUtente(@PathVariable("id") Long idUtente) {
		        try {
		            Optional<Utenti> utenteDaEliminare = utentiRepository.findById(idUtente);
		            if (utenteDaEliminare.isPresent()) {
		                utentiRepository.delete(utenteDaEliminare.get());
		                return ResponseEntity.ok("Utente eliminato con successo");
		            } else {
		                return ResponseEntity.notFound().build();
		            }
		        } catch (Exception e) {
		            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		        }
		    }
		 
		 //post per modificare l'utente
		  @PutMapping("/modificautente")
		    public ResponseEntity<?> modificaUtente(@RequestBody Utenti utenteModificato) {
		        Optional<Utenti> optionalUtente = utentiRepository.findById(utenteModificato.getId());
		        if (optionalUtente.isEmpty()) {
		            return ResponseEntity.notFound().build();
		        }
		        Utenti utente = optionalUtente.get();
		        if (!utente.getEmail().equals(utenteModificato.getEmail()) || !utente.getToken().equals(utenteModificato.getToken())) {
		            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		        }
		        if (utente.isAdmin()) {
		            utente.setNome(utenteModificato.getNome());
		            utente.setCognome(utenteModificato.getCognome());
		            utente.setEmail(utenteModificato.getEmail());
		            utente.setTelefono(utenteModificato.getTelefono());
		            utentiRepository.save(utente);
		            return ResponseEntity.ok(true);
		        } else {
		            return ResponseEntity.ok("noadmin");
		        }
		    }
		
}
