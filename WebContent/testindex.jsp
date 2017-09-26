<%@page import="com.mysql.jdbc.Connection"%>
<%@page import="java.util.Collections"%>
<%@page import="com.movie_project.model.entity.movie"%>
<%@page import="java.util.List"%>
<%@page import="com.movie_project.model.entity.client"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.css">
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

<!--轮播图-->
<div id="myCarousel" class="carousel slide">
    <!-- 轮播（Carousel）指标 -->
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
    </ol>
    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner">
        <div class="item active">
            <img src="images/1.jpg" style="width:100%" alt="First slide">
        </div>
        <div class="item">
            <img src="images/2.jpg" style="width:100%" alt="Second slide">
        </div>
        <div class="item">
            <img src="images/3.jpg" style="width:100%" alt="Third slide">
        </div>
        <div class="item">
            <img src="images/4.jpg" style="width:100%" alt="Forth slide">
        </div>
        <div class="item">
            <img src="images/5.jpg" style="width:100%" alt="Five slide">
        </div>
        
    </div>
    <!-- 轮播（Carousel）导航 -->
    <a class="carousel-control left" href="#myCarousel"
       data-slide="prev">&lsaquo;</a>
    <a class="carousel-control right" href="#myCarousel"
       data-slide="next">&rsaquo;</a>
</div>


<!--正在热映-->
<p></p>
<div class="container">
    <div class="row-fluid">
        <span style="color: #c12e2a"><font size="5"><strong>正在热映</strong></font></span>
        <a href="hotMovie.jsp" class="divcss5-right" style="color: #c12e2a"><font size="2">全部</font><span
                class="glyphicon glyphicon-chevron-right"></span></a>
    </div>
    <div class="panel-body">
        <div class="bs-example" data-example-id="thumbnails-with-custom-content">
            <div class="row-fluid">
            <c:forEach items="${moviesDoing}" var="item" begin="0" end="4">
                <div class="col-sm-6 col-md-2">
             
                    <div class="thumbnail">
                     
                        <img src="${item.image }"
                             style="height: 200px; width: 100%; display: block;">
                        <p class="text-center" style="padding-top: 5px"><a href="movie/goMovDetail.action?id=${item.id }" >${item.movName}</a>
                        
                        </div>
             
                </div>
                 </c:forEach>
            </div>
            
        </div>
        
    </div>
    <p></p>
    <!--即将上映-->
    <div class="row-fluid">
        <span style="color: #5cb3fd"><font size="5"><strong>即将上映</strong></font></span>
        <a href="comingMovie.jsp" class="divcss5-right" style="color: #5cb3fd"><font size="2">全部</font><span
                class="glyphicon glyphicon-chevron-right"></span></a>
    </div>
    <div class="panel-body">
        <div class="bs-example" data-example-id="thumbnails-with-custom-content">
            <div class="row-fluid">
            <c:forEach items="${moviesComing}" var="item" begin="0" end="4">
                <div class="col-sm-6 col-md-2">
             
                    <div class="thumbnail">
                     
                        <img src="${item.image }"
                             style="height: 200px; width: 100%; display: block;">
                        <p class="text-center" style="padding-top: 5px"><a href="movie/goMovDetail.action?id=${item.id }" >${item.movName}</a>
                        
                        </div>
             
                </div>
                 </c:forEach>
            </div>
            
        </div>
        
</div>


</body>

<script src="bootstrap-3.3.7-dist/js/jquery.js"></script>
<script src="bootstrap-3.3.7-dist/js/bootstrap.js"></script>

</html>