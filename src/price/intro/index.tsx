import styled from "styled-components";

import { BaseButton, BaseParagrpah, BaseH1 } from "../../components";
import { useRequestModal } from "../../request-modal";
import { addPrefix } from "../../utils/addPrefix";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  width: 100%;
  height: 520px;

  background-image: url(${addPrefix("/images/price-main-image.png")});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 30px 30px;

  & > div {
    margin-top: 30px;
    text-align: center;
  }
`;

const ResponsiveH1 = styled(BaseH1)`
    @media (max-width: 768px) {
        font-size: 32px;
    }
`

const ResponsiveParagraph = styled(BaseParagrpah)`
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

const ResponsiveButton = styled(BaseButton)`
  @media (max-width: 768px) {
    font-size: 16px;
    margin: 36px 0 0 0;
  }
`



export default function Intro() {
  const { open } = useRequestModal();

  return (
    <IntroContainer>
      <ResponsiveH1 fontSize={40} fontWeight="bold" color="#333d4b">
        {`우리 회사의 마케팅 단계에
적합한 플랜을 선택하세요.`}
      </ResponsiveH1>
      <div>
        <ResponsiveParagraph fontSize={20} lineHeight={1.6} color="#333d4b">
          {`솔루션에 대한 설명 또는 컨설팅이 필요하시면,  상담하기로 문의주세요.  
전문 컨설턴트가 맞춤 상담을 지원해드립니다. `}
        </ResponsiveParagraph>
        <ResponsiveButton
          borderRadius={8}
          fontSize={18}
          fontWeight="bold"
          lineHeight={1.61}
          letterSpacing={-0.35}
          margin="72px 0 0 0"
          onClick={open}
        >
            상담 신청
        </ResponsiveButton>
      </div>
    </IntroContainer>
  );
}
