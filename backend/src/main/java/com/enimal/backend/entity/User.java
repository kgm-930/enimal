package com.enimal.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "USER")
public class User {
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int idx;

    private String wallet;
    private String nickname;
    @Id
    private String id;
    private int credit;
    private Date createdate;
    private int usedcredit;
    private int usedcount;
    private int donation;
}
