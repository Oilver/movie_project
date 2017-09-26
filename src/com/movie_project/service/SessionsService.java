package com.movie_project.service;

import java.util.Date;
import java.util.List;

import com.movie_project.model.entity.movie;
import com.movie_project.model.entity.screens;
import com.movie_project.model.entity.sessions;

public interface SessionsService {

	//根据id查询
	sessions selectById(Integer id);
	
	//新增新的session
	int addScreens(sessions sessions);
	
	//根据id删除
	int removeSessionsById(Integer id);
	
	//修改session，session。id与要修改的相同
	int modifySessions(sessions sessions);
	
	//查询sessions表
	List<sessions> loadSessionsList();
	
	//根据电影id查场次
	List<sessions> loadSessionsListByMov_id(Integer mov_id);
	
	//查询在某段时间内的场次表
	List<sessions> loadSessionsListBetweenDateTime(Date begin, Date end);
	
	//查询某天的所有场次
	List<sessions> loadSessionsListByDateTime(Date dt);
	
	//查询某天某电影的所有场次
	List<sessions> loadSessionsListByDateTimeAndMov_id(Date date, Integer mov_id);
	
	//查询某电影未来一周内所有场次
	List<sessions> loadSesisonsListByMov_idBetweenDateTime(Integer mov_id, Date date);
	
	List<sessions> findmoviesBySessions();
}
