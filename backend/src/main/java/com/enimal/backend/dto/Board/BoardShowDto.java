package com.enimal.backend.dto.Board;

import java.time.LocalDateTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BoardShowDto {
    private String title;
    private LocalDateTime boardTime;
    private String content;
    private Integer view;
    private String user_id;
    private Byte[] picture;
}
