package com.example.Analitica.entity;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;

@Entity
@Table(name = "alumnos_grupos")
@EntityListeners(AuditingEntityListener.class)
public class Alumnos_Grupos {

    private long id;
    private String notaCurso;
    private Matricula_Semestre matriculaSemestre;
    private String tipoNota;
    private String estado;
    private Grupos idGrupo;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "nota_curso", nullable = false)
    public String getNotaCurso() {
        return notaCurso;
    }
    public void setNotaCurso(String notaCurso) {
        this.notaCurso = notaCurso;
    }

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name = "FKnumero_matricula", referencedColumnName = "id", nullable = false)
    public Matricula_Semestre getMatriculaSemestre() {
        return matriculaSemestre;
    }
    public void setMatriculaSemestre(Matricula_Semestre matriculaSemestre) {
        this.matriculaSemestre = matriculaSemestre;
    }

    @Column(name = "tipo_nota", nullable = false)
    public String getTipoNota() {
        return tipoNota;
    }
    public void setTipoNota(String tipoNota) {
        this.tipoNota = tipoNota;
    }

    @Column(name = "estado", nullable = false)
    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name = "FKid_grupo",referencedColumnName = "id", nullable = false)
    public Grupos getIdGrupo() {
        return idGrupo;
    }
    public void setIdGrupo(Grupos idGrupo) {
        this.idGrupo = idGrupo;
    }



}
