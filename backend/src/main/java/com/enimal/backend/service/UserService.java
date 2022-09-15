package com.enimal.backend.service;

import com.enimal.backend.dto.User.UserLoginDto;

public interface UserService {
    void loginUser(UserLoginDto userLoginDto);
}
