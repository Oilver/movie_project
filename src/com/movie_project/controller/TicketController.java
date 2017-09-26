package com.movie_project.controller;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.movie_project.model.entity.client;
import com.movie_project.model.entity.movie;
import com.movie_project.model.entity.orders;
import com.movie_project.model.entity.screens;
import com.movie_project.model.entity.sessions;
import com.movie_project.model.entity.site;
import com.movie_project.service.ClientService;
import com.movie_project.service.OrdersService;
import com.movie_project.service.ScreensService;
import com.movie_project.service.SessionsService;
import com.movie_project.service.movieService;
import com.movie_project.service.siteService;

@Controller
@RequestMapping("/ticket")
public class TicketController {

	@Autowired
	OrdersService ordersService;
	@Autowired
	ClientService clientService;
	@Autowired
	movieService movieService;
	@Autowired
	SessionsService sessionsService;
	@Autowired
	siteService siteService;
	@Autowired
	ScreensService screensService;
	
	Date nowDate;
	
	@RequestMapping("/showSession")
	public String showSession(Integer mov_id, HttpSession session) {
		nowDate = new Date();
		List<sessions> mov_SessionList = sessionsService.loadSesisonsListByMov_idBetweenDateTime(mov_id, nowDate);
		session.setAttribute("movSessionList", mov_SessionList);
		return "redirect:/select_session.jsp";
	}
	
	@RequestMapping("/chooseSeat")
	public String chooseSeat(Integer sesId, Integer scrId, HttpSession session) {
		List<site> ses_SeatList = siteService.selectByScrID_SesID(scrId, sesId);
		session.setAttribute("ses_SeatList", ses_SeatList);
		
		site site = new site();
		site.setSesId(sesId);
		int[] seat = new int[99];
		int t = 0;
		for(int i = 1; i<=9; i++){
			for(int j = 1; j<=11; j++){
				site.setRowId(i);
				site.setColumnId(j);
				seat[t] = (int)(siteService.selectById(site).getEmpty());
				t++;
			}
		}
		session.setAttribute("seatArray", seat);
		
		sessions ses = sessionsService.selectById(sesId);
		session.setAttribute("ses", ses);
		return "redirect:/select_seat.jsp";
	}
	
	@RequestMapping("/submitOrder")
	public String submitOrder(Integer rowId_1, Integer columnId_1, Integer rowId_2, Integer columnId_2,
			Integer rowId_3, Integer columnId_3, Integer rowId_4, Integer columnId_4, HttpSession session) {
		
		client user = (client) session.getAttribute("User");
		List<site> ses_SeatList = (List<site>) session.getAttribute("ses_SeatList");
		sessions ses = (sessions) session.getAttribute("ses");
		if(user != null){
			orders order = new orders();
			order.setCliId(user.getId());
			order.setSesId(ses_SeatList.get(0).getSesId());
			java.sql.Date sqlNowDate=new java.sql.Date(new java.util.Date().getTime());
			order.setOrderTime(sqlNowDate);
			
			site site = new site();
			site.setSesId(ses_SeatList.get(0).getSesId());
		
			if(rowId_1 != 0 && columnId_1 != 0){
				order.setRowId(rowId_1);
				order.setColumnId(columnId_1);
				ordersService.addOrders(order);
				ses.setTotalSold(ses.getTotalSold()+1);
				sessionsService.modifySessions(ses);
				
				site.setEmpty(1);
				site.setRowId(rowId_1);
				site.setColumnId(columnId_1);
				siteService.updateSite(site);

				session.setAttribute("order_1", order);
			}

			if(rowId_2 != 0 && columnId_2 != 0){
				order.setRowId(rowId_2);
				order.setColumnId(columnId_2);
				ordersService.addOrders(order);
				ses.setTotalSold(ses.getTotalSold()+1);
				sessionsService.modifySessions(ses);
				
				site.setEmpty(1);
				site.setRowId(rowId_2);
				site.setColumnId(columnId_2);
				siteService.updateSite(site);
				
				session.setAttribute("order_2", order);
			}

			if(rowId_3 != 0 && columnId_3 != 0){
				order.setRowId(rowId_3);
				order.setColumnId(columnId_3);
				ordersService.addOrders(order);
				ses.setTotalSold(ses.getTotalSold()+1);
				sessionsService.modifySessions(ses);
				
				site.setEmpty(1);
				site.setRowId(rowId_3);
				site.setColumnId(columnId_3);
				siteService.updateSite(site);

				session.setAttribute("order_3", order);
			}

			if(rowId_4 != 0 && columnId_4 != 0){
				order.setRowId(rowId_4);
				order.setColumnId(columnId_4);
				ordersService.addOrders(order);
				ses.setTotalSold(ses.getTotalSold()+1);
				sessionsService.modifySessions(ses);
				
				site.setEmpty(1);
				site.setRowId(rowId_4);
				site.setColumnId(columnId_4);
				siteService.updateSite(site);
				
				session.setAttribute("order_4", order);
			}
			return "/orders/checkOrdersByCliID2.action?cliId="+user.getId();
		}
		return "/index.jsp";
	}
}
