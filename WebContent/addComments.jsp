<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>

<body>
	<form action="comments/addcomments.action" method="post">
		<table>
			<tr>
				<td>id</td><td><input type="text" name="id"></td>
			</tr>
			<tr>
				<td>cli_id</td><td><input type="text" name="cliId"></td>
			</tr>
			<tr>
				<td>ses_id</td><td><input type="text" name="sesId"></td>
			</tr>
			<tr>
				<td>score</td><td><input type="text" name="score"></td>
			</tr>
			<tr>
				<td>comment</td><td><input type="text" name="comment"/></td>
			</tr>
			<tr>
				<td>time</td><td><input type="text" name="time" value="<fmt:formatDate value="<%=new Date() %>" pattern="yyyy-MM-dd HH:mm:ss"/>"></td>
			</tr>
			<tr>
				<td><input type="submit" value="增加评论"></td>
			</tr>
		</table>
	</form>
</body>
</html>