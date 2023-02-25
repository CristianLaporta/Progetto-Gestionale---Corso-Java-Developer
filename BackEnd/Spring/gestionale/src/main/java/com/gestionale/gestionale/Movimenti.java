package com.gestionale.gestionale;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "movimenti")
public class Movimenti {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String data;
private String descrizione;
private String importo;
private String tipo;
private String creatore;
private String nome;
}
