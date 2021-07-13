package com.example.ncms.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data

@Entity
@Table(name = "hospital")
public class Hospital {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String district;
    private double xCord;
    private double yCord;
    private LocalDate buildDate;
    private int availBeds;

    @JsonIgnore
    @OneToMany(
            mappedBy = "hospital",
            orphanRemoval = true,
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
            fetch = FetchType.LAZY
    )
    private List<Patient> patients = new ArrayList<>();

    @ManyToMany(mappedBy = "hospitals")
    private Set<Doctor> doctors = new HashSet<>();

    public Hospital() {
    }

    public Hospital(String name,
                    String district,
                    double xCord,
                    double yCord,
                    LocalDate buildDate,
                    int availBeds,
                    List<Patient> patients,
                    Set<Doctor> doctors) {
        this.name = name;
        this.district = district;
        this.xCord = xCord;
        this.yCord = yCord;
        this.buildDate = buildDate;
        this.availBeds = availBeds;
        this.patients = patients;
        this.doctors = doctors;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
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

    public LocalDate getBuildDate() {
        return buildDate;
    }

    public void setBuildDate(LocalDate buildDate) {
        this.buildDate = buildDate;
    }

    public int getAvailBeds() {
        return availBeds;
    }

    public void setAvailBeds(int availBeds) {
        this.availBeds = availBeds;
    }

    public List<Patient> getPatients() {
        return patients;
    }

    public void setPatients(List<Patient> patients) {
        this.patients = patients;
    }

    public Set<Doctor> getDoctors() {
        return doctors;
    }

    public void setDoctors(Set<Doctor> doctors) {
        this.doctors = doctors;
    }

    @Override
    public String toString() {
        return "Hospital{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", district='" + district + '\'' +
                ", xCord=" + xCord +
                ", yCord=" + yCord +
                ", buildDate=" + buildDate +
                ", availBeds=" + availBeds +
                ", patients=" + patients +
                ", doctors=" + doctors +
                '}';
    }

    public void addPatient(Patient patient) {
        if (!this.patients.contains(patient)) {
            this.patients.add(patient);
            patient.setHospital(this);
        }
    }

    public void removePatient(Patient patient) {
        if (this.patients.contains(patient)) {
            this.patients.remove(patient);
            patient.setHospital(null);
        }
    }
}
