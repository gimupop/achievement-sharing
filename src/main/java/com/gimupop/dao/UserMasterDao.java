package com.gimupop.dao;

import com.gimupop.entity.UserMaster;
import org.seasar.doma.Dao;
import org.seasar.doma.Insert;
import org.seasar.doma.Select;
import org.seasar.doma.boot.ConfigAutowireable;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@ConfigAutowireable
@Dao
public interface UserMasterDao {
    @Select
    List<UserMaster> selectAll();

    @Insert
    @Transactional
    int insert(UserMaster userMaster);
}
