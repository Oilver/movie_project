package com.movie_project.service.impl;


import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_project.mapper.base.movieMapper;
import com.movie_project.model.entity.movie;
import com.movie_project.model.entity.movieExample;
import com.movie_project.service.movieService;

//把当前类注册给Spring容器,作为service组件
@Service 
public class movieServiceImpl implements movieService{
	
	//如果调用自定义的sql, 则用我们自定义的Mapper接口声明
	
	//使用spring框架自动注入进来. byType
	@Autowired
	movieMapper movieMapper;

	@Override
	public int addMovie(movie movie) {
		Date now = new Date();
		Date showtimeDate = movie.getShowtime();
		if((showtimeDate.getTime()+(24*60*60*1000))<now.getTime()&&showtimeDate.getDate()<now.getDate()||
				(showtimeDate.getTime()+(24*60*60*1000))<now.getTime()) //过时
		{
			return 0;
		}
		else {
			movieMapper.insert(movie);
			return 1;
		}
	}

	@Override
	public void deleteMovie(Integer id) {
		// TODO Auto-generated method stub
		movieMapper.deleteByPrimaryKey(id);
	}

	@Override
	public void updateMovie(movie movie) {
		// TODO Auto-generated method stub
		movieMapper.updateByPrimaryKeySelective(movie);
	}

	@Override
	public List<movie> seleteMovies() {
		// TODO Auto-generated method stub
		List<movie> list = movieMapper.selectByExample(null);
		return list;
	}

	@Override
	public movie seleteMovieById(Integer id) {
		// TODO Auto-generated method stub
		if(id!=null){
			movie movie = movieMapper.selectByPrimaryKey(id);
			return movie;
		}
		else {
			return null;
		}
	}

	@Override
	public List<movie> seleteMovieByActor(String actor) {
		// TODO Auto-generated method stub
		if(actor!=null){
			movieExample de = new movieExample();
			movieExample.Criteria dec = de.createCriteria();
			dec.andActorEqualTo(actor);
			return movieMapper.selectByExample(de);
		}
		else return null;
		
	}

	@Override
	public List<movie> seleteMovieByDirector(String director) {
		// TODO Auto-generated method stub
		if(director!=null){
			movieExample de = new movieExample();
			movieExample.Criteria dec = de.createCriteria();
			dec.andActorEqualTo(director);
			return movieMapper.selectByExample(de);
		}
		else return null;
	}

	@Override
	public List<movie> seleteMovieByStatus(Integer status) {
		// TODO Auto-generated method stub
		if(status!=null){
			movieExample de = new movieExample();
			movieExample.Criteria dec = de.createCriteria();
			dec.andStatusEqualTo(status);
			return movieMapper.selectByExample(de);
		}
		else return null;
	}

	@Override
	public List<movie> seleteMovieBytype(String type) {
		// TODO Auto-generated method stub
		if(type!=null){
			movieExample de = new movieExample();
			movieExample.Criteria dec = de.createCriteria();
			dec.andTypeEqualTo(type);
			return movieMapper.selectByExample(de);
		}
		else return null;
	}

	@Override
	public List<movie> seleteMovieByNama(String movName) {
		// TODO Auto-generated method stub
		if(movName!=null){
			movieExample de = new movieExample();
			movieExample.Criteria dec = de.createCriteria();
			dec.andMovNameLike("%"+movName+"%");
			return movieMapper.selectByExample(de);
		}
		else return null;
	}

	//在上映时间段内查找电影
	@Override
	public List<movie> seleteMovieBetweenDate(String showtime) {
		Date date1 = new Date();
		Date date2 = null;
		Calendar rightNow = Calendar.getInstance();
        rightNow.setTime(date1);
		if(showtime.equals("half")){
			rightNow.add(Calendar.DAY_OF_YEAR, -15);
			date2 = rightNow.getTime();
			//创造example
			movieExample de = new movieExample();
			movieExample.Criteria dec = de.createCriteria();
			dec.andShowtimeBetween(date2, date1);
			return movieMapper.selectByExample(de);
		}
		if(showtime.equals("1")){
			rightNow.add(Calendar.MONTH, -1);
			date2 = rightNow.getTime();
			//创造example
			movieExample de = new movieExample();
			movieExample.Criteria dec = de.createCriteria();
			dec.andShowtimeBetween(date2, date1);
			return movieMapper.selectByExample(de);
		}
		if(showtime.equals("3")){
			rightNow.add(Calendar.MONTH, -3);
			date2 = rightNow.getTime();
			//创造example
			movieExample de = new movieExample();
			movieExample.Criteria dec = de.createCriteria();
			dec.andShowtimeBetween(date2, date1);
			return movieMapper.selectByExample(de);
		}
		if(showtime.equals("all")){
			return seleteMovies();
			
		}
		return null;
	}
}
