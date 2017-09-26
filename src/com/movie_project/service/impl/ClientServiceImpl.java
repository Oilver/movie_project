package com.movie_project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie_project.mapper.base.clientMapper;
import com.movie_project.model.entity.client;
import com.movie_project.model.entity.clientExample;
import com.movie_project.model.entity.ordersExample;
import com.movie_project.service.ClientService;

@Service 
public class ClientServiceImpl implements ClientService {
	
	//如果调用自定义的sql, 则用我们自定义的Mapper接口声明
	
	//使用spring框架自动注入进来. byType
	@Autowired
	clientMapper cliMapper;
	
	@Override
	public client loadClientByCid(Integer id) {
		// TODO Auto-generated method stub
		return cliMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<client> loadClientBycliNum(String cliNum) {
		// TODO Auto-generated method stub
		clientExample or = new clientExample();
		clientExample.Criteria dec = or.createCriteria();
		dec.andCliNumEqualTo(cliNum);
		return cliMapper.selectByExample(or);
	}

	@Override
	public int addClient(client cli) {
		// TODO Auto-generated method stub
		int re = cliMapper.insert(cli);
		return re;
	}

	@Override
	public int modifyPwd(Integer id, String newPwd) {
		// TODO Auto-generated method stub
		client client = cliMapper.selectByPrimaryKey(id);
		client.setPassword(newPwd);
		return cliMapper.updateByPrimaryKeySelective(client);
	}

	@Override
	public List<client> loadClientBycliNumcliPawd(String cliNum, String cliPawd) {
		// TODO Auto-generated method stub
		clientExample or = new clientExample();
		clientExample.Criteria dec = or.createCriteria();
		dec.andCliNumEqualTo(cliNum);
		dec.andPasswordEqualTo(cliPawd);
		return cliMapper.selectByExample(or);
	}

}
