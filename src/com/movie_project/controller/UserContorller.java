package com.movie_project.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.movie_project.model.entity.client;
import com.movie_project.model.entity.sessions;
import com.movie_project.service.ClientService;
import com.sun.org.glassfish.external.statistics.annotations.Reset;

@Controller
@RequestMapping("/User")
public class UserContorller {
	@Autowired
	ClientService cliService;
	
	@RequestMapping("/reg")
	public String addClient(client cli,String password2,HttpServletRequest request,HttpSession session){
		session.setAttribute("mess", null);
		
		if(!cli.getPassword().equals(password2)){
			session.setAttribute("mess", "注册失败");
			return "redirect:/register.jsp";
		}
		try {
			cliService.addClient(cli);
			List<client> userList =cliService.loadClientBycliNum(cli.getCliNum());
			client user = userList.get(0);
			session.setAttribute("User", user);
			return "redirect:/index.jsp";
		} catch (Exception e) {
			// TODO: handle exception
			session.setAttribute("mess", "注册失败");
			return "redirect:/register.jsp";
		}
	}
	@RequestMapping("/login")
	public String login(String cliNum,String password,HttpSession session,HttpServletRequest request){
		
		if(cliNum.equals("admin")&&password.equals("admin")){
			return "redirect:/admin_index.jsp";
		}
		List<client> cli=cliService.loadClientBycliNumcliPawd(cliNum, password);
		if(cli.isEmpty()){
			request.setAttribute("loginMsg", "login failed");
			return "redirect:/login.jsp";
		}
		request.setAttribute("loginMsg", "login success");
		session.setAttribute("User", cli.get(0));
		return "redirect:/index.jsp";
	}
	@RequestMapping("/logout")
	public String logout(HttpSession session){
		session.setAttribute("User", null);
		return "redirect:/index.jsp";
	}
	
}
