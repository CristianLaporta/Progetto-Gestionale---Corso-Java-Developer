package com.gestionale.gestionale;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UtentiRepository extends JpaRepository<Utenti, Long> {
    static Optional<Utenti> findByEmailAndPassword(String email, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	Optional<Utenti> findByEmail(String email);
}