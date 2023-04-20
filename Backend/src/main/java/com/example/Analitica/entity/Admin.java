package com.example.Analitica.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

/**
 * Clase para la base de datos
 */
@Entity
public class Admin {
    //Id de la tabla
    @Id
    //Id Auto Increment
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAdmin;
    //Decorador para indicar que no puede ser null el campo
    @NotNull
    private String nombre;
    @NotNull
    @Column(unique = true)
    private String apellidos;
    @NotNull
    @Column(unique = true)
    private String email;
    @NotNull
    private String password;

    @NotNull
    //Relación many to many
    //Un usuario puede tener MUCHOS roles y un rol puede PERTENECER a varios usuarios
    //Tabla intermedia que tiene dos campos que va a tener idAdmin y idRol
    @ManyToMany
    // join columns hace referencia a la columna que hace referencia hacia esta
    // Es decir la tabla usuario_rol va a tener un campo que se llama id_usuario
    // inverseJoinColumns = el inverso, hace referencia a rol
    @JoinTable(name = "admin_rol", joinColumns = @JoinColumn(name = "id_admin"),
            inverseJoinColumns = @JoinColumn(name = "rol_id"))
    private Set<Rol> roles = new HashSet<>();

    public Admin() {
    }

    //Constuctor sin Id ni Roles
    public Admin(@NotNull String nombre,
                   @NotNull String apellidos,
                   @NotNull String email,
                   @NotNull String password) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
    }

    public int getIdAdmin() {
        return idAdmin;
    }

    public void setIdAdmin(int idAdmin) {
        this.idAdmin = idAdmin;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getAdmin() {
        return apellidos;
    }

    public void setAdmin(String admin) {
        this.apellidos = admin;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Rol> getRoles() {
        return roles;
    }

    public void setRoles(Set<Rol> roles) {
        this.roles = roles;
    }
}
