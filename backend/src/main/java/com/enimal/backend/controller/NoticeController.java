package com.enimal.backend.controller;

import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class NoticeController {
    NoticeService noticeService;
    @Autowired
    NoticeController(NoticeService noticeService){
        this.noticeService = noticeService;
    }
    // 공지사항 작성
    @PostMapping("/notice")
    public ResponseEntity<?> registNotice(@RequestBody NoticeRegistDto noticeRegistDto){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        try{
            boolean is = noticeService.registNotice(noticeRegistDto);
            result.put("result",is);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("result","서버에러");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    // 공지사항 조회
}
