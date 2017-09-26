package com.movie_project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_project.mapper.base.commentsMapper;
import com.movie_project.model.entity.comments;
import com.movie_project.model.entity.commentsExample;
import com.movie_project.service.commentsService;
import com.mysql.jdbc.ResultSetInternalMethods;

@Service
public class commentsServiceImpl implements commentsService{
	@Autowired
	commentsMapper comMapper;

	@Override
	public int addComments(comments com) {
		// TODO Auto-generated method stub
		return comMapper.insert(com);
	}

	@Override
	public int countByCliId(int cli_id) {
		// TODO Auto-generated method stub
		commentsExample comE = new  commentsExample();
		commentsExample.Criteria comEC = comE.createCriteria();
		comEC.andCliIdEqualTo(cli_id);
		return comMapper.countByExample(comE);
	}

	@Override
	public int countBySesId(int ses_id) {
		// TODO Auto-generated method stub
		commentsExample comE = new  commentsExample();
		commentsExample.Criteria comEC = comE.createCriteria();
		comEC.andSesIdEqualTo(ses_id);
		return comMapper.countByExample(comE);
	}

	@Override
	public List<comments> selectByCliId(int cli_id) {
		// TODO Auto-generated method stub
		commentsExample comE = new  commentsExample();
		commentsExample.Criteria comEC = comE.createCriteria();
		comEC.andCliIdEqualTo(cli_id);
		return comMapper.selectByExample(comE);
	}

	@Override
	public List<comments> selectBySesId(int ses_id) {
		// TODO Auto-generated method stub
		commentsExample comE = new  commentsExample();
		commentsExample.Criteria comEC = comE.createCriteria();
		comEC.andSesIdEqualTo(ses_id);
		return comMapper.selectByExample(comE);
	}

	@Override
	public List<comments> selectByCliId_SesId(int cli_id, int ses_id) {
		// TODO Auto-generated method stub
		commentsExample comE = new  commentsExample();
		commentsExample.Criteria comEC = comE.createCriteria();
		comEC.andCliIdEqualTo(cli_id);
		comEC.andSesIdEqualTo(ses_id);
		return comMapper.selectByExample(comE);
	}
	
}
