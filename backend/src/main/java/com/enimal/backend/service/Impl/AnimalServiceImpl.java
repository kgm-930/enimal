package com.enimal.backend.service.Impl;

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
        Integer animal = LocalDateTime.now().getDayOfYear();
        animal = animal % 24 + 1;
        Optional<Animal> a = animalRepository.findById(animal);
        animalShowDto.setAnimal(a.get().getAnimal());
        animalShowDto.setContent(a.get().getContent());
        animalShowDto.setPicture(a.get().getPicture());
        animalShowDto.setGrade(a.get().getGrade());
        animalShowDto.setCount(a.get().getCount());
        return animalShowDto;
    }
}
