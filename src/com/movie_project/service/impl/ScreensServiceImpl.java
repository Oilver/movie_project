package com.movie_project.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_project.mapper.base.screensMapper;
import com.movie_project.model.entity.screens;
import com.movie_project.service.ScreensService;

import java.util.List;

@Service
public class ScreensServiceImpl implements ScreensService{

	@Autowired
	screensMapper screensMapper;
	
	@Override
	public screens selectById(Integer id) {
		// TODO Auto-generated method stub
		return screensMapper.selectByPrimaryKey(id);
	}

	@Override
	public int addScreens(screens screens) {
		// TODO Auto-generated method stub
		return screensMapper.insertSelective(screens);
	}

	@Override
	public int removeScreensById(Integer id) {
		// TODO Auto-generated method stub
		return screensMapper.deleteByPrimaryKey(id);
	}

	@Override
	public int modifyScreens(screens screens) {
		// TODO Auto-generated method stub
		return screensMapper.updateByPrimaryKey(screens);
	}

	@Override
	public List<screens> loadScreensList() {
		// TODO Auto-generated method stub
		return screensMapper.selectByExample(null);
	}

}
