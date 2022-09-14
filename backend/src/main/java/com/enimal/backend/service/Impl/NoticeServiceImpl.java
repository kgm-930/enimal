package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.service.NoticeService;
import org.springframework.stereotype.Service;

@Service
public class NoticeServiceImpl implements NoticeService {
    @Override
    public boolean registNotice(NoticeRegistDto noticeRegistDto) {
        return false;
    }
}
