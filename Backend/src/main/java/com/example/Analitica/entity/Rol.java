package com.example.Analitica.entity;
import com.example.Analitica.nums.RolName;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Rol {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private int id;

    @NotNull
    //Se indica que va a ser un Enum de tipo String
    @Enumerated(EnumType.STRING)
    private RolName rolName;
    public Rol() {
    }
    public Rol(@NotNull RolName rolName) {
        this.rolName = rolName;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public RolName getRolName() {
        return rolName;
    }
    public void setRolName(RolName rolName) {
        this.rolName = rolName;
    }
}
