package com.enimal.backend.dto.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserProfileDto {
    private String nickname;
    private String wallet;
    // 랭킹?
    // 보유 업적 - 타인도 가능
    // 보유 컬렉션 - 타인도 가능
    // 재화 내역
    // 출석 현황
    // 작성 게시글
    // 작성 댓글
}
