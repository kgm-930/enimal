package com.enimal.backend.controller;

import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.dto.User.UserCommentListDto;
import com.enimal.backend.dto.User.UserLoginDto;
import com.enimal.backend.dto.User.UserPostListDto;
import com.enimal.backend.service.JwtService;
import com.enimal.backend.service.NoticeService;
import com.enimal.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class UserController {
    private static final String okay = "SUCCESS";
    private static final String fail = "FAIL";
    private final NoticeService noticeService;
    private final UserService userService;
    private final JwtService jwtService;
    @Autowired
    UserController(NoticeService noticeService,UserService userService,JwtService jwtService){
        this.noticeService = noticeService;
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @PostMapping("/user/login") // 지갑연결
    public ResponseEntity<?> loginUser(@RequestBody UserLoginDto userLoginDto, HttpServletResponse response){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        try{
            userService.loginUser(userLoginDto);
            String accessToken = jwtService.createAccessToken("id", userLoginDto.getId());
            String refreshToken = jwtService.createRefreshToken("id", userLoginDto.getId());
            result.put("Authorization", accessToken);
            result.put("message", okay);
            // create a cookie

            Cookie refreshCookie = new Cookie("refresh-token",refreshToken);
            refreshCookie.setMaxAge(1*60*60);
            refreshCookie.setPath("/");
            refreshCookie.setHttpOnly(true);
            refreshCookie.setSecure(true);

            response.addCookie(refreshCookie);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @DeleteMapping("/user") // 회원탈퇴
    public ResponseEntity<?> deleteUser(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = request.getHeader("userId");
        try{
            userService.deleteUser(userId);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }
    @PutMapping("/user") // 회원 수정
    public ResponseEntity<?> updateUser(HttpServletRequest request,@RequestBody Map<String, String> updateNickname){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            userService.updateUser(userId,updateNickname.get("nickname"));
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/user/attend") // 출석 정보 조회
    public ResponseEntity<?> attendUser(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            Map<Integer, LocalDateTime> data = userService.attendUser(userId);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/user/post") // 작성한 글 조회
    public ResponseEntity<?> listBoardUser(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            List<UserPostListDto> data = userService.boardList(userId);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/user/comment") //작성한 댓글 조회
    public ResponseEntity<?> listCommentUser(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            List<UserCommentListDto> data = userService.listCommentUser(userId);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(result,status);
    }

}
