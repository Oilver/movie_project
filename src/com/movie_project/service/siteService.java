package com.movie_project.service;

import com.movie_project.model.entity.site;
import com.movie_project.model.entity.siteExample;
import java.util.List;

public interface siteService {
	int addSite(site si);//添加座位，返回0失败，1成功
	int updateSite(site si);//修改座位状态，返回0失败，1成功
	site selectById(site si);//根据座位(其实是根据row_id和clo_idh和ses_id)查找座位
	List<site> selectByScrID_SesID(int ScrId,int SesID);//根据影厅id和场次id查找座位列表
}
