package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.entity.Notice;
import com.enimal.backend.repository.NoticeRepository;
import com.enimal.backend.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticeServiceImpl implements NoticeService {
    @Autowired
    NoticeRepository noticeRepository;
    @Override
    public boolean registNotice(NoticeRegistDto noticeRegistDto) {
        Notice notice = new Notice();
        notice.setTitle(noticeRegistDto.getTitle());
        notice.setContent(noticeRegistDto.getContent());
        noticeRepository.save(notice);
        return true;
    }
}
