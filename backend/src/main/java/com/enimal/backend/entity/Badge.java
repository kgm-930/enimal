package com.enimal.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Badge {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int idx;

    private String user_id;
    private String badge;
    private int percentage;
}
