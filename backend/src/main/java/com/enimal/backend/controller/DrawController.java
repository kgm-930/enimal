package com.enimal.backend.controller;

import com.enimal.backend.dto.Etc.AnimalAllDrawDto;
import com.enimal.backend.dto.Etc.AnimalShowDto;
import com.enimal.backend.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class DrawController {
    private static final String okay = "SUCCESS";
    private static final String fail = "FAIL";
    AnimalService animalService;
    @Autowired
    DrawController(AnimalService animalService){
        this.animalService = animalService;
    }
    @PostMapping("/draw/all") // 전체 뽑기
    public ResponseEntity<?> drawAllAnimal(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        String userId = (String) request.getAttribute("userId");
        HttpStatus status;
        try{
            AnimalAllDrawDto data = animalService.drawAllAnimal(userId);
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
