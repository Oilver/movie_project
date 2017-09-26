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
  <link rel="stylesheet" href="css/admin/movie_statistics.css ">
 </head>
 <body>
	<!-- 导入头部 -->
	<jsp:include page="admin_public/admin_header.html"></jsp:include>
	<!-- 导入左侧导航栏 -->
	<jsp:include page="admin_public/store_admin_left_nav.html"></jsp:include>
	<form action="movie/seleteMovieByStatus.action?moviedo=123">
	<div id="statistics_search" class="">
		<span class="">电影类型</span>
		<c:if test="${status==1 }">
		<select name="status">
			<option value="9" >--全部--</option>
			<option value="1" id="hot_show" selected>正在热映</option>
			<option value="0" id="coldness">即将上映</option>
			<option value="-1" id="old">已经下架</option>
		</select>
		</c:if>
		<c:if test="${status==0 }">
		<select name="status">
			<option value="9" >--全部--</option>
			<option value="1" id="hot_show" >正在热映</option>
			<option value="0" id="coldness" selected>即将上映</option>
			<option value="-1" id="old">已经下架</option>
		</select>
		</c:if>
		<c:if test="${status==-1 }">
		<select name="status">
			<option value="9" >--全部--</option>
			<option value="1" id="hot_show" >正在热映</option>
			<option value="0" id="coldness">即将上映</option>
			<option value="-1" id="old" selected>已经下架</option>
		</select>
		</c:if>
		<input type="hidden"  name="moviedo" value="123">
		<input type="submit" value="查看">
	</div>
	</form>
	<div id="thead" class="">
		<table class="public">
			<tr>
				<td>id</td>
				<td>电影名称</td>
				<td>评分</td>
				<td>上映时间</td>
				<td>类型</td>
				<td>时长（分钟）</td>	
				<td>状态</td>	
			</tr>
		</table>
	</div>
	<div id="movie_statistics" class="">
		<table class="public">
		<c:forEach var="movie" items="${movieByStatus }">
			<tr>
				<td>${movie.id }</td>
				<td>${movie.movName }</td>
				<td>${movie.totalScore }</td>
				<td><input type="text" value="<fmt:formatDate value="${movie.showtime}" pattern="yyyy-MM-dd"/>"/></td>
				<td>${movie.type }</td>
				<td>${movie.runningtime }</td>
				<c:if test="${movie.status ==1}">
				<td>正在热映</td>
				</c:if>
				<c:if test="${movie.status ==0}">
				<td>即将上映</td>
				</c:if>
				<c:if test="${movie.status ==-1}">
				<td>已下架</td>
				</c:if>
			</tr>
		</c:forEach>
		</table>
	</div>
	<div id="" class="cover">	
	</div>
 </body>
</html>
