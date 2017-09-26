<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
 <head>
  <meta charset="UTF-8">
  <title>登录|喵眼</title>
  <link rel="stylesheet" href="css/login.css ">
 </head>
 <body>
	<div id="logo">
		<img src="images/logo.jpg" width="56" height="55" border="0" alt="喵眼">
		喵眼
	</div>
	<div class="right">
	<form method="post" action="User/login.action">
			账号登录<br/>
			<input type="text" name="cliNum" placeholder="手机号/用户名/邮箱"><br/>
			<input type="password" name="password" placeholder="密码"><br/>
			<input type="checkbox">7天内自动登录
			<a href="#" class="password">忘记密码？</a><br/>
			<input type="submit" value="登录" class="login"><br/>
			<b>还没有账号</b><a href="register.jsp">免费注册</a>
	</form>
	</div>
	<div  class="photo"></div>
	<div class="footer">
		<div>友情链接：<a href="http://www.dytt8.net/">电影天堂</a></div>
		<p>&copy;2017 喵眼电影&nbsp;&nbsp;制作团队：邓锦辉&nbsp;项敏琪&nbsp;朱子乐&nbsp;林涌斌</p>
	</div>
 </body>
</html>
