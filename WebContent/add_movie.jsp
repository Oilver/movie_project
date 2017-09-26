<%@page import="java.util.Date"%>
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
  <title>喵眼电影管理平台</title>
  <link rel="stylesheet" href="css/admin/admin_public.css ">
  <link rel="stylesheet" href="css/admin/add_movie.css ">
 </head>
 <body>
 <script language="javascript" type="text/javascript" src="datePicker/WdatePicker.js"></script>
	<!-- 导入头部 -->
	<jsp:include page="admin_public/admin_header.html"></jsp:include>
	<!-- 导入左侧导航栏 -->
	<jsp:include page="admin_public/add_admin_left_nav.html"></jsp:include>
	<div id="movie_content">
		<c:if test="${error!=null }"> ${error } </c:if>
		<form method="post" action="movie/addmovie.action" id="addAction" enctype="multipart/form-data">
			电影名称：<input name="movName"><br/>
			电影类型：
			<select name="type" id="select_country">
				<option value="" selected>==选择==</option>
				<option value="动作" >动作</option>
				<option value="爱情">爱情</option>
				<option value="喜剧">喜剧</option>
				<option value="警匪">警匪</option>
				<option value="惊悚">惊悚</option>
				<option value="恐怖">恐怖</option>
				<option value="悬疑">悬疑</option>
				<option value="美剧">美剧</option>
				<option value="印度">印度</option>
				<option value="其他">其他</option>
			</select><br/>
			是否上映：
			<select name="status" id="select_language">
				<option value="" selected>==选择==</option>
				<option value="1">马上上映</option>
				<option value="0">即将上映</option>
				
			</select><br/>

			时长：<input name="runningtime" class="right_shift"><span class="">&nbsp;&nbsp;分钟</span><br/>
			导演：<input name="director" class="right_shift"><br/>
			主演：<input name="actor" class="right_shift"><br/>
			上映时间：<input name="showtime" size="25" width: 120px;" onFocus="WdatePicker({readOnly:true,dateFmt:'yyyy-MM-dd HH:mm:ss'})" /><br/>
			图片路径：<input name="image" size="25" width: 120px;" value="images/***.jpg" /><span class="">&nbsp;&nbsp;***填写图片名字</span><br/>
			电影简介：<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<textarea name="introduction" placeholder="简介....." cols="33" rows="5"></textarea>
			<input type="hidden" name="totalScore" value="0"><br>
			<input type="reset" class="reset" id="mov_reset">		
			<input type="submit" class="submit" id="mov_submit" value="提交">
			<!-- <input type="file" name="file"> -->
		</form>
	</div>
 </body>
 
</html>
