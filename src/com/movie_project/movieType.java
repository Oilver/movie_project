package com.movie_project;

public class movieType {
	static String[] types={
			"爱情","喜剧", "动画", "剧情","恐怖", "惊悚", "科幻", "动作", "悬疑", "犯罪", "冒险", "战争", "奇幻", "运动", "家庭", "古装", "武侠", "西部", "历史", "传记", "情色", "歌舞", "黑色电影", "短片", "纪录片", "其他"};
	public static String gettype(int i){
		return types[i];
	}
	public static int getindex(String s){
		for(int i =0;i<types.length;i++){
			if(types[i].equals(s)){
				return i;
			}
		}
		return 0;
	}
}
