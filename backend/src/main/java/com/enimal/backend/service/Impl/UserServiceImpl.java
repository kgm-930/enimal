package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.dto.User.UserAttendenceListDto;
import com.enimal.backend.dto.User.UserCommentListDto;
import com.enimal.backend.dto.User.UserLoginDto;
import com.enimal.backend.dto.User.UserPostListDto;
import com.enimal.backend.entity.*;
import com.enimal.backend.repository.*;
import com.enimal.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private AttendenceRepository attendenceRepository;
    private BoardRepository boardRepository;
    private CommentRepository commentRepository;
    private MoneyRepository moneyRepository;
    @Autowired
    UserServiceImpl(UserRepository userRepository,MoneyRepository moneyRepository, AttendenceRepository attendenceRepository,BoardRepository boardRepository,CommentRepository commentRepository){
        this.userRepository = userRepository;
        this.attendenceRepository = attendenceRepository;
        this.boardRepository = boardRepository;
        this.commentRepository = commentRepository;
    }

    @Override
    public void loginUser(UserLoginDto userLoginDto) {
        Optional<User> user = userRepository.findById(userLoginDto.getId());
        int convertDate = LocalDateTime.now().getDayOfYear();
        if(!user.isPresent()){ // 회원이 아니라면 회원 등록하기
            User userRegist = new User();
            userRegist.setId(userLoginDto.getId());
            userRegist.setNickname(userLoginDto.getId());
            userRegist.setWallet(userLoginDto.getWallet());
            userRepository.save(userRegist);
        }

        Optional<Attendence> attendenceCheck = attendenceRepository.findByUserIdAndConvertdate(userLoginDto.getId(),convertDate);
        if(!attendenceCheck.isPresent()){ // 출석체크 하지 않았다면 출석하기

            Attendence attendence = new Attendence();
            attendence.setUserId(userLoginDto.getId());
            attendence.setAttenddate(LocalDateTime.now());
            attendence.setConvertdate(LocalDateTime.now().getDayOfYear());
            attendenceRepository.save(attendence);
        }
    }

    @Override
    public void deleteUser(String userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public void updateUser(String userId, String userNickname) {
        Optional<User> user = userRepository.findById(userId);
        user.get().setNickname(userNickname);

        userRepository.save(user.get());
    }

    @Override
    public Map<Integer, LocalDateTime> attendUser(String userId) {
        Map<Integer, LocalDateTime> result = new HashMap<>();
        List<Attendence> attendences = attendenceRepository.findByUserId(userId);
        for(int i =0 ;i<attendences.size();i++){
            result.put(i+1,attendences.get(i).getAttenddate());
        }
        return result;
    }

    @Override
    public List<UserPostListDto> boardList(String userId,Integer pageSize,Integer lastIdx) {
        List<UserPostListDto> userPostListDtos = new ArrayList<>();
        Pageable pageable = PageRequest.ofSize(pageSize);
        if(lastIdx == 0){
            lastIdx = boardRepository.findTop1ByOrderByIdxDesc().get().getIdx() +1;
        }
        Slice<Board> boards = boardRepository.findByUserIdOrderByIdxDesc(userId,lastIdx,pageable);
        for(Board board : boards){
            UserPostListDto userPostListDto = new UserPostListDto();
            userPostListDto.setTitle(board.getTitle());
            userPostListDto.setContent(board.getContent());
            userPostListDto.setPicture(board.getPicture());
            userPostListDto.setCreateDate(board.getCreatedate());
            userPostListDto.setModifyDate(board.getModifydate());
            userPostListDto.setView(board.getView());
            userPostListDtos.add(userPostListDto);
        }

        return userPostListDtos;
    }

    @Override
    public List<UserCommentListDto> listCommentUser(String userId,Integer pageSize,Integer lastIdx) {
        List<UserCommentListDto> userCommentListDtos = new ArrayList<>();
        Pageable pageable = PageRequest.ofSize(pageSize);
        if(lastIdx == 0){
            lastIdx = commentRepository.findTop1ByOrderByIdxDesc().get().getIdx() +1;
        }
        Slice<Comment> comments = commentRepository.findByUserIdOrderByIdxDesc(userId,lastIdx,pageable);
        for(Comment comment : comments){
            UserCommentListDto userCommentListDto = new UserCommentListDto();
            userCommentListDto.setBoardIdx(comment.getBoard().getIdx());
            userCommentListDto.setBoardTitle(comment.getBoard().getTitle());
            userCommentListDto.setContent(comment.getContent());
            userCommentListDto.setCreateDate(comment.getCreatedate());
            userCommentListDtos.add(userCommentListDto);
        }
        return userCommentListDtos;
    }

    @Override
    public List<UserAttendenceListDto> listAttendenceUser(String userId) {
        List<UserAttendenceListDto> userAttendenceListDtos = new ArrayList<>();
        Integer convertDate = LocalDateTime.now().getDayOfYear();
        List<Attendence> attendences = attendenceRepository.findByUserIdLessThan(userId,convertDate);
        for(Attendence attendence : attendences){
            UserAttendenceListDto userAttendenceListDto = new UserAttendenceListDto();
            userAttendenceListDto.setAttendenceIdx(attendence.getIdx());
            userAttendenceListDto.setAttenddate(attendence.getAttenddate());
            userAttendenceListDto.setConvertdate(attendence.getConvertdate());
            userAttendenceListDtos.add(userAttendenceListDto);
        }

        return userAttendenceListDtos;
    }
}
