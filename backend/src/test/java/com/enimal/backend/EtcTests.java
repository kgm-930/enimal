package com.enimal.backend;

import com.enimal.backend.dto.Etc.UserRankShowDto;
import com.enimal.backend.entity.*;
import com.enimal.backend.repository.*;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class EtcTests {
    AnimalRepository animalRepository;
    BadgeRepository badgeRepository;
    PuzzleRepository puzzleRepository;
    UserRepository userRepository;
    CollectionRepository collectionRepository;
    @Autowired
    EtcTests(AnimalRepository animalRepository,BadgeRepository badgeRepository,PuzzleRepository puzzleRepository, UserRepository userRepository,CollectionRepository collectionRepository){
        this.animalRepository = animalRepository;
        this.badgeRepository = badgeRepository;
        this.puzzleRepository = puzzleRepository;
        this.userRepository = userRepository;
        this.collectionRepository = collectionRepository;

    }
    @Test
    void 오늘의_동물_조회(){
        Integer animal = LocalDateTime.now().getDayOfYear();
        System.out.println(animal);
        animal = animal % 24 + 1;
        Optional<Animal> a = animalRepository.findById(animal);
        System.out.println(a.get().getAnimal());
    }
    @Test
    void 전체뽑기(){
        char [] grade = {'E','E','E','E','E','E','D','D','D','D','D','C','C','C','C','B','B','B','A','A',};
        HashMap<Character,String> gradeDic = new HashMap<>();
        gradeDic.put('E',"위급");
        gradeDic.put('D',"위기");
        gradeDic.put('C',"취약");
        gradeDic.put('B',"준위협");
        gradeDic.put('A',"최소관심");

        String userId = "test";
        Long hap = badgeRepository.countByUserId(userId); // 내가 가진 업적 확인하기
        int drawType = 0; //0일때는 전체 뽑기, 1일때는 미보유 뽑기
        int randombox = 0;
        randombox = (int) (Math.random() * (100 + 1));
        if ( 0 <= randombox && randombox <=  hap*2 )  // 업적 보유량에 따라 선택
            drawType =1;

        randombox = (int) (Math.random() * (19 + 1)); // 0부터 19까지
        char drawGrade = grade[randombox];
        String drawGradeDic = gradeDic.get(drawGrade);
        List<Animal> animalList = animalRepository.findByGrade(drawGradeDic); //해당 등급의 동물들
        int randomEnimal = (int) (Math.random() * (animalList.size()-1 + 1 )); // 랜덤 동물 인덱스
        String drawEnimal = animalList.get(randomEnimal).getAnimal();
        int drawPuzzle = -1;



        if (drawType == 0) {// 전체 뽑기
            drawPuzzle = (int) (Math.random() * (8 + 1)); // 0부터 8까지
        } else {// 미보유 뽑기
            List<Puzzle> puzzleList = puzzleRepository.findByUserIdAndAnimal(userId, drawEnimal);
            int[] pices = {0, 0, 0, 0, 0, 0, 0, 0, 0};
            for (int i = 0; i < puzzleList.size(); i++) {
                int idx = puzzleList.get(i).getPiece();
                pices[idx] = 1;
            }
            int puzzleListSize = puzzleList.size();
            drawPuzzle = (int) (Math.random() * (8 - puzzleListSize + 1)); // 0~8 까지인 9개중 보유한 갯수를 제외한 최대수
            int cnt = 0;

            for (int i = 0; i < pices.length; i++) {
                if (pices[i] == 0) {
                    cnt++;
                }
                if (cnt == drawPuzzle) {
                    drawPuzzle = i;
                    break;
                }

            }

        }
        System.out.println(drawGradeDic); // 선택된 등급
        System.out.println(drawEnimal); // 선택된 동물
        System.out.println(drawPuzzle); // 선택된 조각
        Optional<Puzzle> userPuzzle = puzzleRepository.findByUserIdAndAnimalAndPiece(userId,drawEnimal,drawPuzzle);
        if(userPuzzle.isPresent()){ //존재한다면
            int getCount = userPuzzle.get().getCount();
            userPuzzle.get().setCount(getCount+1);

            puzzleRepository.save(userPuzzle.get());
        }else{
            Puzzle puzzle = new Puzzle();
            puzzle.setAnimal(drawEnimal);
            puzzle.setUserId(userId);
            puzzle.setPiece(drawPuzzle);
            puzzle.setCount(1);
            puzzle.setCreatedate(LocalDateTime.now());

            puzzleRepository.save(puzzle);
        }


    }
    @Test
    void 개별뽑기(){
        String choiceEnimal = "매";
        String userId = "test";
        Long hap = badgeRepository.countByUserId(userId); // 내가 가진 업적 확인하기
        boolean drawType = false; //0일때는 전체 뽑기, 1일때는 미보유 뽑기
        int randombox = 0;
        int drawPuzzle = -1;
        randombox = (int) (Math.random() * (100 + 1));
        if ( 0 <= randombox && randombox <=  hap*2 )  // 업적 보유량에 따라 선택
            drawType = true;
        if(!drawType) { //그냥 뽑기
            drawPuzzle = (int) (Math.random() * (8 + 1)); // 0부터 8까지
        }else{ //미보유 뽑기
            List<Puzzle> puzzleList = puzzleRepository.findByUserIdAndAnimal(userId, choiceEnimal);
            int[] pices = {0, 0, 0, 0, 0, 0, 0, 0, 0};
            int puzzleListSize = puzzleList.size();
            int cnt = 0;
            int idx = 0;
            int maxSize = 0;
            for (int i = 0; i < puzzleListSize; i++) {
                idx = puzzleList.get(i).getPiece();
                pices[idx] = 1;
            }

            maxSize = (int) (Math.random() * (8 - puzzleListSize + 1)); // 0~8 까지인 9개중 보유한 갯수를 제외한 최대수

            for (int i = 0; i < pices.length; i++) {
                if (pices[i] == 0) {
                    cnt++;
                }
                if (cnt == maxSize) {
                    drawPuzzle = i;
                    break;
                }

            }
        }

            Optional<Puzzle> userPuzzle = puzzleRepository.findByUserIdAndAnimalAndPiece(userId,choiceEnimal,drawPuzzle);
            if(userPuzzle.isPresent()){ //존재한다면
                int getCount = userPuzzle.get().getCount();
                userPuzzle.get().setCount(getCount+1);
                puzzleRepository.save(userPuzzle.get());
            }else{ //퍼즐이 처음이라면
                Puzzle puzzle = new Puzzle();
                puzzle.setAnimal(choiceEnimal);
                puzzle.setUserId(userId);
                puzzle.setPiece(drawPuzzle);
                puzzle.setCount(1);
                puzzle.setCreatedate(LocalDateTime.now());

                puzzleRepository.save(puzzle);
            }

        System.out.println(drawType);
        System.out.println(choiceEnimal);
        System.out.println(drawPuzzle);
    }
    @Test
    void 첫_뽑기_확인(){
        String userId = "test2";
        // 업적 1번 : 첫 뽑기
        List<Puzzle> puzzleList = puzzleRepository.findByUserId(userId); // 해당 아이디로 뽑기 전적이 있는지 확인
        Optional<User> user = userRepository.findById(userId);
        if(puzzleList.size()==0){
            Badge badge = new Badge();
            badge.setBadge("첫 걸음");
            badge.setCreatedate(LocalDateTime.now());
            badge.setUser(user.get());
            badge.setPercentage(2);
            badgeRepository.save(badge);
            System.out.println(badge.getBadge());
            System.out.println(badge.getCreatedate());
            System.out.println(badge.getUser().getId());
        }
    }
    @Test
    void 컬렉션_모음_여부(){
        String userId = "test2333";
        String drawEnimal = "수달";
        // 1종의 컬렉션을 모았는지 확인
        List<Puzzle> listForCollection = puzzleRepository.findByUserIdAndAnimal(userId,drawEnimal);
        int[] collect = new int[9];
        boolean flag = false;
        for(int i=0; i<listForCollection.size(); i++){
            collect[listForCollection.get(i).getPiece()] = listForCollection.get(i).getCount();
        }
        for(int i=0; i<collect.length; i++){
            if(collect[i]>0) flag = true;
            else flag = false; // 한조각이라도 없는 경우 컬렉션 완성 불가능
            if(!flag) break;
            if(flag && i==collect.length-1){ // 모은 경우 조각 감소 및 삭제
                Collection collection = new Collection(); // 컬렉션 추가
                collection.setAnimal(drawEnimal);
                collection.setCreatedate(LocalDateTime.now());
                collection.setUserId(userId);
                collectionRepository.save(collection);
                System.out.println(collection.getAnimal());
                System.out.println(collection.getUserId());
                for(int j=0; j<collect.length; j++){ // 컬렉션을 모은 경우 조각 개수 감소 또는 삭제
                    Optional<Puzzle> collectPuzzle = puzzleRepository.findByUserIdAndAnimalAndPiece(userId, drawEnimal, j);
                    int count = collectPuzzle.get().getCount();
                    if(count>1) {
                        collectPuzzle.get().setCount(count-1);
                        puzzleRepository.save(collectPuzzle.get());
                        System.out.println("조각 개수 감소");
                        System.out.println(count-1);
                    }
                    else {
                        puzzleRepository.delete(collectPuzzle.get());
                        System.out.println("조각 삭제");
                        System.out.println(count-1);
                    }
                }
                // 업적 13번 : 같은 종을 3번 모은 경우
                // 관련 업적이 없는 경우에만 추가해주기
                Optional<Badge> isBadge = badgeRepository.findByUserIdAndBadge(userId,"안 질려?");
                Optional<User> user = userRepository.findById(userId);
                if(isBadge.isEmpty()){
                    List<Collection> sameCollection = collectionRepository.findByUserIdAndAnimal(userId,drawEnimal);
                    int sameCount = sameCollection.size();
                    if(sameCount==3) {
                        Badge badge = new Badge();
                        badge.setBadge("안 질려?");
                        badge.setCreatedate(LocalDateTime.now());
                        badge.setUser(user.get());
                        badge.setPercentage(2);
                        badgeRepository.save(badge);
                        System.out.println(badge.getBadge());
                        System.out.println(badge.getCreatedate());
                        System.out.println(badge.getUser().getId());
                    }
                }
                // 업적 5번 : 24종의 컬렉션을 모두 모은 경우
                Optional<Badge> allBadge = badgeRepository.findByUserIdAndBadge(userId,"뽑기의 달인");
                if(allBadge.isEmpty()){
                    List<String> allCollection = collectionRepository.findByUserIdALL(userId);
                    if(allCollection.size() == 24){
                        Badge badge = new Badge();
                        badge.setBadge("뽑기의 달인");
                        badge.setCreatedate(LocalDateTime.now());
                        badge.setUser(user.get());
                        badge.setPercentage(2);
                        badgeRepository.save(badge);
                        System.out.println(badge.getBadge());
                        System.out.println(badge.getCreatedate());
                        System.out.println(badge.getUser().getId());
                    }
                }
            }
        }
    }
//    @Test
//    void 랭킹조회_컬렉션(){
//        Integer pageSize = 5;
//        Integer lastIdx = 0;
//        Slice<UserRankShowDto> collections = null;
//        Pageable pageable = PageRequest.ofSize(pageSize);
//        if (lastIdx == 0) {
//            lastIdx = collectionRepository.findTop1ByOrderByIdxDesc().get().getIdx() + 1;
//        }
//        collections = collectionRepository.findAllByOrderByIdxDesc(lastIdx, pageable);
//        for (UserRankShowDto collection : collections) {
//            System.out.println(collection.getUserId());
//        }
//        List<UserRankShowDto> test = collectionRepository.test();
//        for (UserRankShowDto userRankShowDto : test){
//            System.out.println(userRankShowDto.getUserId());
//            System.out.println(userRankShowDto.getCnt());
//        }
//    }
    @Test
    void 랭킹조회_기부(){
        Integer pageSize = 5;
        Integer lastIdx = 0;
        Slice<User> users = null;
        Pageable pageable = PageRequest.ofSize(pageSize);
        if (lastIdx == 0) {
            lastIdx = collectionRepository.findTop1ByOrderByIdxDesc().get().getIdx() + 1;
        }
        users = collectionRepository.findAllByOrderByIdxDesc(lastIdx, pageable);
        for (User user : users) {
            System.out.println(user.getId()+ " : " +user.getUsedcredit());
        }
    }
    @Test
    void 뽑기_횟수_100번_이상(){
        String userId = "test2333";
        String result = null;
        Optional<User> user = userRepository.findById(userId);
        List<Badge> list = badgeRepository.findByUserId(userId);
        Boolean flag = true;
        for(int i=0; i< list.size(); i++){
            if((list.get(i)).equals("뽑기 중독")) {
                flag = false;
                break;
            }
        }
        if(flag && user.get().getUsedcount()==100) result = "뽑기 중독";
        System.out.println(user.get().getUsedcount());
        System.out.println(result);
    }
    @Test
    void 연속으로_같은_조각(){
        String userId = "test2333";
        String animal = "수달";
        int puzzle = 1;
        Optional<User> user = userRepository.findById(userId);
        String lastPuzzle = user.get().getLastPuzzle();
        animal += Integer.toString(puzzle);
        System.out.println(animal);
        if(lastPuzzle.equals(animal)){
            System.out.println("연속");
        }
    }
}
