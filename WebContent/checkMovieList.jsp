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
    
    <title>My JSP 'CheckMovieList.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>

    <table width="100%" border=1>
		<tr>
			<td>电影名字</td>
			<td>评分</td>
			<td>类型</td>
			<td>上映时间</td>
		</tr>
	<c:if test="${movieList!=null}">
		<c:forEach items="${movieList}" var="movie">
			<tr>
			<td>${movie.movName }</td>
			<td>${movie.totalScore }</td>
			<td>${movie.type }</td>
			<td><fmt:formatDate value="${movie.showtime}" pattern="yyyy-MM-dd HH:mm:ss"/></td>
			</tr>
		</c:forEach>
	</c:if>
	</table>
	<a href="index.jsp">返回首页</a>
  </body>
</html>
