package com.enimal.backend;

import com.enimal.backend.entity.Animal;
import com.enimal.backend.entity.Puzzle;
import com.enimal.backend.repository.AnimalRepository;
import com.enimal.backend.repository.BadgeRepository;
import com.enimal.backend.repository.PuzzleRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
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
    @Autowired
    EtcTests(AnimalRepository animalRepository,BadgeRepository badgeRepository,PuzzleRepository puzzleRepository){
        this.animalRepository = animalRepository;
        this.badgeRepository = badgeRepository;
        this.puzzleRepository = puzzleRepository;

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
}
