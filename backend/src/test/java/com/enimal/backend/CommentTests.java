package com.enimal.backend;

import com.enimal.backend.dto.Comment.CommentShowDto;
import com.enimal.backend.entity.Board;
import com.enimal.backend.entity.Comment;
import com.enimal.backend.entity.User;
import com.enimal.backend.repository.BoardRepository;
import com.enimal.backend.repository.CommentRepository;
import com.enimal.backend.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class CommentTests {
    UserRepository userRepository;
    BoardRepository boardRepository;
    CommentRepository commentRepository;
    @Autowired
    public CommentTests( UserRepository userRepository, BoardRepository boardRepository,CommentRepository commentRepository){
        this.userRepository = userRepository;
        this.boardRepository = boardRepository;
        this.commentRepository = commentRepository;
    }
    @Test
    void 댓글_등록(){
        String userId = "test";
        Integer idx = 3;
        String content = "댓글입니다";
        Comment comment = new Comment();
        Optional<Board> board = boardRepository.findById(idx);
        Optional<User> user = userRepository.findById(userId);
        comment.setContent(content);
        comment.setBoard(board.get());
        comment.setCreatedate(LocalDateTime.now());
        comment.setUser(user.get());
        commentRepository.save(comment);
        System.out.println(comment.getContent());
        System.out.println(comment.getUser().getId());
        System.out.println(comment.getBoard().getIdx());
    }
    @Test
    void 댓글_조회(){
        Integer idx = 3;
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
        for(int i=0; i<commentShowDtos.size(); i++){
            System.out.println(commentShowDtos.get(i).getUser_id());
            System.out.println(commentShowDtos.get(i).getContent());
        }
    }
    @Test
    void 댓글_삭제(){
        Integer idx = 8;
        String userId = "sadfsafsdf";
        Optional<Comment> comment = commentRepository.findById(idx);
        if(userId.equals(comment.get().getUser().getId())){
            commentRepository.deleteById(idx);
        }
    }
}
