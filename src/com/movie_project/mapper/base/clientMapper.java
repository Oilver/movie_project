package com.movie_project.mapper.base;

import com.movie_project.model.entity.client;
import com.movie_project.model.entity.clientExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface clientMapper {
    int countByExample(clientExample example);

    int deleteByExample(clientExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(client record);

    int insertSelective(client record);

    List<client> selectByExample(clientExample example);

    client selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") client record, @Param("example") clientExample example);

    int updateByExample(@Param("record") client record, @Param("example") clientExample example);

    int updateByPrimaryKeySelective(client record);

    int updateByPrimaryKey(client record);
}