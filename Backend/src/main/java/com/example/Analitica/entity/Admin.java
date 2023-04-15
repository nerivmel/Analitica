package com.example.Analitica.entity;

        import jakarta.persistence.*;

        import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "admins")
@EntityListeners(AuditingEntityListener.class)
public class Admin {

    private long id;
    private String firstName;
    private String emailId;
    private String password;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "first_name", nullable = false)
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Column(name = "email_address", nullable = false)
    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    @Column(name = "password", nullable = false)
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

}