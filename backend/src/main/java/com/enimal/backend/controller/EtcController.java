package com.enimal.backend.controller;

import com.enimal.backend.dto.Etc.AnimalShowDto;
import com.enimal.backend.dto.Notice.NoticeListDto;
import com.enimal.backend.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class EtcController {
    private static final String okay = "SUCCESS";
    private static final String fail = "FAIL";
    AnimalService animalService;
    @Autowired
    EtcController(AnimalService animalService){
        this.animalService = animalService;
    }
    @GetMapping("/todayAnimal") // 오늘의 동물 조회
    public ResponseEntity<?> detailAnimal(){
        Map<String,Object> result = new HashMap<>();
        HttpStatus status;
        try{
            AnimalShowDto data = animalService.detailAnimal();
            result.put("message",okay);
            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
}
