<%@page import="com.movie_project.service.ClientService"%>
<%@page import="com.movie_project.controller.converter.CustomDateConverter"%>
<%@page import="org.springframework.ui.Model"%>
<%@page import="com.movie_project.model.entity.movie"%>
<%@page import="java.util.List"%>
<%@page import="com.movie_project.model.entity.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%  
String path = request.getContextPath();  
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";  
%>  
<%
	movie mov_detail = (movie)session.getAttribute("mov_detail");
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
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
                <li><a href="index.jsp">首页 <span class="sr-only">(current)</span></a></li>
                <li class="active"><a href="hotMovie.jsp">电影</a></li>
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
<div class="banner">
    <div class="wrapper clearfix">
        <div class="celeInfo-left">
            <div class="avater-shadow">
                <img class="avater" src=${sessionScope.mov_detail.image }>
                <div class="movie-ver"></div>
            </div>
        </div>
        <div class="celeInfo-right clearfix">
            <div class="movie-brief-container">
                <h3 class="name">${sessionScope.mov_detail.movName }</h3>
                <ul>
                    <li class="ellipsis">${sessionScope.mov_detail.type }</li>
                   
                    
                    <li class="ellipsis">${sessionScope.mov_detail.runningtime }分钟</li>
                    <li class="ellipsis"><fmt:formatDate value="${sessionScope.mov_detail.showtime }" pattern="yyyy-MM-dd"/>大陆上映</li>
                <button class="btn btn-danger btn-lg" onclick="window.location.href='ticket/showSession.action?mov_id=<%=mov_detail.getId() %>'">购票选座</button>
                </ul>
            </div>
            <div class="movie-stats-container">
                <div class="movie-index">
                    <p class="movie-index-title">用户评分</p>
                    <div class="movie-index-content score normal-score">
                        <span class="index-left info-num ">
                            <span class="stonefont">${sessionScope.mov_detail.totalScore }</span>
                        </span>
                        <div class="index-right">
                            <div class='star-wrapper'>
                                <div class="star-on" style="width:50%;"></div>
                            </div>
                            <span class='score-num'><span
                                    class="stonefont">123456</span>人评分</span>
                        </div>
                    </div>
                </div>
                <div class="movie-index">
                    <p class="movie-index-title">累计票房</p>
                    <div class="movie-index-content box">
                        <span class="stonefont">759456</span><span class="unit">万</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container page-movie/detail">
    <div class="main-content-container clearfix">
        <div id="brefing" class="bs-example" data-example-id="simple-nav-justified">
            <ul class="nav nav-tabs nav-justified">
                <li role="presentation" class="active"><a href="#brefing">剧情简介</a></li>
                <li role="presentation"><a href="#actor">演职人员</a></li>
                <li role="presentation"><a href="#comment">影片评价</a></li>
            </ul>
        </div>
        <div class="bs-docs-section">
            <h3 class="page-header">
                <a class="anchorjs-link"></a>剧情简介
            </h3>
            <div class="tab-content-container">
                <div class="tab-desc tab-content active">
                    <p id="actor">
                        <span class="dra">${sessionScope.mov_detail.introduction }</span>
                    </p>
                </div>
            </div>

            <div class="module">
                <div class="mod-title">
                    <h3 class="page-header">
                        <a class="anchorjs-link"></a>演职人员
                    </h3>
                    <a class="more" onclick="showHideCode()">全部<span
                            class="glyphicon glyphicon-chevron-right"></span></a>
                    <div class="row">
                        <div class="col-sm-2 col-md-2">
                            <div class="thumbnail" style="border: transparent">
                                <div class="caption">导演</div>
                                <img src="images/actorLogo.jpg" style="width: 128px;height: 170px;">
                                <div class="caption">
                                    <p class="text-center">${sessionScope.mov_detail.director }</p>
                                </div>
                            </div>
                        </div>
                        <%
                        movie mov = (movie)session.getAttribute("mov_detail");
                        String actorList = mov.getActor();
                        String[] actors = actorList.split("-");
                        
                        %>
                        <%for(int i=0;i<actors.length;i++){ %>
                        <div class="col-sm-2 col-md-2">
                            <div class="thumbnail" style="border: transparent">
                                <div class="caption">演员</div>
                                <img src="images/actorLogo.jpg" style="width: 128px;height: 170px;">
                                <div class="caption">
                                    <p class="text-center"><%=actors[i]%></p>
                                </div>
                            </div>
                        </div>
                        <%} %>
                    </div>
                </div>
            </div>


            <div class="module">
                <div class="mod-title">
                    <h3 id="comment" class="page-header">
                        <a class="anchorjs-link"></a>影片评价
                    </h3>
                </div>
                <div class="mod-content">
                 <%
                  List<comments> comList = (List<comments>)session.getAttribute("comList");
                  List<client> cliList = (List<client>)session.getAttribute("comCliList");
                 %>
                 <% for(int i =0;i<comList.size();i++){ %>
                    <ul>
                   
                        <li class="comment-container">
                            <div class="portrait-container">
                                <div class="portrait">
                                    <img src="images/userLogo.jpg">
                                </div>
                                <i class="level-2-icon"></i>
                            </div>
                            <div class="main">
                                <div class="main-header clearfix">
                                    <div class="user">
                                        <span id="userName">
                                        
                                        <%=cliList.get(i).getCliName() %>
                                        
                                        </span>
                                    </div>
                                    <div class="time" id="time" title="2017-06-26 13:40:37">
                                        <span id="date" title="2017-06-26 13:40:37"><fmt:formatDate value="<%=comList.get(i).getTime() %>" pattern="yyyy-MM-dd"/></span>
                                        <ul class="score-star clearfix" data-score="10">
                                           	<c:forEach begin="1" end="<%=comList.get(i).getScore() %>" step="2">
                                              <li>
                                                <i class="half-star left active"></i><i
                                                    class="half-star right active"></i></li>
                                            
                                            </c:forEach>
                                        </ul>
                                    </div>
                                </div>
                                <div class="comment-content">
							<%=comList.get(i).getComment() %>
                                </div>
                            </div>
                            </li>
                       
                    </ul>
                    <%} %>
                </div>
                <a class="comment-entry" href="#commentArea">写短评</a>
            </div>
        </div>
    </div>


    <form id="commentArea">
        请点击星星为该影片评分
        <input id="input-21e" value="0" type="number" class="rating" min=0 max=5 step=0.5 data-size="xs">
        <textarea class="form-control" rows="5" placeholder="我也来说说..."></textarea>
        <p></p>
        <button type="submit" class="btn btn-primary btn-sm" style="float: right">发布评论</button>
    </form>
    <script>

        jQuery(document).ready(function () {
            $(".rating-kv").rating();

        });

    </script>
</div>

<script type="text/javascript">

    function showHideCode() {
        $("#showdiv").toggle();
    }
</script>

<script src="bootstrap-3.3.7-dist/js/detail.js"></script>
<script src="bootstrap-3.3.7-dist/js/moviceDetail.js"></script>

</body>
</html>

