package com.example.Analitica.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name = "grupos")
@EntityListeners(AuditingEntityListener.class)
public class Grupos {
    private long id;
    private String cupos;
    private String horarios;
    private String aula;
    private Semestre semestre;
    private Materias codigoMateria;
    private Profesores idProfesor;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "cupos", nullable = false)
    public String getCupos() {
        return cupos;
    }
    public void setCupos(String cupos) {
        this.cupos = cupos;
    }

    @Column(name = "horarios", nullable = false)
    public String getHorarios() {
        return horarios;
    }
    public void setHorarios(String horarios) {
        this.horarios = horarios;
    }

    @Column(name = "aula", nullable = false)
    public String getAula() {
        return aula;
    }
    public void setAula(String aula) {
        this.aula = aula;
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "FKsemestre", referencedColumnName = "id", nullable = false)
    public Semestre getSemestre() {
        return semestre;
    }
    public void setSemestre(Semestre semestre) {
        this.semestre = semestre;
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "FKcodigo_materia", referencedColumnName = "id", nullable = false)
    public Materias getCodigoMateria() {
        return codigoMateria;
    }
    public void setCodigoMateria(Materias codigoMateria) {
        this.codigoMateria = codigoMateria;
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "FKid_profesor", referencedColumnName = "id", nullable = false)
    public Profesores getIdProfesor() {
        return idProfesor;
    }
    public void setIdProfesor(Profesores idProfesor) {
        this.idProfesor = idProfesor;
    }
}
