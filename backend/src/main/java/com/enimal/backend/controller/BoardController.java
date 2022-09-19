package com.enimal.backend.controller;

import com.enimal.backend.dto.Board.BoardListDto;
import com.enimal.backend.dto.Board.BoardRegistDto;
import com.enimal.backend.dto.Board.BoardShowDto;
import com.enimal.backend.dto.Board.BoardUpdateDto;
import com.enimal.backend.dto.Notice.NoticeListDto;
import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.dto.Notice.NoticeShowDto;
import com.enimal.backend.dto.Notice.NoticeUpdateDto;
import com.enimal.backend.repository.BoardRepository;
import com.enimal.backend.service.BoardService;
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
    @DeleteMapping("/board") // 자유게시판 삭제
    public ResponseEntity<?> deleteBoard(HttpServletRequest request, @RequestParam(value = "idx") Integer idx){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            boolean is = boardService.deleteBoard(userId,idx);
            if(is) result.put("message",okay);
            else result.put("message",fail);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message","서버에러");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/boardList") // 자유게시판 리스트 조회
    public ResponseEntity<?> listBoard(@RequestParam(value = "pageSize") Integer pageSize,@RequestParam(value = "lastIdx") Integer lastIdx){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        try{
            List<BoardListDto> data = boardService.listBoard(pageSize,lastIdx);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message","서버에러");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @GetMapping("/board") // 자유게시판 세부 조회
    public ResponseEntity<?> detailBoard(HttpServletRequest request, @RequestParam(value = "idx") Integer idx){
        Map<String,Object> result = new HashMap<>() ;
        HttpStatus status;
        try{
            BoardShowDto data = boardService.detailBoard(idx);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message","서버에러");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @PutMapping("/board") // 자유게시판 수정
    public ResponseEntity<?> updateBoard(HttpServletRequest request, @RequestBody BoardUpdateDto boardUpdateDto){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        String userId = (String) request.getAttribute("userId");
        try{
            if(userId.equals(boardUpdateDto.getUser_id())){ // 작성자인지 확인
                boolean is = boardService.updateBoard(boardUpdateDto);
                result.put("result",is);
                status = HttpStatus.OK;
            }
            else{
                result.put("message",fail);
                status = HttpStatus.OK;
            }
        }catch (Exception e){
            result.put("message","서버에러");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }

}
