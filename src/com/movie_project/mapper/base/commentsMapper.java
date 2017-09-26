package com.movie_project.mapper.base;

import com.movie_project.model.entity.comments;
import com.movie_project.model.entity.commentsExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface commentsMapper {
    int countByExample(commentsExample example);

    int deleteByExample(commentsExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(comments record);

    int insertSelective(comments record);

    List<comments> selectByExample(commentsExample example);

    comments selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") comments record, @Param("example") commentsExample example);

    int updateByExample(@Param("record") comments record, @Param("example") commentsExample example);

    int updateByPrimaryKeySelective(comments record);

    int updateByPrimaryKey(comments record);
}