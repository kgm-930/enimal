package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Board.BoardListDto;
import com.enimal.backend.dto.Board.BoardRegistDto;
import com.enimal.backend.dto.Board.BoardShowDto;
import com.enimal.backend.dto.Board.BoardUpdateDto;
import com.enimal.backend.dto.Notice.NoticeListDto;
import com.enimal.backend.entity.Board;
import com.enimal.backend.entity.Comment;
import com.enimal.backend.entity.Notice;
import com.enimal.backend.entity.User;
import com.enimal.backend.repository.BoardRepository;
import com.enimal.backend.repository.CommentRepository;
import com.enimal.backend.repository.NoticeRepository;
import com.enimal.backend.repository.UserRepository;
import com.enimal.backend.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class BoardServiceImpl implements BoardService {
    private NoticeRepository noticeRepository;
    private UserRepository userRepository;
    private BoardRepository boardRepository;
    private CommentRepository commentRepository;
    @Autowired
    BoardServiceImpl(NoticeRepository noticeRepository,UserRepository userRepository,BoardRepository boardRepository,CommentRepository commentRepository){
        this.noticeRepository = noticeRepository;
        this.userRepository = userRepository;
        this.boardRepository = boardRepository;
        this.commentRepository = commentRepository;
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
        List<Comment> comments = commentRepository.findByBoard_Idx(idx);
        if(board.isPresent()){
            String realId = board.get().getUser().getId();
            // 작성자의 경우만 삭제 가능하도록
            if(realId.equals(userId)){
                boardRepository.deleteById(idx);
                for(int i=0; i<comments.size(); i++){ // 관련 게시물 댓글 삭제
                    commentRepository.deleteById(comments.get(i).getIdx());
                }
                return true;
            }
            else return false;
        }
        else return false;
    }

    @Override
    public List<BoardListDto> listBoard(Integer pageSize, Integer lastIdx) {
        List<BoardListDto> boardListDtos = new ArrayList<>();
        Pageable pageable = PageRequest.ofSize(pageSize);
        if (lastIdx == 0) {
            lastIdx = boardRepository.findTop1ByOrderByIdxDesc().get().getIdx() + 1;
        }
        Slice<Board> boards = boardRepository.findAllByOrderByIdxDesc(lastIdx, pageable);
        for (Board board : boards) {
            BoardListDto boardListDto = new BoardListDto();
            boardListDto.setTitle(board.getTitle());
            boardListDto.setView(board.getView());
            boardListDto.setUser_id(board.getUser().getId());
            boardListDto.setIdx(board.getIdx());
            boardListDto.setPicture(board.getPicture());
            boardListDtos.add(boardListDto);
        }
        return boardListDtos;
    }

    @Override
    public BoardShowDto detailBoard(Integer idx) {
        Optional<Board> board = boardRepository.findById(idx);
        BoardShowDto boardShowDto = new BoardShowDto();
        boardShowDto.setBoardTime(board.get().getModifydate());
        boardShowDto.setUser_id(board.get().getUser().getId());
        boardShowDto.setTitle(board.get().getTitle());
        boardShowDto.setContent(board.get().getContent());
        boardShowDto.setPicture(board.get().getPicture());
        board.get().setView(board.get().getView()+1);
        boardRepository.save(board.get());
        boardShowDto.setView(board.get().getView());
        return boardShowDto;
    }

    @Override
    public boolean updateBoard(BoardUpdateDto boardUpdateDto) {
        Optional<Board> board = boardRepository.findById(boardUpdateDto.getIdx());
        if(board.isPresent()){
            board.get().setTitle(boardUpdateDto.getTitle());
            board.get().setContent(boardUpdateDto.getContent());
            board.get().setPicture(boardUpdateDto.getPicture());
            board.get().setModifydate(LocalDateTime.now());
        }
        boardRepository.save(board.get());
        return true;
    }
}
