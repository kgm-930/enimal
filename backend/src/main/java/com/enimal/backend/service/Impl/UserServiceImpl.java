package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.dto.User.UserLoginDto;
import com.enimal.backend.entity.Attendence;
import com.enimal.backend.entity.User;
import com.enimal.backend.repository.AttendenceRepository;
import com.enimal.backend.repository.UserRepository;
import com.enimal.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private AttendenceRepository attendenceRepository;
    @Autowired
    UserServiceImpl(UserRepository userRepository, AttendenceRepository attendenceRepository){
        this.userRepository = userRepository;
        this.attendenceRepository = attendenceRepository;
    }

    @Override
    public void loginUser(UserLoginDto userLoginDto) {
        Optional<User> user = userRepository.findById(userLoginDto.getId());
        if(!user.isPresent()){ // 회원이 아니라면 회원 등록하기
            User userRegist = new User();
            userRegist.setId(userLoginDto.getId());
            userRegist.setNickname(userLoginDto.getId());
            userRegist.setWallet(userLoginDto.getWallet());
            userRepository.save(userRegist);
        }

    }

    @Override
    public void deleteUser(String userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public void updateUser(String userId, String userNickname) {
        Optional<User> user = userRepository.findById(userId);
        user.get().setNickname(userNickname);

        userRepository.save(user.get());
    }

    @Override
    public Map<Integer, LocalDateTime> attendUser(String userId) {
        Map<Integer, LocalDateTime> result = new HashMap<>();
        List<Attendence> attendences = attendenceRepository.findByUserId(userId);
        for(int i =0 ;i<attendences.size();i++){
            result.put(i+1,attendences.get(i).getAttenddate());
        }
        return result;
    }
}
