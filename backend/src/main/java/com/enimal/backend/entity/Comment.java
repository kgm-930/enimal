package com.enimal.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "COMMENT")
public class Comment {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int idx;

    private String user_id;
    private String content;
    private int board_idx;
}
