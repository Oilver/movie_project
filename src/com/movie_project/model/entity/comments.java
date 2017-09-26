package com.movie_project.model.entity;

import java.util.Date;

public class comments {
    private Integer id;

    private Integer cliId;

    private Integer sesId;

    private Integer score;

    private String comment;

    private Date time;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCliId() {
        return cliId;
    }

    public void setCliId(Integer cliId) {
        this.cliId = cliId;
    }

    public Integer getSesId() {
        return sesId;
    }

    public void setSesId(Integer sesId) {
        this.sesId = sesId;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment == null ? null : comment.trim();
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}