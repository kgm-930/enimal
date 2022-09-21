package com.enimal.backend.dto.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class UserAttendenceListDto {
    private Integer attendenceIdx;
    private LocalDateTime attenddate;
    private Integer convertdate;

}
