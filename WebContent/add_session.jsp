<%@page import="com.movie_project.model.entity.movie"%>
<%@page import="java.util.List"%>
<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
 <head>
 
  <meta charset="UTF-8">
  <title>喵眼电影管理平台</title>
  <link rel="stylesheet" href="css/admin/admin_public.css ">
  <link rel="stylesheet" href="css/admin/add_movie.css ">
 </head>
 <body>
 <script language="javascript" type="text/javascript" src="datePicker/WdatePicker.js"></script>
	<!-- 导入头部 -->
	<jsp:include page="admin_public/admin_header.html"></jsp:include>
	<!-- 导入左侧导航栏 -->
	<jsp:include page="admin_public/addsession_admin_left_nav.html"></jsp:include>
	<div id="movie_content">
		<form method="post" action="sessions/addsession.action" id="addAction" enctype="multipart/form-data">
			电影名字：
			<%List<movie> movieList = (List<movie>)session.getAttribute("movieList"); %>
			<select name="movId" id="select_country">
				<option value="" selected>==选择==</option>
				<%for(int i = 0;i<movieList.size();i++){ %>
				<option value="<%=movieList.get(i).getId() %>" ><%=movieList.get(i).getMovName() %></option>
				<%} %>
			</select><br/>
			
			影厅号&nbsp;&nbsp;&nbsp;：
			<select name="screensId" id="select_language">
				<option value="" selected>==选择==</option>
				<option value="1">1号厅</option>
				<option value="2">2号厅</option>
				<option value="3">3号厅</option>
				<option value="4">4号厅</option>
			</select><br/>
			
			观影方式：
			<select name="view" id="select_language">
				<option value="" selected>==选择==</option>
				<option value="2d">2d</option>
				<option value="3d">3d</option>
				<option value="IMAX">IMAX</option>
				<option value="巨幕">巨幕</option>
			</select><br/>
			电影价钱：<input type="text" name="price" ><br>
			开场日期：<input name="startDate" size="25" width: 120px;" onFocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd HH:mm:ss'})" /><span class="">&nbsp;&nbsp;只选择日期</span><br/>
			开场时间：<input name="startTime" size="25" width: 120px;" onFocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd HH:mm:ss'})" /><span class="">&nbsp;&nbsp;只选择时间</span><br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input type="submit" value="增加">
		</form>
	</div>
 </body>
 
</html>
