package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Board.BoardRegistDto;
import com.enimal.backend.entity.Board;
import com.enimal.backend.entity.User;
import com.enimal.backend.repository.BoardRepository;
import com.enimal.backend.repository.NoticeRepository;
import com.enimal.backend.repository.UserRepository;
import com.enimal.backend.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Optional;


@Service
public class BoardServiceImpl implements BoardService {
    private NoticeRepository noticeRepository;
    private UserRepository userRepository;
    private BoardRepository boardRepository;
    @Autowired
    BoardServiceImpl(NoticeRepository noticeRepository,UserRepository userRepository,BoardRepository boardRepository){
        this.noticeRepository = noticeRepository;
        this.userRepository = userRepository;
        this.boardRepository = boardRepository;
    }
    @Override
    public void registBoard(BoardRegistDto boardRegistDto) {
        Board board = new Board();
        Optional<User> user = userRepository.findById(boardRegistDto.getUserId());
        board.setUser(user.get());
        board.setTitle(boardRegistDto.getTitle());
        board.setContent(boardRegistDto.getContent());
        board.setPicture(boardRegistDto.getPicture());
        board.setCreatedate(LocalDateTime.now());
        board.setModifydate(LocalDateTime.now());
        board.setView(0);
        boardRepository.save(board);
    }

    @Override
    @Transactional
    public boolean deleteBoard(String userId, Integer idx) {
        Optional<Board> board = boardRepository.findById(idx);
        if(board.isPresent()){
            String realId = board.get().getUser().getId();
            // 작성자의 경우만 삭제 가능하도록
            if(realId.equals(userId)){
                boardRepository.deleteById(idx);
                return true;
            }
            else return false;
        }
        else return false;
    }
}
