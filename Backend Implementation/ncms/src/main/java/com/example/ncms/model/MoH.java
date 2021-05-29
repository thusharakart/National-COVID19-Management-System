package com.example.ncms.model;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
@Table(name = "moh")
public class MoH {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    private String NIC;
    private String firstName;
    private String lastName;

    public MoH() {
    }

    public MoH(String NIC, String firstName, String lastName) {
        this.NIC = NIC;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNIC() {
        return NIC;
    }

    public void setNIC(String NIC) {
        this.NIC = NIC;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return "MoH{" +
                "id=" + id +
                ", NIC='" + NIC + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
