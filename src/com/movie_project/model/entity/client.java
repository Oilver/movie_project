package com.movie_project.model.entity;

public class client {
    private Integer id;

    private String cliNum;

    private String password;

    private String cliName;

    private Integer phone;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCliNum() {
        return cliNum;
    }

    public void setCliNum(String cliNum) {
        this.cliNum = cliNum == null ? null : cliNum.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getCliName() {
        return cliName;
    }

    public void setCliName(String cliName) {
        this.cliName = cliName == null ? null : cliName.trim();
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }
}