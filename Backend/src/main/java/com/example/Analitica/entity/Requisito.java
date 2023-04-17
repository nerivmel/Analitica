package com.example.Analitica.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name = "requisito")
@EntityListeners(AuditingEntityListener.class)
public class Requisito {
    private long id;
    private String tipoRequisito;
    private String estado;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "tipo_requisito", nullable = false)
    public String getTipoRequisito() {
        return tipoRequisito;
    }
    public void setTipoRequisito(String tipoRequisito) {
        this.tipoRequisito = tipoRequisito;
    }

    @Column(name = "estado", nullable = false)
    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }

}


