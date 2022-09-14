package com.enimal.backend.service;

import com.enimal.backend.dto.Notice.NoticeRegistDto;

public interface NoticeService {
    boolean registNotice(NoticeRegistDto noticeRegistDto);
}
