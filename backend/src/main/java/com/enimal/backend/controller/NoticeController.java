package com.enimal.backend.controller;

import com.enimal.backend.dto.Notice.NoticeListDto;
import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class NoticeController {
    private static final String fail = "FAIL";
    NoticeService noticeService;
    @Autowired
    NoticeController(NoticeService noticeService){
        this.noticeService = noticeService;
    }

    @PostMapping("/notice") // 공지사항 작성
    public ResponseEntity<?> registNotice(@RequestBody NoticeRegistDto noticeRegistDto,HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            if(userId.equals("admin")){ // 작성자인지 확인
                boolean is = noticeService.registNotice(noticeRegistDto);
                result.put("result",is);
                status = HttpStatus.OK;
            }
            else{
                result.put("message",fail);
                status = HttpStatus.OK;
            }
        }catch (Exception e){
            result.put("result","서버에러");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/noticeList") // 공지사항 리스트 조회
    public ResponseEntity<?> listNotice(){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        try{
            List<NoticeListDto> data = noticeService.listNotice();
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
}
