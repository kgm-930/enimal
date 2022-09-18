package com.enimal.backend.service;

import com.enimal.backend.dto.Notice.NoticeListDto;
import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.dto.Notice.NoticeShowDto;
import com.enimal.backend.entity.Notice;

import java.util.List;

public interface NoticeService {
    boolean registNotice(NoticeRegistDto noticeRegistDto);
    List<NoticeListDto> listNotice();

    NoticeShowDto detailNotice(Integer idx);
}
