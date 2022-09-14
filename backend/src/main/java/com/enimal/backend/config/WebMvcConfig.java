package com.enimal.backend.config;

import com.enimal.backend.interceptor.Intercepter;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// interceptor를 등록
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new Intercepter())
                .addPathPatterns()
                .excludePathPatterns();
    }
}