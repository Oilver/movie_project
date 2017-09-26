<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>修改电影</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

  </head>
  
  <body>
  	<h1>修改movie</h1>
    <form action="movie_project/updatemovie.action?status=1" method="post">
		<table>
			<tr>
				<td>要修改电影的id</td><td><input type="text" name="id"></td>
			</tr>
			<tr>
				<td>电影名字</td><td><input type="text" name="movName"></td>
			</tr>
			<tr>
				<td>总分</td><td><input type="text" name="totalScore"></td>
			</tr>
			<tr>
				<td>类型</td><td><input type="text" name="type"></td>
			</tr>
			<tr>
				<td>上映时间</td><td><input type="text" name="showtime" value="<fmt:formatDate value="<%=new Date() %>" pattern="yyyy-MM-dd HH:mm:ss"/>"></td>
			</tr>
			<tr>
				<td>时长</td><td><input type="text" name="runningtime"/></td>
			</tr>
			<tr>
				<td>导演</td><td><input type="text" name="director"></td>
			</tr>
			<tr>
				<td>主演</td><td><input type="text" name="actor"></td>
			</tr>
			<tr>
				<td>介绍</td><td><input type="text" name="introduction"></td>
			</tr>
			<tr>
				<td>上映状态</td><td><input type="text" name="status"></td>
			</tr>
			<tr>
				<td>图片</td><td><input type="text" name="image"></td>
			</tr>
			<tr>
				<td><input type="submit" value="确认修改"></td>
			</tr>
		</table>
	</form>
  </body>
</html>
