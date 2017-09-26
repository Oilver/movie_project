<%@page import="com.movie_project.model.entity.orders"%>
<%@page import="com.movie_project.model.entity.movie"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>
<%  
String path = request.getContextPath();  
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";  
%>  
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
 <head>
<base href="<%=basePath%>">
  <meta charset="UTF-8">
  <title>查看订单</title>
  <link rel="stylesheet" href="css/admin/admin_public.css ">
  <link rel="stylesheet" href="css/admin/storeroom.css ">
  <link rel="stylesheet" href="css/admin/movie_admin.css ">
  <script src="http://libs.baidu.com/jquery/2.0.0/jquery.js"></script>
  <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.css">
    <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/detail.css">
    <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/moviceDetail.css">
    <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/comment.css">
    <link href="http://www.jq22.com/jquery/bootstrap-3.3.4.css" rel="stylesheet">
    <script src="http://www.jq22.com/jquery/1.11.1/jquery.min.js"></script>
    <link href="bootstrap-3.3.7-dist/css/star-rating.css" media="all" rel="stylesheet" type="text/css"/>
    <script src="bootstrap-3.3.7-dist/js/star-rating.js" type="text/javascript"></script>
  <style>

        .nav li:hover .dropdown-menu {
            display: block;
        }

        .navbar-collapse a:hover .caret {
            -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            transform: rotate(180deg)
        }

        .caret {
            display: inline-block;
            width: 0;
            height: 0;
            margin-left: 2px;
            vertical-align: middle;
            border-top: 5px dashed #666;
            border-top: 5px solid #666 \9;
            border-right: 5px solid transparent;
            border-left: 5px solid transparent;
            -webkit-transition: all .2s ease;
            transition: all .2s ease
        }

        .divcss5-right {
            float: right;
            width: 260px;
            padding-top: 12px;
        }

        a:hover {
            text-decoration: none
        }

        .target-fix {
            position: relative;
            /*top: 975px; // 偏移为nav被fixed元素的高度*/
            /*display: block;*/
            /*height: 40px; //高度为0*/
            /*overflow: hidden;*/
            padding-top: 975px;
            margin-top: -975px;
        }

        h1.a-post:target {
            padding-top: 44px;
        }

    </style>
  
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
<div id="sort_search">
		<a href="index.jsp" id="add_movie">+返回首页+</a>
	</div>
	<div id="thead">
		<table class="public">
			<tr>
				<td>电影名字</td>
				<td>影厅号</td>
				<td>位置</td>
				<td>价格</td>
				<td>观看方式</td>
				<td>日期</td>
				<td>开始时间</td>
				<td>预计结束时间</td>
			</tr>
		</table>
	</div>
	<!-- 具体电影内容 -->
	<div id="movie_list" class="rt">
		<table class="public">
		<%List<orders> orders = (List<orders>)session.getAttribute("orders"); 
			for(int i = 0;i<orders.size();i++){
		%>
			<tr>
				<td><%=orders.get(i).getSessions().getMovie().getMovName() %></td>
				<td><%=orders.get(i).getSessions().getScreensId() %>号厅</td>
				<td><%=orders.get(i).getRowId() %>排<%=orders.get(i).getColumnId() %>列</td>
				<td><%=orders.get(i).getSessions().getPrice() %></td>
				<td><%=orders.get(i).getSessions().getView() %></td>
				<td><fmt:formatDate value="<%=orders.get(i).getSessions().getStartDate() %>" pattern="yyyy-MM-dd"/></td>
				<td><fmt:formatDate value="<%=orders.get(i).getSessions().getStartTime() %>" pattern="HH:mm:ss"/></td>
				<td><fmt:formatDate value="<%=orders.get(i).getSessions().getEndTime() %>" pattern="HH:mm:ss"/></td>
			</tr>
		<%} %>
		</table>
	</div>
	<!-- 遮挡 -->
	<div class="cover"></div>

 </body>
</html>
