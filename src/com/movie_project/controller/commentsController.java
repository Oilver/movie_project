package com.movie_project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.movie_project.model.entity.*;
import com.movie_project.service.*;

@Controller //把当前类注册给SpringMVC容器,作为控制器组件
@RequestMapping("/comments")
public class commentsController {
	
	@Autowired
	commentsService commentsService;
	
	@RequestMapping("/addcomments")
	public String addcomments(comments com,Model model){
		//调用service
		int check = commentsService.addComments(com);
		if(check==1)
			return "/";//
		else return "/";//
	}
	
}
