package com.movie_project.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_project.mapper.base.movieMapper;
import com.movie_project.mapper.base.ordersMapper;
import com.movie_project.mapper.base.sessionsMapper;
import com.movie_project.model.entity.movie;
import com.movie_project.model.entity.movieExample;
import com.movie_project.model.entity.orders;
import com.movie_project.model.entity.ordersExample;
import com.movie_project.model.entity.sessions;
import com.movie_project.model.entity.sessionsExample;
import com.movie_project.service.OrdersService;

@Service
public class OrdersServiceImpl implements OrdersService {
	@Autowired
	ordersMapper ordersMapper;
	@Autowired
	movieMapper movMapper;
	@Autowired
	sessionsMapper sessMapper;
	
	@Override
	public List<orders> findBycliId(Integer cliId) {
		// TODO Auto-generated method stub
		return ordersMapper.findordersByCliId(cliId);
	}

	@Override
	public List<orders> loadBysesId(Integer sesId) {
		// TODO Auto-generated method stub
		ordersExample or = new ordersExample();
		ordersExample.Criteria dec = or.createCriteria();
		dec.andSesIdEqualTo(sesId);
		return ordersMapper.selectByExample(or);
	}

	@Override
	public List<orders> loadByDate(Date date) {
		// TODO Auto-generated method stub
		ordersExample or = new ordersExample();
		ordersExample.Criteria dec = or.createCriteria();
		dec.andOrderTimeEqualTo(date);
		return ordersMapper.selectByExample(or);
	}

	@Override
	public int addOrders(orders order) {
		// TODO Auto-generated method stub
		/*int re = ordersMapper.insert(order);
		return re;*/
		return ordersMapper.insertSelective(order);
	}

	@Override
	public int deleteOrdersByCliIdandSesId(Integer cliId, Integer sesId) {
		// TODO Auto-generated method stub
		ordersExample or = new ordersExample();
		ordersExample.Criteria dec = or.createCriteria();
		dec.andCliIdEqualTo(cliId);
		dec.andSesIdEqualTo(sesId);
		int re = ordersMapper.deleteByExample(or);
		return re;
	}

	@Override
	public List<orders> loadByMname(String Mname) {
		// TODO Auto-generated method stub
		
		List<sessions> allsess = new ArrayList<sessions>();
		List<orders> allorders = new ArrayList<orders>();
		
		movieExample or1 = new movieExample();
		movieExample.Criteria dec1 = or1.createCriteria();
		dec1.andMovNameEqualTo(Mname);
		List<movie> movie = movMapper.selectByExample(or1);
		
		for(movie mov:movie){
			sessionsExample or2 = new sessionsExample();
			sessionsExample.Criteria dec2 = or2.createCriteria();
			dec2.andMovIdEqualTo(mov.getId());
			allsess = sessMapper.selectByExample(or2);
		}
		
		for(sessions sess:allsess){
			ordersExample or = new ordersExample();
			ordersExample.Criteria dec = or.createCriteria();
			dec.andSesIdEqualTo(sess.getId());
			allorders.addAll(ordersMapper.selectByExample(or));
		}
		return allorders;
	}

}
