package com.movie_project.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_project.mapper.base.sessionsMapper;
import com.movie_project.model.entity.movie;
import com.movie_project.model.entity.sessions;
import com.movie_project.model.entity.sessionsExample;
import com.movie_project.service.SessionsService;

@Service
public class SessionsServiceImpl implements SessionsService{

	@Autowired
	sessionsMapper sessionsMapper;
	
	@Override
	public sessions selectById(Integer id) {
		// TODO Auto-generated method stub
		return sessionsMapper.selectByPrimaryKey(id);
	}

	@Override
	public int addScreens(sessions sessions) {
		// TODO Auto-generated method stub
		return sessionsMapper.insertSelective(sessions);
	}

	@Override
	public int removeSessionsById(Integer id) {
		// TODO Auto-generated method stub
		return sessionsMapper.deleteByPrimaryKey(id);
	}

	@Override
	public int modifySessions(sessions sessions) {
		// TODO Auto-generated method stub
		return sessionsMapper.updateByPrimaryKey(sessions);
	}
	
	@Override
	public List<sessions> loadSessionsList() {
		// TODO Auto-generated method stub
		return sessionsMapper.selectByExample(null);
	}
	
	@Override
	public List<sessions> loadSessionsListByMov_id(Integer mov_id) {
		// TODO Auto-generated method stub
		sessionsExample se = new sessionsExample();
		sessionsExample.Criteria sec = se.createCriteria();
		sec.andMovIdEqualTo(mov_id);
		return sessionsMapper.selectByExample(se);
	}
	
	@Override
	public List<sessions> loadSessionsListBetweenDateTime(Date begin,
			Date end) {
		// TODO Auto-generated method stub
		sessionsExample se = new sessionsExample();
		sessionsExample.Criteria sec = se.createCriteria();
		sec.andStartTimeBetween(begin, end);
		return sessionsMapper.selectByExample(se);
	}

	@Override
	public List<sessions> loadSessionsListByDateTime(Date dt) {
		// TODO Auto-generated method stub
		sessionsExample se = new sessionsExample();
		sessionsExample.Criteria sec = se.createCriteria();
		sec.andStartTimeEqualTo(dt);
		return sessionsMapper.selectByExample(se);
	}

	@Override
	public List<sessions> loadSessionsListByDateTimeAndMov_id(Date date,
			Integer mov_id) {
		// TODO Auto-generated method stub
		sessionsExample se = new sessionsExample();
		sessionsExample.Criteria sec = se.createCriteria();
		sec.andStartTimeEqualTo(date);
		sec.andMovIdEqualTo(mov_id);
		return sessionsMapper.selectByExample(se);
	}

	@Override
	public List<sessions> loadSesisonsListByMov_idBetweenDateTime(
			Integer mov_id, Date date) {
		// TODO Auto-generated method stub
		long time = date.getTime();
		long day = 7;
		day = day*24*60*60*1000;
		time += day;
		Date endDate = new Date(time);
		
		sessionsExample se = new sessionsExample();
		sessionsExample.Criteria sec = se.createCriteria();
		sec.andMovIdEqualTo(mov_id);
		sec.andStartDateBetween(date, endDate);
		return sessionsMapper.selectByExample(se);
	}

	@Override
	public List<sessions> findmoviesBySessions() {
		return sessionsMapper.findmoviesBySessions();
	}
	
}
