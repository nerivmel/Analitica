package com.example.Analitica.entity;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "matricula_semestre")
@EntityListeners(AuditingEntityListener.class)

public class Matricula_Semestre {
    private long id;
    private String valorMatricula;
    private Date fechaVencimiento;
    private Date fechaPago;
    private String creditos;
    private String situacionAcademica;


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "valor_matricula", nullable = false)
    public String getvalorMatricula() {
        return valorMatricula;
    }
    public void setValorMatricula(String valorMatricula) {
        this.valorMatricula = valorMatricula;
    }

    @Column(name = "fecha_vencimiento", nullable = false)
    @Temporal(TemporalType.DATE)
    public Date getFechaVencimiento() {
        return fechaVencimiento;
    }
    public void setFechaVencimiento(Date fechaVencimiento) {
        this.fechaVencimiento = fechaVencimiento;
    }

    @Column(name = "fecha_pago", nullable = false)
    @Temporal(TemporalType.DATE)
    public Date getFechaPago() {
        return fechaPago;
    }
    public void setFechaPago(Date fechaPago) {
        this.fechaPago = fechaPago;
    }

    @Column(name = "creditos", nullable = false)
    public String getCreditos() {
        return creditos;
    }
    public void setCreditos(String creditos) {
        this.creditos = creditos;
    }

    @Column(name = "situacion_academica", nullable = false)
    public String getSituacionAcademica() {
        return situacionAcademica;
    }
    public void setSituacionAcademica(String situacionAcademica) {
        this.situacionAcademica = situacionAcademica;
    }
}
