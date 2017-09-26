<%@page import="com.movie_project.model.entity.sessions"%>
<%@page import="com.movie_project.model.entity.movie"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%  
String path = request.getContextPath();  
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";  
%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
 <head>
 <base href="<%=basePath%>">
  <meta charset="UTF-8">
  <title>喵眼电影管理平台</title>
  <link rel="stylesheet" href="css/admin/admin_public.css ">
  <link rel="stylesheet" href="css/admin/storeroom.css ">
  <link rel="stylesheet" href="css/admin/movie_admin.css ">
  <script src="http://libs.baidu.com/jquery/2.0.0/jquery.js"></script>
 </head>
 <body>
	<jsp:include page="admin_public/admin_header.html"></jsp:include>
	<!-- 导入左侧导航栏 -->
	<jsp:include page="admin_public/checkSess_admin_left_nav.html"></jsp:include>
	<div id="sort_search">
		<a href="add_session.jsp" id="add_session">+增加场次+</a>
	</div>
	<div id="thead">
		<table class="public">
			<tr>
				<td>场次id</td>
				<td>电影名称</td>
				<td>影厅号</td>
				<td>单价</td>
				<td>售票数</td>
				<td>开场日期</td>
				<td>开场时间</td>
				<td>结束时间</td>
			</tr>
		</table>
	</div>
	<div id="movie_list" class="rt">
		<table class="public">
		<%List<sessions> sessionsList = (List<sessions>)session.getAttribute("sessionsList"); 
			for(int i = 0;i<sessionsList.size();i++){
		%>
			<tr>
				<td><%=sessionsList.get(i).getId() %></td>
				<td><%=sessionsList.get(i).getMovie().getMovName() %></td>
				<td><%=sessionsList.get(i).getScreensId() %>号厅</td>
				<td><%=sessionsList.get(i).getPrice() %></td>
				<td><%=sessionsList.get(i).getTotalSold() %></td>
				<td><fmt:formatDate value="<%=sessionsList.get(i).getStartDate()%>" pattern="yyyy-MM-dd"/></td>
				<td><fmt:formatDate value="<%=sessionsList.get(i).getStartTime()%>" pattern="HH:mm:ss"/></td>
				<td><fmt:formatDate value="<%=sessionsList.get(i).getEndTime()%>" pattern="HH:mm:ss"/></td>
			</tr>
		<%} %>
		</table>
	</div>
	<!-- 遮挡 -->
	<div class="cover"></div>
	
 </body>
</html>
