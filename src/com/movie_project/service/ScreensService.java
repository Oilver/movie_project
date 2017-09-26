package com.movie_project.service;

import com.movie_project.model.entity.screens;
import java.util.List;

public interface ScreensService {
	
	//根据ID查询
	screens selectById(Integer id);
	
	//新增一个screens
	int addScreens(screens screens);
	
	//根据id删除screens
	int removeScreensById(Integer id);
	
	//修改screens，传入screens。id与要修改的id相同
	int modifyScreens(screens screens);
	
	//输出screens表
	List<screens> loadScreensList();
	
}
