package com.movie_project.controller;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.movie_project.model.entity.client;
import com.movie_project.model.entity.movie;
import com.movie_project.model.entity.screens;
import com.movie_project.model.entity.sessions;
import com.movie_project.service.ClientService;
import com.movie_project.service.ScreensService;
import com.movie_project.service.SessionsService;
import com.movie_project.service.movieService;
import com.mysql.fabric.xmlrpc.Client;

@Controller //把当前类注册给SpringMVC容器,作为控制器组件
@RequestMapping("/sessions")
public class sessionsController {
	@Autowired
	SessionsService sessionsService;
	@Autowired
	movieService movieService;
	
	@RequestMapping("/addsession")
	public String addsession(sessions sessions,HttpSession session){
		long min = movieService.seleteMovieById(sessions.getMovId()).getRunningtime();
		min = min * 60 * 1000;
		Date endTime = new Date(min + (sessions.getStartTime()).getTime());
		sessions.setEndTime(endTime);
		
		sessionsService.addScreens(sessions);
		List<sessions> sessionsList = sessionsService.findmoviesBySessions();
		session.setAttribute("sessionsList", sessionsList);
		return "redirect:/checkSession.jsp";
	}
	
	@RequestMapping("/checkSession")
	public String checkSession(HttpSession session){
		List<sessions> sessionsList = sessionsService.findmoviesBySessions();
		session.setAttribute("sessionsList", sessionsList);
		return "redirect:/checkSession.jsp";
	}
	
}
