package com.example.Analitica.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "planes_estudio")
@EntityListeners(AuditingEntityListener.class)
public class Planes_Estudio {
        private long id;
        private String version;
        private Date fechaAprobacion;
        private Date fechaFinVigencia;

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        public long getId() {
                return id;
        }
        public void setId(long id) {
                this.id = id;
        }

        @Column(name = "version", nullable = false)
        public String getVersion() {
                return version;
        }
        public void setVersion(String version) {
                this.version = version;
        }

        @Column(name ="fecha_aprobacion", nullable = false)
        @Temporal(TemporalType.DATE)
        public Date getFechaAprobacion() {
                return fechaAprobacion;
        }
        public void setFechaAprobacion(Date fechaAprobacion) {
                this.fechaAprobacion = fechaAprobacion;
        }

        @Column(name ="fecha_fin_vigencia", nullable = false)
        @Temporal(TemporalType.DATE)
        public Date getFechaFinVigencia() {
                return fechaFinVigencia;
        }
        public void setFechaFinVigencia(Date fechaFinVigencia) {
                this.fechaFinVigencia = fechaFinVigencia;
        }
}
