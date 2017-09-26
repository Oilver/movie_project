<%@page import="com.movie_project.model.entity.sessions"%>
<%@page import="java.util.List"%>
<%@page import="com.movie_project.model.entity.movie"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%  
String path = request.getContextPath();  
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";  
%>  
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>
<html>
<base href="<%=basePath%>">  
 <head>
  <meta charset="UTF-8">
  <title>选择场次|喵眼电影</title>
  <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.css">
  <link rel="stylesheet" href="css/public.css ">
  <link rel="stylesheet" href="css/index.css">
  <link rel="stylesheet" href="css/detail_movie.css">
  <link rel="stylesheet" href="css/pay_select.css">
  <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/movie.css">
 </head>
 <body>
<!--导航栏-->
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="active"><a href="index.jsp">首页 <span class="sr-only">(current)</span></a></li>
                <li><a href="hotMovie.jsp">电影</a></li>
            </ul>
             <form class="navbar-form navbar-left" action="movie/selectByName.action" method="post">
                <div class="form-group">
                    <input type="text" class="form-control" name ="movName"  placeholder="找电影">
                </div>
                <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
            </form>
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false"> <span class="glyphicon glyphicon-user"></span><span class="caret"></span>
                    </a>
                     <ul class="dropdown-menu">
                   <c:if test="${sessionScope.User==null}">
                        <li><a href="login.jsp">登录</a></li>
                        <li><a href="register.jsp">注册</a></li>
                        </c:if>
					<c:if test="${sessionScope.User!=null}">
                        <li><a href="User/logout.action">退出登录</a></li>
                     </c:if>
                   
                      </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

<nav class="subnav navbar-default">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul class="navbar">
                <li>
                    <a href="hotMovie.jsp" data-act="subnav-click" data-val="{subnavClick:1}">正在热映</a>
                </li>
                <li>
                    <a href="comingMovie.jsp" data-act="subnav-click" data-val="{subnavClick:2}">即将上映</a>
                </li>
                <!--  <li>
                    <a href="classicMovie.jsp" data-act="subnav-click" data-val="{subnavClick:3}"
                       data-state-val="{subnavId:3}">经典影片</a>
                </li>-->
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

<%
	movie mov_detail = (movie)session.getAttribute("mov_detail");
%>
	<div id="show_bill">
		<div class="photo" id="details_photo">
			<img src="<%=mov_detail.getImage() %>" border="0" alt="">
		</div>
		<div class="info" id="details_info">
			<h2 class="movieName"><%=mov_detail.getMovName() %></h2>
			<p class="language">国语</p>
			<p class="sort"><%=mov_detail.getType() %></p>
			<p><span class="area">中国大陆</span> / <span class="minutes"><%=mov_detail.getRunningtime() %></span></p>
			<p class="showing_time"><span class=""><%=mov_detail.getShowtime().toLocaleString() %></span>上映</p>
			<div id="user_mark" class="user_mark">
			<!-- 评分的星星可以通过修改markPhoto的width得到 -->
				用户评分:&nbsp;<span class="markNumber" id="markNumber"><%=mov_detail.getTotalScore() %></span><span id="markPhoto" class="markPhoto"></span>
			</div>
			剧情介绍：
			<div id="intro">
				<%=mov_detail.getIntroduction() %>
			</div>
		</div>
	</div>
	

	<div id="pay_select" class="">
		<p>选择场次</p>
		<c:forEach items="${sessionScope.movSessionList }" var="d" >
		<div id="selected" class="selected">
			<div id="" class="lf">
				放映时间：<span id="playTime"><fmt:formatDate value="${d.startDate }" pattern="yyyy-MM-dd"/> 
				<fmt:formatDate value="${d.startTime }" pattern="HH:mm:ss"/> </span><br>
				影厅：喵眼电影院&nbsp;&nbsp;<span id="play_room">${d.screensId }号厅</span>
			</div>
			<div id="" class="rt">
				<span>￥</span>&nbsp;<span id="price">${d.price }</span>&nbsp;起&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="ticket/chooseSeat.action?sesId=${d.id }&scrId=${d.screensId }">选座购票</a>
			</div>
		</div>
		</c:forEach>
	</div>
	<!-- 尾部 -->
	<footer ">
		<div>友情链接：<a href="http://www.dytt8.net/">电影天堂</a></div>
		<p style="margin-bottom:0px">&copy;2017 喵眼电影&nbsp;&nbsp;制作团队：邓锦辉&nbsp;林涌斌&nbsp;项敏琪&nbsp;朱子乐</p>
	</footer>
 </body>
</html>
