<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="UTF-8">
    <title>注册|喵眼</title>
    <link rel="stylesheet" href="css/login.css ">
    <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.css">
    <style>

        button.btn-link:hover {
            text-decoration: none
        }

        .divcss5-right {
            float: right;
            width: 480px;
        }

    </style>
</head>
<body>
<div class="right" id="register_content">
        <!--  <div class="row">
            <strong><span>注册|喵眼电影</span></strong>
            <span class="divcss5-right">已有账号？<a href="login.jsp" >立即登录</a></span>
        										
        </div>-->
    <form method="post" action="User/reg.action">
        <div class="row">
            <strong><span>注册|喵眼电影</span></strong>
            <span class="divcss5-right">已有账号？<a href="login.jsp" type="button" class="btn btn-link">立即登录</a></span>
        </div>


        <div class="row">
            <span>账号名：&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <input type="text" class="form-control" name="cliNum" style="width: 230px">
        </div>

        <div class="row">
            <span>*密码：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <input id="userPsw" type="password" class="form-control" name = "password" style="width: 230px">
        </div>

        <div class="row">
            <span>*确认密码：</span>
            <input id="confirmPsw" type="password" class="form-control"  name = "password2" style="width: 230px">
            <!--<i class="reg_psw">*两个密码不一样</i>-->
        </div>
        <div class="row">
            <span>*手机号：&nbsp;&nbsp;&nbsp;</span>
            <input type="text" class="form-control" name="phone" style="width: 230px"
                   onblur="message()">
            <!--<span id="alertMsg" class="reg_phone" style="color: #b02222;display:none">请输入正确手机号</span>-->
        </div>

        <div class="row">
            <span>昵称：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <input type="text" name="cliName" class="form-control" style="width: 230px">
        </div>


        <div class="row">
            <input type="checkbox" class="protocol">同意喵眼电影网站服务协议
            <button class="btn btn-link">用户注册协议</button>
            <!--<i class="pro"></i>-->
        </div>
        <button class="btn btn-default" style="width: 320px" type="submit">立即注册</button>
    </form>
</div>

<div id="register_logo" class="photo"></div>
<div class="footer">
    <div>友情链接：<a href="http://www.dytt8.net/">电影天堂</a></div>
    <p>&copy;2017 喵眼电影&nbsp;&nbsp;制作团队：邓锦辉&nbsp;林涌斌&nbsp;项敏琪&nbsp;朱子乐</p>
</div>

<script src="js/register.js"></script>
<script type="text/javascript">
    function message() {
        alert("请输入手机号");
    }
</script>
</body>
</html>

