package com.enimal.backend;

import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.entity.*;
import com.enimal.backend.repository.*;
import com.enimal.backend.service.JwtService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.Optional;

@ExtendWith(SpringExtension.class)
@SpringBootTest
//@Transactional
class NoticeListTests {
	NoticeRepository noticeRepository;
	JwtService jwtService;
	UserRepository userRepository;
	AttendenceRepository attendenceRepository;
	BoardRepository boardRepository;
	CommentRepository commentRepository;
	@Autowired
	public NoticeListTests(NoticeRepository noticeRepository, JwtService jwtService, UserRepository userRepository, AttendenceRepository attendenceRepository, BoardRepository boardRepository, CommentRepository commentRepository){
		this.noticeRepository = noticeRepository;
		this.jwtService = jwtService;
		this.userRepository = userRepository;
		this.attendenceRepository = attendenceRepository;
		this.boardRepository = boardRepository;
		this.commentRepository = commentRepository;
	}
	@Test
	void 공지사항_등록() {
		NoticeRegistDto noticeRegistDto = new NoticeRegistDto();
		noticeRegistDto.setContent("test");
		noticeRegistDto.setTitle("titletest");

		Notice notice = new Notice();
		notice.setTitle(noticeRegistDto.getTitle());
		notice.setContent(noticeRegistDto.getContent());
		noticeRepository.save(notice);
	}
	@Test
	void 공지사항_리스트_조회(){
		Integer pageSize = 5;
		Integer lastIdx = 0;
		Slice<Notice> notices = null;
		Pageable pageable = PageRequest.ofSize(pageSize);
		// 맨처음
		if (lastIdx == 0) {
			lastIdx = noticeRepository.findTop1ByOrderByIdxDesc().get().getIdx() + 1;
		}
		notices = noticeRepository.findAllByOrderByIdxDesc(lastIdx, pageable);
		for (Notice notice : notices) {
			System.out.println(notice.getContent() + " : " + notice.getTitle());
		}
	}
	@Test
	void 작성한글조회() {
		String userId = "test";
		Integer pageSize = 5;
		Integer lastIdx = 0;
		Slice<Board> boards = null;
		Pageable pageable = PageRequest.ofSize(pageSize);
		if (lastIdx == 0) {
			lastIdx = boardRepository.findTop1ByOrderByIdxDesc().get().getIdx() + 1;
		}
		boards = boardRepository.findByUserIdOrderByIdxDesc(userId, lastIdx, pageable);
		for (Board board : boards) {
			System.out.println(board.getContent() + " : " + board.getTitle());
			System.out.println(board.getUser().getNickname());
		}
	}
}
