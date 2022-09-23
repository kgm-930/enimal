package com.enimal.backend.config;

import com.enimal.backend.interceptor.Intercepter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;
import java.util.List;

// interceptor를 등록
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    public List loginEssential = Arrays.asList("/**"); //적용할 URL 패턴
    public List loginInessential = Arrays.asList("/user/login","/user/profile/**","/user/completion/**","/todayAnimal","/noticeList/**","/boardList/**","/user/nickname/**"); //제외할 URL 패턴
    @Bean
    public Intercepter intercepter(){
        return new Intercepter();
    }
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(intercepter())
                .addPathPatterns(loginEssential)
                .excludePathPatterns(loginInessential);
    }
}