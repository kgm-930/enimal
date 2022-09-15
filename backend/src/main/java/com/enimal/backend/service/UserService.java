package com.enimal.backend.service;

import com.enimal.backend.dto.User.UserLoginDto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public interface UserService {
    void loginUser(UserLoginDto userLoginDto);
    void deleteUser(String userId);
    void updateUser(String userId, String userNickname);

    Map<Integer, LocalDateTime>  attendUser(String userId);
}
