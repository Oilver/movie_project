package com.movie_project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_project.mapper.base.siteMapper;
import com.movie_project.model.entity.site;
import com.movie_project.model.entity.siteExample;
import com.movie_project.model.entity.siteKey;
import com.movie_project.service.siteService;

@Service
public class siteServiceImpl implements siteService{
	@Autowired
	siteMapper sitemapper;

	@Override
	public int addSite(site si) {
		// TODO Auto-generated method stub
		return sitemapper.insert(si);
		
	}

	@Override
	public int updateSite(site si) {
		// TODO Auto-generated method stub
		return sitemapper.updateByPrimaryKeySelective(si);
	}

	@Override
	public site selectById(site si) {
		// TODO Auto-generated method stub
		siteKey key = new siteKey();
		key.setSesId(si.getSesId());
		key.setColumnId(si.getColumnId());
		key.setRowId(si.getRowId());
		return sitemapper.selectByPrimaryKey(key);
		
	}

	@Override
	public List<site> selectByScrID_SesID(int ScrId, int SesID) {
		// TODO Auto-generated method stub
		siteExample siEx = new siteExample();
		siteExample.Criteria siExC = siEx.createCriteria();
		siExC.andScrIdEqualTo(ScrId);
		siExC.andSesIdEqualTo(SesID);
		return sitemapper.selectByExample(siEx);
	}


	
	
	
}
