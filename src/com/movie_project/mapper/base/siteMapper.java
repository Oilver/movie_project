package com.movie_project.mapper.base;

import com.movie_project.model.entity.site;
import com.movie_project.model.entity.siteExample;
import com.movie_project.model.entity.siteKey;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface siteMapper {
    int countByExample(siteExample example);

    int deleteByExample(siteExample example);

    int deleteByPrimaryKey(siteKey key);

    int insert(site record);

    int insertSelective(site record);

    List<site> selectByExample(siteExample example);

    site selectByPrimaryKey(siteKey key);

    int updateByExampleSelective(@Param("record") site record, @Param("example") siteExample example);

    int updateByExample(@Param("record") site record, @Param("example") siteExample example);

    int updateByPrimaryKeySelective(site record);

    int updateByPrimaryKey(site record);
}