package com.gestionale.gestionale;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ultimeoperazioni")
public class Ultimeoperazioni {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String log;
private String dataora;
}
