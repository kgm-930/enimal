package com.enimal.backend.controller;

import com.enimal.backend.dto.Draw.AnimalAllDrawDto;
import com.enimal.backend.dto.Draw.AnimalSelectDrawDto;
import com.enimal.backend.service.EtcService;
import com.enimal.backend.service.DrawService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
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
    private static final String noCredit = "noCredit";
    EtcService etcService;
    DrawService drawService;
    @Autowired
    DrawController(EtcService etcService, DrawService drawService){
        this.etcService = etcService;
        this.drawService = drawService;
    }
    @PostMapping("/draw/all") // 전체 뽑기
    public ResponseEntity<?> drawAllAnimal(HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        String userId = (String) request.getAttribute("userId");
        HttpStatus status;
        try{
            AnimalAllDrawDto data = drawService.drawAllAnimal(userId);
            result.put("message",okay);
            if(data == null)
                result.put("message",noCredit);

            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
    @PostMapping("/draw/select/{Animal}") // 개별 뽑기
    public ResponseEntity<?> drawSelectAnimal(@PathVariable("Animal")String animal, HttpServletRequest request){
        Map<String,Object> result = new HashMap<>();
        String userId = (String) request.getAttribute("userId");
        HttpStatus status;
        try{
            AnimalSelectDrawDto data = drawService.drawSelectAnimal(userId,animal);
            result.put("message",okay);
            if(data == null)
                result.put("message",noCredit);

            result.put("data",data);
            status = HttpStatus.OK;
        }catch (Exception e){
            result.put("message",fail);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(result,status);
    }
}
