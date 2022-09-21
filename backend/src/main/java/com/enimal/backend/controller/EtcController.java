package com.enimal.backend.controller;

import com.enimal.backend.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class EtcController {
    private static final String okay = "SUCCESS";
    private static final String fail = "FAIL";

}
