package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Draw.AnimalAllDrawDto;
import com.enimal.backend.dto.Draw.AnimalSelectDrawDto;
import com.enimal.backend.entity.Animal;
import com.enimal.backend.entity.Puzzle;
import com.enimal.backend.entity.User;
import com.enimal.backend.repository.AnimalRepository;
import com.enimal.backend.repository.BadgeRepository;
import com.enimal.backend.repository.PuzzleRepository;
import com.enimal.backend.repository.UserRepository;
import com.enimal.backend.service.DrawService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;


@Service
public class DrawServiceImpl implements DrawService {
    char [] grade = {'E','E','E','E','E','E','D','D','D','D','D','C','C','C','C','B','B','B','A','A',};


    BadgeRepository badgeRepository;
    AnimalRepository animalRepository;
    PuzzleRepository puzzleRepository;
    UserRepository userRepository;
    @Autowired
    DrawServiceImpl(BadgeRepository badgeRepository, UserRepository userRepository, AnimalRepository animalRepository, PuzzleRepository puzzleRepository){
        this.badgeRepository = badgeRepository;
        this.animalRepository = animalRepository;
        this.userRepository = userRepository;
        this.puzzleRepository = puzzleRepository;
    }
    private boolean drawCredit(int type, String userId){
        try{
            Optional<User> user = userRepository.findById(userId);
            int userCredit = user.get().getCredit();
            if(type == 0){ // 전체 뽑기
                userCredit -= 100;
            } else if (type == 1) { //개별 뽑기
                userCredit -= 1000;
            }
            if(userCredit < 0){
                return false;
            }
            user.get().setCredit(userCredit);
            userRepository.save(user.get());
            return true;
        }catch (Exception e){
            return false;
        }
    }
    @Override
    public AnimalAllDrawDto drawAllAnimal(String userId) {
        AnimalAllDrawDto animalAllDrawDto = new AnimalAllDrawDto();
        HashMap<Character,String> gradeDic = new HashMap<>();
        gradeDic.put('E',"위급");
        gradeDic.put('D',"위기");
        gradeDic.put('C',"취약");
        gradeDic.put('B',"준위협");
        gradeDic.put('A',"최소관심");

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

        Optional<Puzzle> userPuzzle = puzzleRepository.findByUserIdAndAnimalAndPiece(userId,drawEnimal,drawPuzzle);
        if(userPuzzle.isPresent()){ //존재한다면
            int getCount = userPuzzle.get().getCount();
            userPuzzle.get().setCount(getCount+1);
            if(drawCredit(0,userId)){
                puzzleRepository.save(userPuzzle.get());
                animalAllDrawDto.setCount(getCount+1);
                animalAllDrawDto.setBadge(false);
            }else{
                return null;
            }
        }else{
            Puzzle puzzle = new Puzzle();
            puzzle.setAnimal(drawEnimal);
            puzzle.setUserId(userId);
            puzzle.setPiece(drawPuzzle);
            puzzle.setCount(1);
            puzzle.setCreatedate(LocalDateTime.now());
            animalAllDrawDto.setCount(1);
            if(drawCredit(0,userId)){
                puzzleRepository.save(puzzle);
                animalAllDrawDto.setBadge(true);
            }else{
                return null;
            }

        }
        animalAllDrawDto.setAnimal(drawEnimal);
        animalAllDrawDto.setPiece(drawPuzzle);
        ////////////////////////////////////////////////////////////////
        // 완성했는지 체크하기
        ////////////////////////////////////////////////////////////////

        return animalAllDrawDto;
    }

    @Override
    public AnimalSelectDrawDto drawSelectAnimal(String userId, String animal) {
        String choiceEnimal = animal;
        Long hap = badgeRepository.countByUserId(userId); // 내가 가진 업적 확인하기
        boolean drawType = false; //0일때는 전체 뽑기, 1일때는 미보유 뽑기
        int randombox = 0;
        int drawPuzzle = -1;
        AnimalSelectDrawDto animalSelectDrawDto = new AnimalSelectDrawDto();
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
        animalSelectDrawDto.setAnimal(choiceEnimal);
        animalSelectDrawDto.setPiece(drawPuzzle);
        return animalSelectDrawDto;
    }
}
