package com.enimal.backend;

import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.entity.Notice;
import com.enimal.backend.entity.User;
import com.enimal.backend.repository.NoticeRepository;
import com.enimal.backend.repository.UserRepository;
import com.enimal.backend.service.JwtService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@ExtendWith(SpringExtension.class)
@SpringBootTest
//@Transactional
class BackendApplicationTests {
	@Autowired
	NoticeRepository noticeRepository;
	@Autowired
	JwtService jwtService;
	@Autowired
	UserRepository userRepository;
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
	@Test
	void 로그인_테스트(){
		//프론트로부터 지갑주소, 닉네임을 받아서 회원인지 체크, 회원-로그인, 회원X-회원등록-로그인
		String address = "asdfjknasdf";
		String userId = "t2est";
		Optional<User> user = userRepository.findById(userId);
		if(!user.isPresent()){ // 회원이 아니라면 회원 등록하기
			User userRegist = new User();
			userRegist.setId(address);
			userRegist.setNickname(userId);
			userRegist.setWallet(address);
			userRepository.save(userRegist);
		}
		//로그인 시키기
		String accessToken = jwtService.createAccessToken("id", userId);
		String refreshToken = jwtService.createRefreshToken("id", userId);

		System.out.println(accessToken);
		System.out.println(refreshToken);

	}

	@Test
	void 회원_탈퇴(){
		//엑세스 토큰에서 나온 아이디를 회원 삭제
		String userId = "test12";
		userRepository.deleteById(userId);
	}
	@Test
	void 회원_수정(){
		String userId = "test";
		String updateNickname = "updateTest";
		Optional<User> user = userRepository.findById(userId);
		user.get().setNickname(updateNickname);

		userRepository.save(user.get());
	}
}
