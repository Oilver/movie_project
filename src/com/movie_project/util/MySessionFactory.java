package com.movie_project.util;

import java.io.IOException;
import java.io.InputStream;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class MySessionFactory {
	private static SqlSessionFactory sqlSessionFactory ;
	
	static{
		try {
			//从classpath目录下读取MyBatis的配置文件.
			InputStream inputStream = Resources.getResourceAsStream("mybatis.xml");
			//构建SessionFactory
			sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	/**
	 * 获取sqlSession的方法.
	 * @return
	 */
	public static SqlSession openSession(){
		if(sqlSessionFactory!=null){
			SqlSession sqlSession = sqlSessionFactory.openSession();
			return sqlSession;
		}
		return null;
	}
}
