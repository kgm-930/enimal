package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Comment.CommentRegistDto;
import com.enimal.backend.dto.Comment.CommentShowDto;
import com.enimal.backend.entity.Board;
import com.enimal.backend.entity.Comment;
import com.enimal.backend.entity.User;
import com.enimal.backend.repository.BoardRepository;
import com.enimal.backend.repository.CommentRepository;
import com.enimal.backend.repository.UserRepository;
import com.enimal.backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService {
    private BoardRepository boardRepository;
    private UserRepository userRepository;
    private CommentRepository commentRepository;
    @Autowired
    CommentServiceImpl(BoardRepository boardRepository,UserRepository userRepository,CommentRepository commentRepository){
        this.boardRepository = boardRepository;
        this.userRepository = userRepository;
        this.commentRepository = commentRepository;
    }
    @Override
    public void registComment(CommentRegistDto commentRegistDto) {
        Comment comment = new Comment();
        Optional<Board> board = boardRepository.findById(commentRegistDto.getIdx());
        Optional<User> user = userRepository.findById(commentRegistDto.getUser_id());
        comment.setContent(commentRegistDto.getContent());
        comment.setBoard(board.get());
        comment.setCreatedate(LocalDateTime.now());
        comment.setUser(user.get());
        commentRepository.save(comment);
    }

    @Override
    public List<CommentShowDto> listComment(Integer idx) {
        List<Comment> comments = commentRepository.findByBoard_Idx(idx);
        List<CommentShowDto> commentShowDtos = new ArrayList<>();
        for(int i=0; i<comments.size(); i++){
            CommentShowDto commentShowDto = new CommentShowDto();
            commentShowDto.setCommentTime(comments.get(i).getCreatedate());
            commentShowDto.setComment_idx(comments.get(i).getIdx());
            commentShowDto.setContent(comments.get(i).getContent());
            commentShowDto.setUser_id(comments.get(i).getUser().getId());
            commentShowDto.setIdx(idx);
            commentShowDtos.add(commentShowDto);
        }
        return commentShowDtos;
    }
}
