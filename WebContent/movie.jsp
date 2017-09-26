<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- <!DOCTYPE html> -->
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
                <li class="active"><a href="#">首页 <span class="sr-only">(current)</span></a></li>
                <li><a href="#">电影</a></li>
            </ul>
            <form class="navbar-form navbar-left">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="找影视剧、影人、影院">
                </div>
                <button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
            </form>
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false"> <span class="glyphicon glyphicon-user"></span><span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="#">登录</a></li>
                        <!--<li><a href="#">Another action</a></li>-->
                        <!--<li><a href="#">Something else here</a></li>-->
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
    </ol>
    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner">
        <div class="item active">
            <img src="images/slide1.png" alt="First slide">
        </div>
        <div class="item">
            <img src="images/slide2.png" alt="Second slide">
        </div>
        <div class="item">
            <img src="images/slide3.png" alt="Third slide">
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
        <a href="#" class="divcss5-right" style="color: #c12e2a"><font size="2">全部</font><span
                class="glyphicon glyphicon-chevron-right"></span></a>
    </div>
    <div class="panel-body">
        <div class="bs-example" data-example-id="thumbnails-with-custom-content">
            <div class="row-fluid">
                <div class="col-sm-6 col-md-2">
                    <div class="thumbnail">
                        <img src="images/77.png"
                             style="height: 200px; width: 100%; display: block;">
                        <p class="text-center" style="padding-top: 5px"><a href="#">购票</a></div>
                </div>
            </div>
            <div class="row-fluid">
                <div class="col-sm-6 col-md-2">
                    <div class="thumbnail">
                        <img src="images/77.png"
                             style="height: 200px; width: 100%; display: block;">
                        <p class="text-center" style="padding-top: 5px"><a href="#">购票</a></div>
                </div>
                <div class="col-sm-6 col-md-2">
                    <div class="thumbnail">
                        <img src="images/77.png"
                             style="height: 200px; width: 100%; display: block;">
                        <p class="text-center" style="padding-top: 5px"><a href="#">购票</a></div>
                </div>
            </div>
            <div class="col-sm-6 col-md-2">
                <div class="thumbnail">
                    <img src="images/77.png"
                         style="height: 200px; width: 100%; display: block;">
                    <p class="text-center" style="padding-top: 5px"><a href="#">购票</a></div>
            </div>
        </div>
        <div class="col-sm-6 col-md-2">
            <div class="thumbnail">
                <img src="images/77.png"
                     style="height: 200px; width: 100%; display: block;">
                <p class="text-center" style="padding-top: 5px"><a href="#">购票</a></div>
        </div>
    </div>
    <p></p>
    <!--即将上映-->
    <div class="row-fluid">
        <span style="color: #5cb3fd"><font size="5"><strong>即将上映</strong></font></span>
        <a href="#" class="divcss5-right" style="color: #5cb3fd"><font size="2">全部</font><span
                class="glyphicon glyphicon-chevron-right"></span></a>
    </div>
    <div class="panel-body">
        <div class="bs-example" data-example-id="thumbnails-with-custom-content">
            <div class="row-fluid">
                <div class="col-sm-6 col-md-2">
                    <div class="thumbnail">
                        <img src="images/77.png"
                             style="height: 200px; width: 100%; display: block;">
                        <p class="text-center" style="padding-top: 5px"><a href="#">购票</a></div>
                </div>
            </div>
            <div class="row-fluid">
                <div class="col-sm-6 col-md-2">
                    <div class="thumbnail">
                        <img src="images/77.png"
                             style="height: 200px; width: 100%; display: block;">
                        <p class="text-center" style="padding-top: 5px"><a href="#">购票</a></div>
                </div>
                <div class="col-sm-6 col-md-2">
                    <div class="thumbnail">
                        <img src="images/77.png"
                             style="height: 200px; width: 100%; display: block;">
                        <p class="text-center" style="padding-top: 5px"><a href="#">购票</a></div>
                </div>
            </div>
            <div class="col-sm-6 col-md-2">
                <div class="thumbnail">
                    <img src="images/77.png"
                         style="height: 200px; width: 100%; display: block;">
                    <p class="text-center" style="padding-top: 5px"><a href="#">购票</a></div>
            </div>
        </div>
        <div class="col-sm-6 col-md-2">
            <div class="thumbnail">
                <img src="../images/77.png"
                     style="height: 200px; width: 100%; display: block;">
                <p class="text-center" style="padding-top: 5px"><a href="#">购票</a></div>
        </div>
    </div>
</div>


</body>

<script src="bootstrap-3.3.7-dist/js/jquery.js"></script>
<script src="bootstrap-3.3.7-dist/js/bootstrap.js"></script>

</html>