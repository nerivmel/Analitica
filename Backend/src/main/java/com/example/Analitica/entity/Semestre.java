package com.example.Analitica.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "semestre")
@EntityListeners(AuditingEntityListener.class)

public class Semestre {
    private long id;
    private String año;
    private String numeroSem;
    private Date fechaInicio;
    private Date fechaFin;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "año", nullable = false)
    public String getAño() {
        return año;
    }
    public void setAño(String año) {
        this.año = año;
    }

    @Column(name = "numero_semestre", nullable = false)
    public String getNumeroSem() {
        return numeroSem;
    }
    public void setNumeroSem(String numeroSem) {
        this.numeroSem = numeroSem;
    }

    @Column(name = "fecha_inicio", nullable = false)
    @Temporal(TemporalType.DATE)
    public Date getFechaInicio() {
        return fechaInicio;
    }
    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    @Column(name = "fecha_fin", nullable = false)
    @Temporal(TemporalType.DATE)
    public Date getFechaFin() {
        return fechaFin;
    }
    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }
}
