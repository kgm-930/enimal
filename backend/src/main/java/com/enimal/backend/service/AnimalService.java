package com.enimal.backend.service;

import com.enimal.backend.dto.Etc.AnimalAllDrawDto;
import com.enimal.backend.dto.Etc.AnimalShowDto;

public interface AnimalService {
    AnimalShowDto detailAnimal();

    AnimalAllDrawDto drawAllAnimal(String userId);
}
