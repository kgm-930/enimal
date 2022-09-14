package com.enimal.backend;

import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.entity.Notice;
import com.enimal.backend.repository.NoticeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BackendApplicationTests {
	@Autowired
	NoticeRepository noticeRepository;

	@Test
	void 공지사항_등록_테스트() {
		NoticeRegistDto noticeRegistDto = new NoticeRegistDto();
		noticeRegistDto.setContent("test");
		noticeRegistDto.setTitle("titletest");

		Notice notice = new Notice();
		notice.setTitle(noticeRegistDto.getTitle());
		notice.setContent(noticeRegistDto.getContent());
		noticeRepository.save(notice);
	}
}
