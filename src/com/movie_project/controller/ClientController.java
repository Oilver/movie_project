package com.movie_project.controller;

import java.io.InputStream;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.movie_project.model.entity.client;
import com.movie_project.service.ClientService;
import com.mysql.fabric.xmlrpc.Client;

@Controller //把当前类注册给SpringMVC容器,作为控制器组件
@RequestMapping("/Client")
public class ClientController {
	@Autowired
	ClientService clientService;
	
	@RequestMapping("/addclient")
	public String addclient(client cli){
		clientService.addClient(cli);
		return "/index.jsp";
	}
	
	@RequestMapping("/modifyPwd")
	public String modifyPwd(Integer id, String newPwd){
		clientService.modifyPwd(id, newPwd);
		return "/index.jsp";
	}
	
}
