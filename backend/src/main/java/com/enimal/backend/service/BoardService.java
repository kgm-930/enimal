package com.enimal.backend.service;

import com.enimal.backend.dto.Board.BoardListDto;
import com.enimal.backend.dto.Board.BoardRegistDto;
import com.enimal.backend.dto.Board.BoardShowDto;
import com.enimal.backend.dto.Board.BoardUpdateDto;
import com.enimal.backend.dto.Etc.BadgeShowDto;

import java.util.List;

public interface BoardService {
    BadgeShowDto registBoard(BoardRegistDto boardRegistDto);

    boolean deleteBoard(String userId,Integer idx);

    List<BoardListDto> listBoard(Integer pageSize, Integer lastIdx);

    BoardShowDto detailBoard(Integer idx,String userid);

    boolean updateBoard(BoardUpdateDto boardUpdateDto);
}
