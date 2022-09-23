package com.enimal.backend.service;

import com.enimal.backend.dto.Etc.BadgeShowDto;
import com.enimal.backend.dto.User.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public interface UserService {
    BadgeShowDto loginUser(UserLoginDto userLoginDto);
    void deleteUser(String userId);
    void updateUser(String userId, String userNickname);
    Map<Integer, LocalDateTime>  attendUser(String userId);
    List<UserPostListDto> boardList(String userId,Integer pageSize,Integer lastIdx);
    List<UserCommentListDto> listCommentUser(String userId,Integer pageSize,Integer lastIdx);

    List<UserMoneyListDto> listMoneyUser(String userId);

    UserProfileDto profileUser(String userId);

    List<Map<String,Object>> completionUser(String profileId);

    List<UserCollectionDto> collectionUser(String userId);
}
