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
@Table(name = "COLLECTION")
public class Collection {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int idx;

    private String user_id;
    private String animal;
    private Date createdate;
    private String info;
}
