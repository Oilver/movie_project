<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
 <head>
  <meta charset="UTF-8">
  <title>评分</title>
  <link rel="stylesheet" href="css/comment.css">
 </head>
 <body>
	<p>用户评论</p>
	<form method="post" action="detail_movie.html">
		评分<input type="text" name="score" placeholder="满分10分,格式为：8.5"><br/>
		<textarea name="comment" placeholder="请把你想说的想进来"></textarea>评论
		<input type="submit" value="提交" class="submit">
	</form>
 </body>
</html>