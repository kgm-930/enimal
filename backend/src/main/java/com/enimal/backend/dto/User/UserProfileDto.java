package com.enimal.backend.dto.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

public class UserProfileDto {
//    String getUserId();
//    String getNickname();
//    String getWallet();
//    String getRanking();
    String user_id;
    String wallet;
    String nickname;
    Integer ranking;

    public UserProfileDto(String userId, String nickname,String wallet, Integer ranking){
        this.user_id = userId;
        this.nickname = nickname;
        this.wallet = wallet;
        this.ranking = ranking;
    }

    // 랭킹?
    // 보유 업적 - 타인도 가능
    // 보유 컬렉션 - 타인도 가능
    // 재화 내역
    // 출석 현황
    // 작성 게시글
    // 작성 댓글
}
