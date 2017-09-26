package com.movie_project.service;

import java.util.List;

import com.movie_project.model.entity.movie;

public interface movieService {

	int addMovie(movie movie);
	
	void deleteMovie(Integer id);
	
	void updateMovie(movie movie);
	
	//查询所有电影
	List<movie> seleteMovies();
	
	//根据电影的id查找电影
	movie seleteMovieById(Integer id);
	
	//根据演员查找电影
	List<movie> seleteMovieByActor(String actor);
	
	//根据导演查找电影
	List<movie> seleteMovieByDirector(String director);
	
	//根据电影的状态查找电影
	List<movie> seleteMovieByStatus(Integer status);
	
	//根据电影的类型查找电影
	List<movie> seleteMovieBytype(String type);
	
	//根据电影的名字查找电影，模糊查询，返回一个列表
	List<movie> seleteMovieByNama(String movName);
	
	//根据电影的上映名字查找电影，返回一个列表
	List<movie> seleteMovieBetweenDate(String showtime);
	
}
