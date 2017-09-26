package com.movie_project.model.entity;

import java.util.Date;

public class sessions {
    private Integer id;

    private Integer movId;

    private Integer screensId;

    private Date startDate;

    private Double price;

    private String view;

    private Integer totalSold;

    private Date endTime;

    private Date startTime;
    
    private movie movie;
    
    public movie getMovie() {
		return movie;
	}

	public void setMovie(movie movie) {
		this.movie = movie;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getMovId() {
        return movId;
    }

    public void setMovId(Integer movId) {
        this.movId = movId;
    }

    public Integer getScreensId() {
        return screensId;
    }

    public void setScreensId(Integer screensId) {
        this.screensId = screensId;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getView() {
        return view;
    }

    public void setView(String view) {
        this.view = view == null ? null : view.trim();
    }

    public Integer getTotalSold() {
        return totalSold;
    }

    public void setTotalSold(Integer totalSold) {
        this.totalSold = totalSold;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }
}