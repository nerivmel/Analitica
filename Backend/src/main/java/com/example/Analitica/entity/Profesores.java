package com.example.Analitica.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name = "profesores")
@EntityListeners(AuditingEntityListener.class)

public class Profesores {
    private long id;
    private String tipoDoc;
    private String numeroDoc;
    private String nombre;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "tipo_doc", nullable = false)
    public String getTipoDoc() {
        return tipoDoc;
    }
    public void setTipoDoc(String tipoDoc) {
        this.tipoDoc = tipoDoc;
    }

    @Column(name = "numero_doc", nullable = false)
    public String getNumeroDoc() {
        return numeroDoc;
    }
    public void setNumeroDoc(String numeroDoc) {
        this.numeroDoc = numeroDoc;
    }

    @Column(name = "nombre", nullable = false)
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
