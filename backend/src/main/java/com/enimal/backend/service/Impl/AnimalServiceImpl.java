package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Etc.AnimalAllDrawDto;
import com.enimal.backend.dto.Etc.AnimalShowDto;
import com.enimal.backend.entity.Animal;
import com.enimal.backend.repository.AnimalRepository;
import com.enimal.backend.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AnimalServiceImpl implements AnimalService {
    private AnimalRepository animalRepository;
    @Autowired
    AnimalServiceImpl(AnimalRepository animalRepository){
        this.animalRepository = animalRepository;
    }
    @Override
    public AnimalShowDto detailAnimal() {
        AnimalShowDto animalShowDto = new AnimalShowDto();
        Integer todayIdx = LocalDateTime.now().getDayOfYear();
        todayIdx = todayIdx % 24 + 1;
        Optional<Animal> animal = animalRepository.findById(todayIdx);
        animalShowDto.setAnimal(animal.get().getAnimal());
        animalShowDto.setContent(animal.get().getContent());
        animalShowDto.setPicture(animal.get().getPicture());
        animalShowDto.setGrade(animal.get().getGrade());
        animalShowDto.setCount(animal.get().getCount());
        return animalShowDto;
    }

    @Override
    public AnimalAllDrawDto drawAllAnimal(String userId) {
        return null;
    }
}
