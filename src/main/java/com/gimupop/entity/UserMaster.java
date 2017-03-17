package com.gimupop.entity;

import org.seasar.doma.Entity;
import org.seasar.doma.GeneratedValue;
import org.seasar.doma.GenerationType;
import org.seasar.doma.Id;

@Entity
public class UserMaster {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer user_id;
    public String userName;
    public String password;
}