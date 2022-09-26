package com.enimal.backend.service;

import com.enimal.backend.dto.Draw.AnimalAllDrawDto;
import com.enimal.backend.dto.Draw.AnimalSelectDrawDto;

public interface DrawService {

    AnimalAllDrawDto drawAllAnimal(String userId);

    AnimalSelectDrawDto drawSelectAnimal(String userId, String animal);
}
