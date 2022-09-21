package com.enimal.backend;

import com.enimal.backend.dto.Notice.NoticeRegistDto;
import com.enimal.backend.dto.User.UserProfileDto;
import com.enimal.backend.entity.Notice;
import com.enimal.backend.entity.User;
import com.enimal.backend.repository.NoticeRepository;
import com.enimal.backend.repository.UserRepository;
import com.enimal.backend.service.JwtService;
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
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@ExtendWith(SpringExtension.class)
@SpringBootTest
//@Transactional
class BackendApplicationTests {
	JwtService jwtService;
	UserRepository userRepository;
	PuzzleRepository puzzleRepository;
	AttendenceRepository attendenceRepository;
	BoardRepository boardRepository;
	CommentRepository commentRepository;
	NoticeRepository noticeRepository;
	MoneyRepository moneyRepository;
	CollectionRepository collectionRepository;
	BadgeRepository badgeRepository;
	@Autowired
	public BackendApplicationTests(PuzzleRepository puzzleRepository,BadgeRepository badgeRepository,CollectionRepository collectionRepository,MoneyRepository moneyRepository,NoticeRepository noticeRepository,JwtService jwtService,UserRepository userRepository,AttendenceRepository attendenceRepository,BoardRepository boardRepository,CommentRepository commentRepository){
		this.noticeRepository = noticeRepository;
		this.puzzleRepository = puzzleRepository;
		this.badgeRepository = badgeRepository;
		this.collectionRepository = collectionRepository;
		this.moneyRepository = moneyRepository;
		this.jwtService = jwtService;
		this.userRepository = userRepository;
		this.attendenceRepository = attendenceRepository;
		this.boardRepository = boardRepository;
		this.commentRepository = commentRepository;
	}
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
		Attendence attendence = new Attendence();
		attendence.setUserId(userId);
		attendence.setAttenddate(LocalDateTime.now());
		attendence.setConvertdate(LocalDateTime.now().getDayOfYear());
        attendenceRepository.save(attendence);
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
	@Test
	void 프로필조회_타인(){
		String userId = "test";
		Optional<User> user = userRepository.findById(userId);

	}
	@Test
	void 프로필조회_본인(){

	}
	@Test
	void 출석내역조회(){
		String userId = "test";
		List<Attendence> attendences = attendenceRepository.findByUserId(userId);
		for(Attendence attendence : attendences){
			System.out.println(attendence.getAttenddate());
		}
	}
	@Test
	void 작성한글조회(){
		String userId = "test";
		Integer pageSize = 5;
		Integer lastIdx =0;
		Slice<Board> boards = null;
		Pageable pageable = PageRequest.ofSize(pageSize);
		if(lastIdx == 0){
			lastIdx = boardRepository.findTop1ByOrderByIdxDesc().get().getIdx() +1;
		}
		boards = boardRepository.findByUserIdOrderByIdxDesc(userId,lastIdx,pageable);
		for(Board board : boards){
			System.out.println(board.getContent() + " : " + board.getTitle());
			System.out.println(board.getUser().getNickname());
		}

	}
	@Test
	void 작성한댓글조회(){
		String userId = "test";
		List<Comment> comments = null;
		comments = commentRepository.findByUserId(userId);
		for(Comment comment : comments){
			System.out.println(comment.getContent() + " : " + comment.getCreatedate());
			System.out.println(comment.getBoard().getTitle());
		}
	}
	@Test
	void 재화내역조회(){
		String userId = "test";
		Integer pageSize = 5;
		Integer lastIdx =0;
		Slice<Money> monies = null;
		Pageable pageable = PageRequest.ofSize(pageSize);

		if(lastIdx == 0){
			lastIdx = moneyRepository.findTop1ByOrderByIdxDesc().get().getIdx() +1;
		}
		monies = moneyRepository.findByUserIdOrderByIdxDesc(userId,lastIdx,pageable);
		for(Money money : monies){
			System.out.println(money.getCreatedate());
		}
	}
	@Test
	void 유저프로필조회_기본정보(){ // resultSet이 다르다고함. JPA 서브쿼리 매핑을 어떻게?
		// 필요한거 : 닉네임, 랭킹순위-컬렉션수+기부순위, 완성된 컬렉션 수, 뽑기 횟수, 사용한 포인트, 획득한 업적들
		String userId = "test";
		User user = userRepository.findById(userId).get();
		Integer donationRank = userRepository.findByUserIdRank(userId); // 현재 나의 기부 순위
		Integer colletionCount = collectionRepository.countByUserId(userId); //현재 완성된 컬렉션 수
		Integer colletionRank = collectionRepository.findByUserIdRank(userId); //현재 나의 컬렉션 순위
		List<Badge> badges = badgeRepository.findByUserId(userId);
		List<Collection> collections = collectionRepository.findByUserId(userId);
		System.out.println("기부 순위 : " + donationRank);
		System.out.println("컬렉션 순위 : " + colletionRank);
		for(Collection collection : collections){
			System.out.println(collection.getAnimal());
		}
		System.out.println("==========");
		for(Badge badge : badges){
			System.out.println(badge.getBadge());
		}

	}
	@Test
	void 유저프로필조회_수집중인컬렉션(){
		String userId = "test";
		List<Puzzle> puzzles = puzzleRepository.findByUserIdOrderByAnimal(userId);

	}
	@Test
	void 랭킹조회_기부(){
		List<User> users = userRepository.findTop10ByOrderByDonation();
		for(User user : users){
			System.out.println(user.getNickname());
		}
	}
}
