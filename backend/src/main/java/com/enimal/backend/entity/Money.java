package com.enimal.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Money {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int idx;

    private String user_id;
    private int credit;
    private Date createdate;
}
