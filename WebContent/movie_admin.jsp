<%@page import="com.movie_project.model.entity.movie"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
 <head>
  <meta charset="UTF-8">
  <title>喵眼电影管理平台</title>
  <link rel="stylesheet" href="css/admin/admin_public.css ">
  <link rel="stylesheet" href="css/admin/storeroom.css ">
  <link rel="stylesheet" href="css/admin/movie_admin.css ">
  <script src="http://libs.baidu.com/jquery/2.0.0/jquery.js"></script>
 </head>
 <body>
	<jsp:include page="admin_public/admin_header.html"></jsp:include>
	<!-- 导入左侧导航栏 -->
	<jsp:include page="admin_public/movie_admin_left_nav.html"></jsp:include>
	<div id="sort_search">
		<a href="add_movie.jsp" id="add_movie">+添加影片+</a>
	</div>
	<div id="thead">
		<table class="public">
			<tr>
				<td>id</td>
				<td>电影名称</td>
				<td>上映时间</td>
				<td>状态</td>
				<td>操作</td>
			</tr>
		</table>
	</div>
	<!-- 具体电影内容 -->
	<div id="movie_list" class="rt">
		<table class="public">
		<%List<movie> moviemanager = (List<movie>)session.getAttribute("moviemanager"); 
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		for(int i = 0;i<moviemanager.size();i++){
		%>
			<tr>
				<td><%=moviemanager.get(i).getId() %></td>
				<td><%=moviemanager.get(i).getMovName() %></td>
				<td><%=dateFormat.format(moviemanager.get(i).getShowtime()) %></td>
				<%if(moviemanager.get(i).getStatus()==0){ %>
				<td>即将上映</td><%} %>
				<%if(moviemanager.get(i).getStatus()==1){ %>
				<td>正在热映</td><%} %>
				<%if(moviemanager.get(i).getStatus()==-1){ %>
				<td>已经下架</td><%} %>
				<td>
					<button style="color: blue;" onclick="window.location.href='movie/addsession.action'">增加场次</button>
					<button style="color: green;" onclick="ater1(<%=moviemanager.get(i).getId() %>,1)">上映</button>
					<button style="color: red;" onclick="ater2(<%=moviemanager.get(i).getId() %>,-1)">下架</button>
				</td>
			</tr>
		<%} %>
		</table>
	</div>
	<!-- 遮挡 -->
	<div class="cover"></div>
	<script>
	    var btn = document.getElementById("add_session");
		btn.addEventListener("click",function(){
			location = "file:///C:/Users/User/Desktop/%E6%95%B0%E6%8D%AE%E5%BA%93/database/admin/add_session.html";
		})
		
		function ater1(id,status){
		var url = "movie/updatemovie.action?id="+id+"&status="+status;
			 $.ajax({
             type: "GET",
             url: url,
             success: function(data){
                       alert("上映成功！");
                      }
         });
		}
		
		function ater2(id,status){
		var url = "movie/updatemovie.action?id="+id+"&status="+status;
			 $.ajax({
             type: "GET",
             url: url,
             success: function(data){
                       alert("已经下架！");
                      }
         });
		}
		
	</script>
 </body>
</html>
