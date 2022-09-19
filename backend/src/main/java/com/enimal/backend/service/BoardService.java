package com.enimal.backend.service;

import com.enimal.backend.dto.Board.BoardListDto;
import com.enimal.backend.dto.Board.BoardRegistDto;

import java.util.List;

public interface BoardService {
    void registBoard(BoardRegistDto boardRegistDto);

    boolean deleteBoard(String userId,Integer idx);

    List<BoardListDto> listBoard(Integer pageSize, Integer lastIdx);
}
