package com.movie_project.mapper.base;

import com.movie_project.model.entity.orders;
import com.movie_project.model.entity.ordersExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ordersMapper {
    int countByExample(ordersExample example);

    int deleteByExample(ordersExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(orders record);

    int insertSelective(orders record);

    List<orders> selectByExample(ordersExample example);

    orders selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") orders record, @Param("example") ordersExample example);

    int updateByExample(@Param("record") orders record, @Param("example") ordersExample example);

    int updateByPrimaryKeySelective(orders record);

    int updateByPrimaryKey(orders record);
    
    List<orders> findordersByCliId(Integer cliId);
}