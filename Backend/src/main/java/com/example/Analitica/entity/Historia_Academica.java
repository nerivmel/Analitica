package com.example.Analitica.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name = "historia_academica")
@EntityListeners(AuditingEntityListener.class)
public class Historia_Academica {
    private long id;
    private Estudiante idEstudiante;
    private Semestre semestre;
    private int promedioSemestre;
    private int acumulado;
    private int tercio;
    private String situacionAcademica;
    private String Estado;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "FKid_estudiante", referencedColumnName = "id", nullable = false)
    public Estudiante getIdEstudiante() {
        return idEstudiante;
    }
    public void setIdEstudiante(Estudiante idEstudiante) {
        this.idEstudiante = idEstudiante;
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "FKsemestre", referencedColumnName = "id", nullable = false)
    public Semestre getSemestre() {
        return semestre;
    }
    public void setSemestre(Semestre semestre) {
        this.semestre = semestre;
    }

    @Column(name = "promedio_semestre", nullable = false)
    public int getPromedioSemestre() {
        return promedioSemestre;
    }
    public void setPromedioSemestre(int promedioSemestre) {
        this.promedioSemestre = promedioSemestre;
    }

    @Column(name = "acumulado", nullable = false)
    public int getAcumulado() {
        return acumulado;
    }
    public void setAcumulado(int acumulado) {
        this.acumulado = acumulado;
    }

    @Column(name = "tercio", nullable = false)
    public int getTercio() {
        return tercio;
    }
    public void setTercio(int tercio) {
        this.tercio = tercio;
    }

    @Column(name = "situacion_academica", nullable = false)
    public String getSituacionAcademica() {
        return situacionAcademica;
    }
    public void setSituacionAcademica(String situacionAcademica) {
        this.situacionAcademica = situacionAcademica;
    }

    @Column(name = "estado", nullable = false)
    public String getEstado() {
        return Estado;
    }
    public void setEstado(String estado) {
        Estado = estado;
    }
}
