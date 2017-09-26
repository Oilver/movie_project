package com.movie_project.util;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.LinkedList;

import javax.servlet.http.HttpSession;

import com.movie_project.model.entity.sessions;

public class test {

	private int number;
	private String string;
	public test(int number,String string) {
		this.number = number;
		this.string = string;
	}
	
	public static void main(String[] args) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		java.util.Date date = new java.util.Date();
		System.out.println(sdf.format(date));
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(calendar.DAY_OF_MONTH,1);
		java.util.Date tomorrow = calendar.getTime();
		System.out.println(sdf.format(tomorrow));
		
				User user1 = new User();
				User user2 = new User();
				System.out.println(user1.equals(user2));
				System.out.println(user1==user2);
			}
	}


