package com.example.ncms.model;


import com.sun.istack.NotNull;

import javax.persistence.*;
import java.time.LocalDate;

// To add this class to the database
@Entity      // as an entity
@Table(name = "patient")       // as a table
public class Patient {

    @Id
    @SequenceGenerator(
            name = "patient_sequence",
            sequenceName = "patient_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.IDENTITY,
            generator = "patient_sequence"
    )
    private int serialNo;

    @Column(
            name = "nic",
            nullable = false
    )
    private String nic;

    @Column(
            name = "first_name",
            nullable = false
    )
    private String firstName;

    @Column(
            name = "last_name",
            nullable = false
    )
    private String lastName;

    @Column(
            name = "gender",
            nullable = true
    )
    private String  gender;

    @Column(
            name = "severity_level",
            nullable = true
    )
    private String severityLevel;

    private String district;

    @Column(
            name = "x_cord",
            nullable = false
    )
    private double xCord;

    @Column(
            name = "y_cord",
            nullable = false
    )
    private double yCord;

    private String contact;
    private String email;
    private int age;
    private LocalDate admitDate;
    private String admittedBy;
    private LocalDate dischargedDate;
    private String dischargedBy;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "hospital_id",
                nullable = false,
                referencedColumnName = "id",
                foreignKey = @ForeignKey(
                        name = "hospital_patient_fk"
                )
    )
    private Hospital hospital;

    private int bedNo;

    public Patient() {
    }

    public Patient(int serialNo,
                   String nic,
                   String firstName,
                   String lastName,
                   String gender,
                   String severityLevel,
                   String district,
                   double xCord,
                   double yCord,
                   String contact,
                   String email,
                   int age,
                   LocalDate admitDate,
                   String admittedBy,
                   LocalDate dischargedDate,
                   String dischargedBy,
                   Hospital hospital,
                   int bedNo) {
        this.serialNo = serialNo;
        this.nic = nic;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.severityLevel = severityLevel;
        this.district = district;
        this.xCord = xCord;
        this.yCord = yCord;
        this.contact = contact;
        this.email = email;
        this.age = age;
        this.admitDate = admitDate;
        this.admittedBy = admittedBy;
        this.dischargedDate = dischargedDate;
        this.dischargedBy = dischargedBy;
        this.hospital = hospital;
        this.bedNo = bedNo;
    }

    public Patient(String nic,
                   String firstName,
                   String lastName,
                   String gender,
                   String severityLevel,
                   String district,
                   double xCord,
                   double yCord,
                   String contact,
                   String email,
                   int age,
                   LocalDate admitDate,
                   String admittedBy,
                   LocalDate dischargedDate,
                   String dischargedBy,
                   Hospital hospital,
                   int bedNo) {
        this.nic = nic;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.severityLevel = severityLevel;
        this.district = district;
        this.xCord = xCord;
        this.yCord = yCord;
        this.contact = contact;
        this.email = email;
        this.age = age;
        this.admitDate = admitDate;
        this.admittedBy = admittedBy;
        this.dischargedDate = dischargedDate;
        this.dischargedBy = dischargedBy;
        this.hospital = hospital;
        this.bedNo = bedNo;
    }

    public int getSerialNo() {
        return serialNo;
    }

    public void setSerialNo(int serialNo) {
        this.serialNo = serialNo;
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

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getSeverityLevel() {
        return severityLevel;
    }

    public void setSeverityLevel(String severityLevel) {
        this.severityLevel = severityLevel;
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

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public LocalDate getAdmitDate() {
        return admitDate;
    }

    public void setAdmitDate(LocalDate admitDate) {
        this.admitDate = admitDate;
    }

    public String getAdmittedBy() {
        return admittedBy;
    }

    public void setAdmittedBy(String admittedBy) {
        this.admittedBy = admittedBy;
    }

    public LocalDate getDischargedDate() {
        return dischargedDate;
    }

    public void setDischargedDate(LocalDate dischargedDate) {
        this.dischargedDate = dischargedDate;
    }

    public String getDischargedBy() {
        return dischargedBy;
    }

    public void setDischargedBy(String dischargedBy) {
        this.dischargedBy = dischargedBy;
    }

    public Hospital getHospital() {
        return hospital;
    }

    public void setHospital(Hospital hospital) {
        this.hospital = hospital;
    }

    public int getBedNo() {
        return bedNo;
    }

    public void setBedNo(int bedNo) {
        this.bedNo = bedNo;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "serialNo=" + serialNo +
                ", nic='" + nic + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", gender='" + gender + '\'' +
                ", severityLevel='" + severityLevel + '\'' +
                ", district='" + district + '\'' +
                ", xCord=" + xCord +
                ", yCord=" + yCord +
                ", contact='" + contact + '\'' +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", admitDate=" + admitDate +
                ", admittedBy='" + admittedBy + '\'' +
                ", dischargedDate=" + dischargedDate +
                ", dischargedBy='" + dischargedBy + '\'' +
                ", hospital=" + hospital +
                ", bedNo=" + bedNo +
                '}';
    }
}
