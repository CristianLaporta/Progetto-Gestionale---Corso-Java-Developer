package com.gestionale.gestionale;
import java.security.SecureRandom;
import java.util.Base64;

public class TokenGenerator {

    private static final int TOKEN_LENGTH = 32;
    private static final SecureRandom RANDOM = new SecureRandom();

    public static String generateToken() {
        //creazione di un array di byte casuali 
    	byte[] randomBytes = new byte[TOKEN_LENGTH];
        RANDOM.nextBytes(randomBytes);
        //codifichiamo gli array in stringhe sicure
        return Base64.getUrlEncoder().withoutPadding().encodeToString(randomBytes);
    }
}