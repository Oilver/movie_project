package com.movie_project.mapper.base;

import com.movie_project.model.entity.screens;
import com.movie_project.model.entity.screensExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface screensMapper {
    int countByExample(screensExample example);

    int deleteByExample(screensExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(screens record);

    int insertSelective(screens record);

    List<screens> selectByExample(screensExample example);

    screens selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") screens record, @Param("example") screensExample example);

    int updateByExample(@Param("record") screens record, @Param("example") screensExample example);

    int updateByPrimaryKeySelective(screens record);

    int updateByPrimaryKey(screens record);
}