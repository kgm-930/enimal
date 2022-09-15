package com.enimal.backend.config;

import com.enimal.backend.interceptor.Intercepter;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;
import java.util.List;

// interceptor를 등록
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    public List loginEssential = Arrays.asList(""); //적용할 URL 패턴
    public List loginInessential = Arrays.asList(""); //제외할 URL 패턴
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new Intercepter())
                .addPathPatterns(loginEssential)
                .excludePathPatterns(loginInessential);
    }
}