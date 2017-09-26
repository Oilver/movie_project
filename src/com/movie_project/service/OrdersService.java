package com.movie_project.service;

import java.util.Date;
import java.util.List;

import com.movie_project.model.entity.orders;

public interface OrdersService {
	/**
	 *根据用户id查询订单 
	 **/
	List<orders> findBycliId(Integer cliId);
	
	/**
	 * 根据场次id查询订单
	 */
	List<orders> loadBysesId(Integer sesId);
	
	/**
	 * 根据日期查询订单
	 */
	List<orders> loadByDate(Date date);

	/**
	 * 增加订单信息
	 */
	int addOrders(orders order);
	
	/**
	 * 删除订单
	 */
	int deleteOrdersByCliIdandSesId(Integer cliId, Integer sesId);
	
	/**
	 * 根据电影名字查询订单
	 */
	List<orders> loadByMname(String Mname);
	
}
