package com.enimal.backend.service;

import com.enimal.backend.dto.User.UserLoginDto;

public interface UserService {
    void loginUser(UserLoginDto userLoginDto);
    void deleteUser(String userId);
    void updateUser(String userId, String userNickname);
}
