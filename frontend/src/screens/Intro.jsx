import React, {useState} from "react";
import Login from "../components/common/Login/Login";

function Intro() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    if (localStorage.token) {
      alert("이미 지갑이 연결된 상태예요")
    } else {
      setModalOpen(true);
    }
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div>소개</div>
      <div>
        <div> dk </div>
        <div> dk </div>
        <div> dk </div>
        <div> dk </div>
        <div> dk </div>
        <div> dk </div>
        <br/>

        <h1>enimal의 존재 이유</h1>
        <br/>
        enimal = endangered + animal
        <br/>
        enimal은 사람과 동물이 조화를 이루며 살아가는 미래를 지향하며, / 멸종 위기 동물의 보호를 위해
        <br/>
        이를 위해 AI로 생성된 멸종위기종 NFT를 발행하고, 수익의 일부를 멸종 위기 동물 단체에 기부하고 있습니다.
        <br/>
        <br/>

        <h2>기부는 고리타분하다구요?</h2>
        <p>
          enimal과 함께라면 재미있게 기부를 할 수 있어요!
          save를 이용해 NFT 조각을 모아보세요
        </p>

        <h2>save란 무엇인가요?</h2>
        <br/>
        <p>
          save는 enimal 내에서 사용할 수 있는 재화입니다.
          <br/>
          save는 출석, 영상 시청, 추천인 등으로 획득할 수 있으며, 추가로 `SSF` 코인을 이용해 구입 가능합니다.
        </p>
        <br/>
        <br/>
        <h2>NFT는 어떻게 얻을 수 있나요?</h2>
        <br/>
        <p>
          save를 사용해 NFT 조각을 뽑을 수 있어요!
          <br/>
          NFT 조각을 모두 모으면 해당 동물의 NFT를 생성/획득할 수 있습니다.
        </p>
        <br/>
        <br/>
        <h2>NFT 예시를 보고 싶어요</h2>
        <p>
          커뮤니티에서 enimal 이용자들이 소유한 NFT 목록을 자랑할 수 있어요
          <br/>
          <a href="/community">커뮤니티 페이지로 이동</a>
        </p>
        <br/>
        <br/>
        <h2>소유한 NFT는 enimal 내에서만 볼 수 있나요?</h2>
        <br/>
        <p>
          발행된 NFT는 지갑에서도 확인하실 수 있습니다
        </p>
        <br/>
        <br/>
        
        <h2>소액 기부도 괜찮아요!</h2>
        <br/>
        <p>
          SSF에서 save로 전환을 하시면 기본적으로 10%(미정)의 금액이 멸종 위기 보호 단체에 기부됩니다
          <br/>
          <br/>
          save를 적게 받더라도 기부금이 늘어났으면 하시나요?
          <br/>
          <br/>
          기부 비율을 조정해보세요! 충전되는 save 금액을 조정해 기부되는 금액을 높일 수 있습니다
        </p>
        <br/>
        <br/>

        <h2>동물 보호 단체에서는 어떤 일을 하나요?</h2>
        <br/>
        <p>
          서식터 제공, 지구환경 보호 활동 등의 활동을 하고 있습니다.
          <br/>
          자세한 활동은 저희가 후원하는 아래의 기부 단체 홈페이지를 참고해주세요.
          <br/>
        </p>
        <br/>
          (클릭하면 홈페이지로 이동)
          <br/>
          <a href="https://www.wwfkorea.or.kr/wildlife.php">세계자연기금 멸종위기종 보호</a> |
          <a href="https://www.greenpeace.org/korea/">그린피스</a> |
          <a href="https://www.animals.or.kr/support/intro?utm_source=google&utm_medium=sa&utm_campaign=pc&utm_content=%ED%9B%84%EC%9B%90&utm_term=%EB%8F%99%EB%AC%BC%20%ED%9B%84%EC%9B%90&gclid=CjwKCAjwvsqZBhAlEiwAqAHEld3aa6WQ_MAhsyYCDKrRTxJlsw631FSYuQOilx_0mo_bMTO6dHzfDhoCuFoQAvD_BwE">동물자유연대</a>
        <br/>
        <br/>
        <h2>enimal과/저희와 함께 멸종위기에 처한 동물들을 지켜주세요</h2>
        (클릭하면 지갑 연결 팝업 뜸)
        <button type="button" onClick={openModal}>지갑 연결하기</button>
        <Login open={modalOpen} close={closeModal} />
        <br/>
        <br/>
        <p>소통</p>
        커뮤니티를 이용해 소통하고 주변인들에게 이 프로젝트를 공유해주세요
        <br/>
        <a href="/community">커뮤니티 바로가기</a>
        <a href="/">카카오톡 공유하기 등등</a>
      </div>
    </>
  )
}
export default Intro;
