package com.enimal.backend.service;

import com.enimal.backend.dto.Board.BoardRegistDto;

public interface BoardService {
    void registBoard(BoardRegistDto boardRegistDto);

    boolean deleteBoard(String userId,Integer idx);
}
