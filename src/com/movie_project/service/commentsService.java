package com.movie_project.service;

import java.util.List;

import com.movie_project.model.entity.comments;

public interface commentsService {
	int addComments(comments com);//添加评论
	int countByCliId(int cli_id);//根据用户id计算评论数
	int countBySesId(int ses_id);//根据场次id计算评论数
	List<comments> selectByCliId(int cli_id);//根据用户id返回评论列表
	List<comments> selectBySesId(int ses_id);//根据场次id返回评论列表
	List<comments> selectByCliId_SesId(int cli_id,int ses_id);//根据用户id,场次id返回评论列表
	
}
