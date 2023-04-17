package com.example.Analitica.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "estudiante")
@EntityListeners(AuditingEntityListener.class)
public class Estudiante {
    private long id;
    private String tipoDoc;
    private String numeroDoc;
    private String nombre;
    private String telefono;
    private Date fechaNacimiento;
    private String genero;
    private String lugarNacimiento;
    private String domicilio;
    private String etnia;
    private String estrato;
    private String situacionLaboral;


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

    @Column(name = "telefono", nullable = false)
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    @Column(name = "fecha_nacimiento", nullable = false)
    @Temporal(TemporalType.DATE)
    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }
    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    @Column(name = "genero", nullable = false)
    public String getGenero() {
        return genero;
    }
    public void setGenero(String genero) {
        this.genero = genero;
    }

    @Column(name = "lugar_nacimiento", nullable = false)
    public String getLugarNacimiento() {
        return lugarNacimiento;
    }
    public void setLugarNacimiento(String lugarNacimiento) {
        this.lugarNacimiento = lugarNacimiento;
    }

    @Column(name = "domicilio", nullable = false)
    public String getDomicilio() {
        return domicilio;
    }
    public void setDomicilio(String domicilio) {
        this.domicilio = domicilio;
    }

    @Column(name = "etnia", nullable = false)
    public String getEtnia() {
        return etnia;
    }
    public void setEtnia(String etnia) {
        this.etnia = etnia;
    }

    @Column(name = "estrato", nullable = false)
    public String getEstrato() {
        return estrato;
    }
    public void setEstrato(String estrato) {
        this.estrato = estrato;
    }

    @Column(name = "situacion_laboral", nullable = false)
    public String getSituacionLaboral() {
        return situacionLaboral;
    }
    public void setSituacionLaboral(String situacionLaboral) {
        this.situacionLaboral = situacionLaboral;
    }
}
