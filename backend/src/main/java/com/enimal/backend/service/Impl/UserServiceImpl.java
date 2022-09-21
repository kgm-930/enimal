package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.User.*;
import com.enimal.backend.entity.*;
import com.enimal.backend.entity.Collection;
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
    private PuzzleRepository puzzleRepository;
    private CommentRepository commentRepository;
    private MoneyRepository moneyRepository;
    private CollectionRepository collectionRepository;
    private BadgeRepository badgeRepository;
    @Autowired
    UserServiceImpl(PuzzleRepository puzzleRepository,CollectionRepository collectionRepository, BadgeRepository badgeRepository,UserRepository userRepository,MoneyRepository moneyRepository, AttendenceRepository attendenceRepository,BoardRepository boardRepository,CommentRepository commentRepository){
        this.userRepository = userRepository;
        this.moneyRepository = moneyRepository;
        this.collectionRepository = collectionRepository;
        this.badgeRepository = badgeRepository;
        this.attendenceRepository = attendenceRepository;
        this.boardRepository = boardRepository;
        this.commentRepository = commentRepository;
        this.puzzleRepository = puzzleRepository;
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
    public List<UserMoneyListDto> listMoneyUser(String userId) {
        List<UserMoneyListDto> userMoneyListDtos = new ArrayList<>();
        List<Money> monies = moneyRepository.findByUserId("test");
        for(Money money : monies){
            UserMoneyListDto userMoneyListDto = new UserMoneyListDto();
            userMoneyListDto.setUseCredit(money.getCredit());
            userMoneyListDto.setCreateDate(money.getCreatedate());
            userMoneyListDtos.add(userMoneyListDto);
        }

        return userMoneyListDtos;
    }

    @Override
    public UserProfileDto profileUser(String nickname) {

        UserProfileDto userProfileDto = new UserProfileDto();
        Optional<User> user = userRepository.findByNickname(nickname);
        if(user.isPresent()){
            String userId = user.get().getId();
            Integer donationRank = userRepository.findByUserIdRank(userId); // 현재 나의 기부 순위
            Integer collectionCount = collectionRepository.countByUserId(userId); //현재 완성된 컬렉션 수
            Integer collectionRank = collectionRepository.findByUserIdRank(userId); //현재 나의 컬렉션 순위
            if(collectionRank == null) collectionRank = Math.toIntExact(userRepository.count());
            List<Badge> badges = badgeRepository.findByUserId(userId);
            List<UserBadgeListDto> userBadgeListDtos = new ArrayList<>();
            for(Badge badge:badges){
                UserBadgeListDto userBadgeListDto = new UserBadgeListDto();
                userBadgeListDto.setNickname(badge.getUser().getNickname());
                userBadgeListDto.setBadge(badge.getBadge());
                userBadgeListDto.setCreatedate(badge.getCreatedate());
                userBadgeListDto.setPercentage(badge.getPercentage());

                userBadgeListDtos.add(userBadgeListDto);
            }
            userProfileDto.setNickname(user.get().getNickname());
            userProfileDto.setCollectionCount(collectionCount);
            userProfileDto.setCollectionRank(collectionRank);
            userProfileDto.setDonationRank(donationRank);
            userProfileDto.setUsedCount(user.get().getUsedcount());
            userProfileDto.setUsedCredit(user.get().getUsedcredit());
            userProfileDto.setBadges(userBadgeListDtos);
        }
        return userProfileDto;
    }

    @Override
    public List<Map<String,Object>> completionUser(String nickname) {
        List<Map<String,Object>> result = new ArrayList<>();
        Optional<User> user = userRepository.findByNickname(nickname);
        if(user.isPresent()){
            List<Collection> collections = collectionRepository.findByUserId(user.get().getId());
            for(Collection collection : collections){
                Map<String,Object> data = new HashMap<>();
                data.put("animal",collection.getAnimal());
                data.put("info",collection.getInfo());
                data.put("createDate",collection.getCreatedate());
                result.add(data);
            }
        }
        return result;
    }

    @Override
    public List<UserCollectionDto> collectionUser(String userId) {
        List<UserCollectionDto> userCollectionDtos = new ArrayList<>();
        List<Puzzle> puzzles = puzzleRepository.findByUserIdOrderByAnimal(userId);
        for(Puzzle puzzle : puzzles){
            UserCollectionDto userCollectionDto = new UserCollectionDto();
            userCollectionDto.setAnimal(puzzle.getAnimal());
            userCollectionDto.setPiece(puzzle.getPiece());
            userCollectionDto.setCount(puzzle.getCount());
            userCollectionDto.setCreateDate(puzzle.getCreatedate());

            userCollectionDtos.add(userCollectionDto);
        }
        return userCollectionDtos;
    }
}
