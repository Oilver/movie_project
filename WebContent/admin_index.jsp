<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
 <head>
  <meta charset="UTF-8">
  <title>喵眼电影管理平台</title>
  <link rel="stylesheet" href="css/admin/admin_public.css ">
  <link rel="stylesheet" href="css/admin/admin_index.css ">
 </head>
 <body>
	<!-- 导入头部 -->
	<jsp:include page="admin_public/admin_header.html"></jsp:include>
	<!-- 导入左侧导航栏 -->
	<jsp:include page="admin_public/in_admin_left_nav.html"></jsp:include>
	<div id="content" class="rt">
		<a href="movie/seleteMovies.action?moviedo=store" >影片片库</a>
		<a href="movie/seleteMovies.action?moviedo=manager">电影管理</a>
		<a href="add_movie.jsp" id="admin_addMovie">添加影片</a>
		<a href="statistics_admin.jsp">统计管理</a>
	</div>
 </body>
</html>
