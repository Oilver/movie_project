package com.movie_project.model.entity;

import java.sql.Date;

public class orders {
    private Integer id;

    private Integer cliId;

    private Integer sesId;

    private Date orderTime;

    private Integer rowId;

    private Integer columnId;
    
    //一对一映射
    private sessions sessions;

	public sessions getSessions() {
		return sessions;
	}

	public void setSessions(sessions sessions) {
		this.sessions = sessions;
	}
	
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

    public Date getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(Date orderTime) {
        this.orderTime = orderTime;
    }

    public Integer getRowId() {
        return rowId;
    }

    public void setRowId(Integer rowId) {
        this.rowId = rowId;
    }

    public Integer getColumnId() {
        return columnId;
    }

    public void setColumnId(Integer columnId) {
        this.columnId = columnId;
    }
}