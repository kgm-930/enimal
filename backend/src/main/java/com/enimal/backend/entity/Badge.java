package com.enimal.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "BADGE")
public class Badge {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int idx;
    @Column(name = "user_id")
    private String userId;
    private String badge;
    private int percentage;
    private LocalDateTime createdate;
}
