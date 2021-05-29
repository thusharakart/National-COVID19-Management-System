package com.example.ncms.model;

import com.sun.istack.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@EqualsAndHashCode(exclude = "hospitals")

@Entity
@Table(name = "doctor")
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @NotNull
    private String nic;

    private String firstName;
    private String lastName;
    private double xCord;
    private double yCord;
    private String membershipId;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "hospital_doctor",
            joinColumns = @JoinColumn(
                    name = "doctor_id",
                    referencedColumnName = "id",
                    foreignKey = @ForeignKey(
                            name = "hospital_doctor_fk"
                    )
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "hospital_id",
                    referencedColumnName = "id",
                    foreignKey = @ForeignKey(
                            name = "hospital_doctor_inv_fk"
                    )
            )
    )
    private Set<Hospital> hospitals = new HashSet<>();

    public Doctor() {
    }

    public Doctor(String nic,
                  String firstName,
                  String lastName,
                  double xCord,
                  double yCord,
                  String membershipId,
                  Set<Hospital> hospitals) {
        this.nic = nic;
        this.firstName = firstName;
        this.lastName = lastName;
        this.xCord = xCord;
        this.yCord = yCord;
        this.membershipId = membershipId;
        this.hospitals = hospitals;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
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

    public double getxCord() {
        return xCord;
    }

    public void setxCord(double xCord) {
        this.xCord = xCord;
    }

    public double getyCord() {
        return yCord;
    }

    public void setyCord(double yCord) {
        this.yCord = yCord;
    }

    public String getMembershipId() {
        return membershipId;
    }

    public void setMembershipId(String membershipId) {
        this.membershipId = membershipId;
    }

    public Set<Hospital> getHospitals() {
        return hospitals;
    }

    public void setHospitals(Set<Hospital> hospitals) {
        this.hospitals = hospitals;
    }

    @Override
    public String toString() {
        return "Doctor{" +
                "id=" + id +
                ", nic='" + nic + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", xCord=" + xCord +
                ", yCord=" + yCord +
                ", membershipId='" + membershipId + '\'' +
                ", hospitals=" + hospitals +
                '}';
    }
}
