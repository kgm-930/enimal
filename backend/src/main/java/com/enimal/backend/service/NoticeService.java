package com.enimal.backend.service;

import com.enimal.backend.dto.Notice.NoticeListDto;
import com.enimal.backend.dto.Notice.NoticeRegistDto;

import java.util.List;

public interface NoticeService {
    boolean registNotice(NoticeRegistDto noticeRegistDto);
    List<NoticeListDto> listNotice();
}
