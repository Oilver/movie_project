package com.movie_project.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.movie_project.model.entity.client;
import com.movie_project.model.entity.movie;
import com.movie_project.model.entity.orders;
import com.movie_project.model.entity.sessions;
import com.movie_project.service.ClientService;
import com.movie_project.service.OrdersService;
import com.movie_project.service.SessionsService;
import com.movie_project.service.movieService;
import com.movie_project.service.impl.OrdersServiceImpl;
import com.mysql.fabric.xmlrpc.Client;

@Controller //把当前类注册给SpringMVC容器,作为控制器组件
@RequestMapping("/orders")
public class ordersController {
	@Autowired
	OrdersService ordersService;
	@Autowired
	SessionsService sessionsService;
	@Autowired
	movieService movieService;
	@RequestMapping("/checkOrdersByCliID")
	public String checkOrdersByCliID(Integer cliId,Model ordersModel,Model sessionsModel,Model moviesModel){
		List<orders> orders = ordersService.findBycliId(cliId);
		List<sessions> sessions = new ArrayList<sessions>();
		List<movie> movies = new ArrayList<movie>();
		
		for (orders o : orders) {
			sessions s = sessionsService.selectById(o.getSesId());
			System.out.println(s.getStartTime());
			sessions.add(s);
		}
		for (sessions s : sessions) {
			movie m = movieService.seleteMovieById(s.getMovId());
			movies.add(m);
		}
		
		ordersModel.addAttribute("orders", orders);
		sessionsModel.addAttribute("sessions", sessions);
		moviesModel.addAttribute("movies", movies);
		return "/checkOrders.jsp";
	}
	@RequestMapping("/checkOrdersByCliID2")
	public String checkOrdersByCliID2(Integer cliId,HttpSession session){
		 List<orders> orders = ordersService.findBycliId(cliId);
				session.setAttribute("orders", orders);
		return "redirect:/checkOrders.jsp";
	}
}
