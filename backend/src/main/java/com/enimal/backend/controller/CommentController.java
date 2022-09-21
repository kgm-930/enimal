package com.enimal.backend.controller;

import com.enimal.backend.dto.Board.BoardRegistDto;
import com.enimal.backend.dto.Comment.CommentRegistDto;
import com.enimal.backend.dto.Comment.CommentShowDto;
import com.enimal.backend.dto.Notice.NoticeListDto;
import com.enimal.backend.service.CommentService;
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
public class CommentController {
    private static final String okay = "SUCCESS";
    private static final String fail = "FAIL";
    private static final String admin = "admin";
    CommentService commentService;
    @Autowired
    CommentController(CommentService commentService){
        this.commentService = commentService;
    }
    @PostMapping("/comment")
    public ResponseEntity<?> registComment(@RequestBody CommentRegistDto commentRegistDto, HttpServletRequest request, @RequestParam(name = "idx")Integer idx){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            commentRegistDto.setIdx(idx);
            commentRegistDto.setUser_id(userId);
            commentService.registComment(commentRegistDto);
            result.put("message",okay);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/comment") // 댓글 조회
    public ResponseEntity<?> listComment(@RequestParam(name = "idx")Integer idx){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        try{
            List<CommentShowDto> data = commentService.listComment(idx);
            result.put("message",okay);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @DeleteMapping("/comment") // 댓글 삭제
    public ResponseEntity<?> deleteComment(HttpServletRequest request, @RequestParam(value = "comment_idx") Integer comment_idx){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            boolean is = commentService.deleteComment(comment_idx,userId);
            if(is) result.put("message",okay);
            else result.put("message",fail);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
}
