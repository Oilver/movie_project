<%@page import="java.util.Arrays"%>
<%@page import="com.movie_project.model.entity.screens"%>
<%@page import="com.movie_project.model.entity.client"%>
<%@page import="com.movie_project.service.impl.SessionsServiceImpl"%>
<%@page import="com.movie_project.service.SessionsService"%>
<%@page import="com.movie_project.model.entity.sessions"%>
<%@page import="com.movie_project.model.entity.site"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.movie_project.model.entity.movie"%>
<%  
String path = request.getContextPath();  
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";  
%>  
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<base href="<%=basePath %>" />
 <head>
  <meta charset="UTF-8">
  <title>选座购票</title>
  <link rel="stylesheet" href="css/public.css ">
  <link rel="stylesheet" href="css/index.css">
  <link rel="stylesheet" href="css/select_seat.css">
 </head>
 <body>
<%
	movie mov_detail = (movie)session.getAttribute("mov_detail");
	sessions ses = (sessions) session.getAttribute("ses");
	int[] arrayToString = (int[])session.getAttribute("seatArray");
%>
	<div id="head" class="">
		<div id="" class="rt">
			<span class="">欢迎你，</span>
			<a href="">${sessionScope.User.cliName }</a>
		</div>
		<span class="">喵眼电影</span>
	</div>
	<div id="body" class="">
		<div id="seat" class="lf">
			<div class="first">
				<b></b><span>可选座位</span>
				<b></b><span>已售座位</span>
				<b></b><span>已选座位</span>
			</div>
			<div id="" class="second">
			</div>
			<div id="seat_content" class="">
				<p>1<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></p>
				<p>2<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></p>
				<p>3<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></p>
				<p>4<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></p>
				<p>5<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></p>
				<p>6<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></p>
				<p>7<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></p>
				<p>8<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></p>
				<p>9<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></p>
			</div>
			<div id="instruction" class="">
				<p><b>说明：</b></p>
				<p>1.点击上面座位直接选择</p>
				<p>2.已售座位不能再次被选中</p>
				<p>3.每个用户每次不能购买超过4张票</p>
			</div>
		</div>
		
		<input type="hidden" id="price" value="<%=ses.getPrice()%>" >
		<div id="seat_info" class="lf">
			<div id="movie_info" class="">
				<p>电影：<span id="movieName"><%=mov_detail.getMovName()%></span></p>
				<p>类型：<span id="movieType"><%=mov_detail.getType()%></span></p>
				<p>片长：<span id="movieTime"><%=mov_detail.getRunningtime() %></span>分钟</p>
			</div>
			<div id="movie_room" class="">
				<p>影院：巨票儿电影院</p>
				<p>影厅：<span id="movie_room"><%=ses.getScreensId() %></span>号厅</p>
				<p>播放时间：<span id="showTime">2017-07-02:19:30</span></p>
				<p>票价：￥<span id="price"><%=ses.getPrice()%></span></p>
			</div>
			<div id="sel_seat" class="clear">
				<p>座位</p>
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
				</ul>
				<h3 id="totalPrice" class="">
					总价&nbsp;&nbsp;&nbsp;￥&nbsp;<b>0</b>
				</h3>
			</div>
			<div id="form" class="">
				<input type="button" value="提交订单" onclick="">
			</div>
		</div>
	</div>
	<input type="hidden" id="array" value="<%=Arrays.toString(arrayToString)%>" >
	<!-- 尾部 -->
	<footer>
		<div>友情链接：<a href="http://www.dytt8.net/">电影天堂</a></div>
		<p>&copy;2017 喵眼电影&nbsp;&nbsp;制作团队：邓锦辉&nbsp;林涌斌&nbsp;朱子乐&nbsp;项敏琪</p>
		<p>Technology:HTML/CSS/JavaScript/PHP/MySql</p>
	</footer>
	<script src="js/jquery.js"></script>
	<script src="js/select_seat.js"></script>
 </body>
</html>
