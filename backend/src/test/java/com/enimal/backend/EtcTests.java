package com.enimal.backend;

import com.enimal.backend.entity.Animal;
import com.enimal.backend.repository.AnimalRepository;
import com.enimal.backend.repository.BadgeRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDateTime;
import java.util.Optional;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class EtcTests {
    AnimalRepository animalRepository;
    BadgeRepository badgeRepository;
    @Autowired
    EtcTests(AnimalRepository animalRepository,BadgeRepository badgeRepository){
        this.animalRepository = animalRepository;
        this.badgeRepository = badgeRepository;
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
        String userId = "test";
        Long hap = badgeRepository.countByUserId(userId); // 내가 가진 업적 확인하기
        int drawType = 0; //0일때는 전체 뽑기, 1일때는 미보유 뽑기
        int randombox = 0;
        randombox = (int) (Math.random() * (100 + 1));
        if ( 0 <= randombox && randombox <=  hap*2 )
            drawType =1;

        // 전체 뽑기
        // 미보유 뽑기



    }
}
