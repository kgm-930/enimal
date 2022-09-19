package com.enimal.backend.controller;

import com.enimal.backend.dto.Board.BoardRegistDto;
import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.repository.BoardRepository;
import com.enimal.backend.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class BoardController {
    private static final String okay = "SUCCESS";
    private static final String fail = "FAIL";
    private final BoardService boardService;
    @Autowired
    BoardController(BoardService boardService){
        this.boardService = boardService;
    }
    @PostMapping("/board") // 자유게시판 등록
    public ResponseEntity<?> registBoard(@RequestBody BoardRegistDto boardRegistDto, HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            boardRegistDto.setUserId(userId);
            boardService.registBoard(boardRegistDto);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("result","서버에러");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
}
