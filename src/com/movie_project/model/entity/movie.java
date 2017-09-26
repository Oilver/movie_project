package com.movie_project.model.entity;

import java.util.Date;

public class movie {
    private Integer id;

    private String movName;

    private Double totalScore;

    private String type;

    private Date showtime;

    private Integer runningtime;

    private String director;

    private String actor;

    private String introduction;

    private Integer status;

    private String image;

    private double sumMoney;
    
    public double getSumMoney() {
		return sumMoney;
	}

	public void setSumMoney(double sumMoney) {
		this.sumMoney = sumMoney;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMovName() {
        return movName;
    }

    public void setMovName(String movName) {
        this.movName = movName == null ? null : movName.trim();
    }

    public Double getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(Double totalScore) {
        this.totalScore = totalScore;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public Date getShowtime() {
        return showtime;
    }

    public void setShowtime(Date showtime) {
        this.showtime = showtime;
    }

    public Integer getRunningtime() {
        return runningtime;
    }

    public void setRunningtime(Integer runningtime) {
        this.runningtime = runningtime;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director == null ? null : director.trim();
    }

    public String getActor() {
        return actor;
    }

    public void setActor(String actor) {
        this.actor = actor == null ? null : actor.trim();
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction == null ? null : introduction.trim();
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image == null ? null : image.trim();
    }
}