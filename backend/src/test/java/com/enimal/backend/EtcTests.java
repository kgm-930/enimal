package com.enimal.backend;

import com.enimal.backend.entity.Animal;
import com.enimal.backend.repository.AnimalRepository;
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
    @Autowired
    EtcTests(AnimalRepository animalRepository){
        this.animalRepository = animalRepository;
    }
    @Test
    void 오늘의_동물_조회(){
        Integer animal = LocalDateTime.now().getDayOfYear();
        System.out.println(animal);
        animal = animal % 24 + 1;
        Optional<Animal> a = animalRepository.findById(animal);
        System.out.println(a.get().getAnimal());
    }
}
