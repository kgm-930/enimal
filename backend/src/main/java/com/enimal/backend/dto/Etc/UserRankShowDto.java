package com.enimal.backend.dto.Etc;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public interface UserRankShowDto {
//    private String userId;
//    private Integer cnt;
//
//    public UserRankShowDto(String userId, int cnt){
//        this.userId = userId;
//        this.cnt = cnt;
//    }
    String getUserId();
    int getCnt();
}
