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
@Table(name = "BOARD")
public class Board {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int idx;
    @Column(name = "user_id")
    private String userId;
    private String title;
    private Date createdate;
    private Date modifydate;
    private String content;
    private int view;
    private Byte[] picture;
}
