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
    <title>正在热映</title>
    <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.css">
    <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/movie.css">

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

        a:hover {
            text-decoration: none
        }

    </style>

</head>
<body>


<!--导航栏-->
<!--<div>-->
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


<nav class="subnav navbar-default">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul class="navbar">
                <li>
                    <a class="active" data-act="subnav-click" data-val="{subnavClick:1}">${sessionScope.searchName }</a>
                </li>
                <!-- 
                <li>
                    <a href="comingMovie.jsp" data-act="subnav-click" data-val="{subnavClick:2}">即将上映</a>
                </li>
                 -->
                <!--  <li>
                    <a href="classicMovie.jsp" data-act="subnav-click" data-val="{subnavClick:3}"
                       data-state-val="{subnavId:3}">经典影片</a>
                </li>-->
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>


<div class="container-fluid" class="page-movie/list">
    <div class="movies-channel">
        <div class="tags-panel">
            <ul class="tags-lines">
                <li class="tags-line" data-val="{tagTypeName:'cat'}">
                    <div class="tags-title">类型 :</div>
                    <ul class="tags">
                        <li class="active" data-state-val="{ catTagName:'全部'}">
                            <a data-act="tag-click" data-val="{TagName:'全部'}"
                               href="javascript:void(0);" style="cursor: default"
                            >全部</a>
                        </li>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'爱情'}"
                               href="movie/seleteMovieBytypeSearch.action?type=0"
                            >爱情</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'喜剧'}"
                               href="movie/seleteMovieBytypeSearch.action?type=1"
                            >喜剧</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'动画'}"
                               href="movie/seleteMovieBytypeSearch.action?type=2"
                            >动画</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'剧情'}"
                               href="movie/seleteMovieBytypeSearch.action?type=3"
                            >剧情</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'恐怖'}"
                               href="movie/seleteMovieBytypeSearch.action?type=4"
                            >恐怖</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'惊悚'}"
                               href="movie/seleteMovieBytypeSearch.action?type=5"
                            >惊悚</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'科幻'}"
                               href="movie/seleteMovieBytypeSearch.action?type=6"
                            >科幻</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'动作'}"
                               href="movie/seleteMovieBytypeSearch.action?type=7"
                            >动作</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'悬疑'}"
                               href="movie/seleteMovieBytypeSearch.action?type=8"
                            >悬疑</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'犯罪'}"
                               href="movie/seleteMovieBytypeSearch.action?type=9"
                            >犯罪</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'冒险'}"
                               href="movie/seleteMovieBytypeSearch.action?type=10"
                            >冒险</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'战争'}"
                               href="movie/seleteMovieBytypeSearch.action?type=11"
                            >战争</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'奇幻'}"
                               href="movie/seleteMovieBytypeSearch.action?type=12"
                            >奇幻</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'运动'}"
                               href="movie/seleteMovieBytypeSearch.action?type=13"
                            >运动</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'家庭'}"
                               href="movie/seleteMovieBytypeSearch.action?type=14"
                            >家庭</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'古装'}"
                               href="movie/seleteMovieBytypeSearch.action?type=15"
                            >古装</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'武侠'}"
                               href="movie/seleteMovieBytypeSearch.action?type=16"
                            >武侠</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'西部'}"
                               href="movie/seleteMovieBytypeSearch.action?type=17"
                            >西部</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'历史'}"
                               href="movie/seleteMovieBytypeSearch.action?type=18"
                            >历史</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'传记'}"
                               href="movie/seleteMovieBytypeSearch.action?type=19"
                            >传记</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'情色'}"
                               href="movie/seleteMovieBytypeSearch.action?type=20"
                            >情色</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'歌舞'}"
                               href="movie/seleteMovieBytypeSearch.action?type=21"
                            >歌舞</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'黑色电影'}"
                               href="movie/seleteMovieBytypeSearch.action?type=22"
                            >黑色电影</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'短片'}"
                               href="movie/seleteMovieBytypeSearch.action?type=23"
                            >短片</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'纪录片'}"
                               href="movie/seleteMovieBytypeSearch.action?type=24"
                            >纪录片</a>
                        <li>
                            <a data-act="tag-click" data-val="{TagName:'其他'}"
                               href="movie/seleteMovieBytypeSearch.action?type=25"
                            >其他</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="container">
    <div class="row-fluid">
        <div class="tags-panel" style="border: transparent">
            <input type="radio" name="sort" value="timeSort"><span>按时间排序</span>
            <input type="radio" name="sort" value="commentSort"><span>按评价排序</span>
        </div>
    </div>
    <div class="panel-body">
        <div class="bs-example" data-example-id="thumbnails-with-custom-content">
            <c:if test="${sessionScope.searchflag<0 }">
            <c:forEach items="${sessionScope.movieList }" var="item">
            <div class="row-fluid">
                <div class="col-sm-6 col-md-2">
                    <div class="thumbnail" style="border: transparent;">
                        <img src="${item.image }"
                             style="height: 200px; width: 100%; display: block;">
                        <div class="caption">
                            <p class="text-center"><a href="movie/goMovDetail.action?id=${item.id }"><font size="4px">${item.movName }</font></a></p>
                            <h3 class="text-center" style="color: #eea236">${item.totalScore }</h3>
                        </div>
                    </div>
                </div>
            </div>
			</c:forEach>
       	 </c:if>
       	 
       	 <c:if test="${sessionScope.searchflag>=0 }">
            <c:forEach items="${sessionScope.movieList2 }" var="item">
            <div class="row-fluid">
                <div class="col-sm-6 col-md-2">
                    <div class="thumbnail" style="border: transparent;">
                        <img src="${item.image }"
                             style="height: 200px; width: 100%; display: block;">
                        <div class="caption">
                            <p class="text-center"><a href="movie/seleteMovieById.action?id=${item.id }"><font size="4px">${item.movName }</font></a></p>
                            <h3 class="text-center" style="color: #eea236">${item.totalScore }</h3>
                        </div>
                    </div>
                </div>
            </div>
			</c:forEach>
       	 </c:if>
    </div>
</div>


</body>
</html>