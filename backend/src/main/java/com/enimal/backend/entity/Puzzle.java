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
@Table(name = "PUZZLE")
public class Puzzle {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int idx;

    private String user_id;
    private String animal;
    private int piece;
    private Date createdate;
    private int count;
}
