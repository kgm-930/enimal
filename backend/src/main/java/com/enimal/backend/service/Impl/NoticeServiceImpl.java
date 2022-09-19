package com.enimal.backend.service.Impl;

import com.enimal.backend.dto.Notice.NoticeListDto;
import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.dto.Notice.NoticeShowDto;
import com.enimal.backend.dto.Notice.NoticeUpdateDto;
import com.enimal.backend.entity.Notice;
import com.enimal.backend.repository.NoticeRepository;
import com.enimal.backend.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.expression.spel.ast.StringLiteral;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class NoticeServiceImpl implements NoticeService {
    @Autowired
    NoticeRepository noticeRepository;
    @Override
    public boolean registNotice(NoticeRegistDto noticeRegistDto) {
        Notice notice = new Notice();
        notice.setTitle(noticeRegistDto.getTitle());
        notice.setContent(noticeRegistDto.getContent());
        notice.setCreatedate(LocalDateTime.now());
        notice.setModifydate(LocalDateTime.now());
        notice.setUser_id("admin");
        notice.setView(0);
        noticeRepository.save(notice);
        return true;
    }
    @Override
    public List<NoticeListDto> listNotice() {
        List<NoticeListDto> noticeListDtos = new ArrayList<>();
        Integer pageSize = 5;
        Integer lastIdx = 0;
        Pageable pageable = PageRequest.ofSize(pageSize);
        // 맨처음
        if (lastIdx == 0) {
            lastIdx = noticeRepository.findTop1ByOrderByIdxDesc().get().getIdx() + 1;
        }
        Slice<Notice> notices = noticeRepository.findAllByOrderByIdxDesc(lastIdx, pageable);
        for (Notice notice : notices) {
            NoticeListDto noticeListDto = new NoticeListDto();
            noticeListDto.setTitle(notice.getTitle());
            noticeListDto.setView(notice.getView());
            noticeListDto.setUser_id(notice.getUser_id());
            noticeListDto.setIdx(notice.getIdx());
            noticeListDtos.add(noticeListDto);
        }
        return noticeListDtos;
    }
    @Override
    public NoticeShowDto detailNotice(Integer idx) {
        Optional<Notice> notice = noticeRepository.findById(idx);
        NoticeShowDto noticeShowDto = new NoticeShowDto();
        noticeShowDto.setUser_id(notice.get().getUser_id());
        noticeShowDto.setTitle(notice.get().getTitle());
        noticeShowDto.setContent(notice.get().getContent());
        noticeShowDto.setNoticedate(notice.get().getModifydate());
        noticeShowDto.setView(notice.get().getView());
        return noticeShowDto;
    }
    @Override
    @Transactional
    public boolean deleteNotice(Integer idx) {
        noticeRepository.deleteById(idx);
        return true;
    }
    @Override
    public boolean updateNotice(NoticeUpdateDto noticeUpdateDto) {
        Optional<Notice> notice = noticeRepository.findById(noticeUpdateDto.getIdx());
        if(notice.isPresent()){
            notice.get().setTitle(noticeUpdateDto.getTitle());
            notice.get().setContent(noticeUpdateDto.getContent());
            notice.get().setModifydate(LocalDateTime.now());
        }
        noticeRepository.save(notice.get());
        return true;
    }
}
