package com.enimal.backend.dto.User;

import com.enimal.backend.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class UserPostListDto {
    private String title;
    private LocalDateTime createDate;
    private LocalDateTime modifyDate;
    private String content;
    private Integer view;
    private Byte[] picture;
}
