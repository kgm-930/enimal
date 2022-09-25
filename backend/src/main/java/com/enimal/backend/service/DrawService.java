package com.enimal.backend.service;

import com.enimal.backend.dto.Draw.AnimalAllDrawDto;

public interface DrawService {

    AnimalAllDrawDto drawAllAnimal(String userId);
}
