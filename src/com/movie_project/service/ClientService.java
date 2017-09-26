package com.movie_project.service;

import java.util.List;

import com.movie_project.model.entity.client;

public interface ClientService {
	/**
	 * 根据ID查询用户entity
	 */
	client loadClientByCid(Integer id);
	
	/**
	 * 根据账号查询用户entity
	 */
	List<client> loadClientBycliNum(String cliNum);
	
	/**
	 * 增加用户
	 */
	int addClient(client cli);
	
	/**
	 * 根据ID修改密码
	 */
	int modifyPwd(Integer id, String newPwd);
	
	List<client> loadClientBycliNumcliPawd(String cliNum,String cliPawd);
}
