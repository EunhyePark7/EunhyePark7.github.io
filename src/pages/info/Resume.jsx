import ImgProfile from '@/assets/images/profile.png';
import AppLayout from '@/components/AppLayout';
import Icon from '@/components/Icon';
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';
import styled from 'styled-components';

const Resume = () => {
  const targetRef = useRef(null);
  return (
    <AppLayout>
      <StyledWrap>
        <StyledButtonWrap>
          <button onClick={() => generatePDF(targetRef, { filename: '박은혜 이력서.pdf' })}>
            <Icon type="bs" iconName="BsFiletypePdf" />
            <span>이력서 다운로드</span>
          </button>
        </StyledButtonWrap>

        <StyledResume ref={targetRef}>
          <StyledProfile>
            <StyledImg>
              <img key={ImgProfile} src={ImgProfile} alt="logo" width="140" />
            </StyledImg>
            <StyledDetail>
              <strong>박은혜</strong>
              <StyledDetailList>
                <dl>
                  <dt>생년월일</dt>
                  <dd>1989.12.17</dd>
                </dl>
                <dl>
                  <dt>Email</dt>
                  <dd>eungkong333@gmail.com</dd>
                </dl>
                <dl>
                  <dt>연락처</dt>
                  <dd>010-3159-9424</dd>
                </dl>
                <dl>
                  <dt>주소</dt>
                  <dd>서울시 도봉구 창동</dd>
                </dl>
              </StyledDetailList>
            </StyledDetail>
          </StyledProfile>
          <StyledBase>
            <h2>학력</h2>
            <StyledBaseList>
              <li>
                <StyledBaseDate>
                  <span>2008. 03 ~ 2013. 02</span>
                </StyledBaseDate>
                <StyledBaseContent>
                  <strong>
                    경희대학교(서울) <span>미술 전공</span>
                  </strong>
                  <span>졸업</span>
                </StyledBaseContent>
              </li>
              <li>
                <StyledBaseDate>
                  <span>2005. 03 ~ 2018. 02</span>
                </StyledBaseDate>
                <StyledBaseContent>
                  <strong>세원고등학교</strong>
                  <span>졸업</span>
                </StyledBaseContent>
              </li>
            </StyledBaseList>
          </StyledBase>
          <StyledBase>
            <h2>경력</h2>
            <StyledBaseList>
              <li>
                <StyledBaseDate>
                  <span>2023. 05 ~ 2025. 04</span>
                </StyledBaseDate>
                <StyledBaseContent>
                  <strong>굿리치(주)</strong>
                  <span>고객플랫폼개발팀 대리 / 프론트엔드개발자</span>
                  <p>
                    - 자사 서비스 굿리치 앱 내 웹뷰 페이지 운영 개발
                    <br />
                    - 자사 홈페이지 및 영업마케팅사이트 운영 개발
                    <br /> - 사내 시스템 운영 개발
                  </p>
                </StyledBaseContent>
              </li>
              <li>
                <StyledBaseDate>
                  <span>2021. 02 ~ 2023. 05</span>
                </StyledBaseDate>
                <StyledBaseContent>
                  <strong>픽스다인웨이메이커(주)</strong>
                  <span>Tech팀 대리 / 마크업개발자</span>
                  <p>
                    - 고객사 웹사이트 및 관리자 시스템 구축 프로젝트 수행
                    <br />- 디자인 시스템 및 스타일 가이드 개발
                  </p>
                </StyledBaseContent>
              </li>
              <li>
                <StyledBaseDate>
                  <span>2016. 11 ~ 2018. 12</span>
                </StyledBaseDate>
                <StyledBaseContent>
                  <strong>디케이비엠시(주)</strong>
                  <span>개발1팀 사원 / 마크업개발자</span>
                  <p>
                    - 고객사 웹사이트 및 관리자 시스템 구축 프로젝트 수행
                    <br />- 디자인 시스템 및 스타일 가이드 개발
                  </p>
                </StyledBaseContent>
              </li>
              <li className="line">
                <StyledBaseDate>
                  <span>경력기술서</span>
                </StyledBaseDate>
                <StyledBaseContent>
                  <p>
                    - 굿리치 기업홈페이지 리뉴얼 <br />- 2024.12 ~ 2025.04 <br />- 주요업무: UI 및 프론트 개발 (ReactJs
                    전환) <br />- 연계/소속회사: 굿리치
                    <br /> <br />- 굿리치앱 마이크로사이트 리뉴얼 <br />- 2024.01 ~ 2024.05 <br />- 주요업무: UI 및
                    프론트 개발 (NextJs 전환) <br />- 연계/소속회사: 굿리치
                    <br /> <br />- 굿리치금융캠퍼스 구축 프로젝트 <br />- 2023.10 ~ 2024.05 - 주요업무: UI 및 프론트
                    개발
                    <br />- 연계/소속회사: 굿리치 <br />
                    <br />- 굿리치x국가대표선수협회 자선골프대회이벤트페이지 구축 <br />- 2023.09 ~ 2023.10 <br />-
                    주요업무: UI 및 프론트 개발 <br />- 연계/소속회사: 굿리치
                    <br /> <br />- 굿리치스마일보장분석 페이지 리뉴얼 <br />- 2023.07 ~ 2023.09 <br />- 주요업무: UI 및
                    프론트 개발 <br />- 연계/소속회사: 굿리치 <br />
                    <br />- 굿리치x캐시노트 이벤트페이지 구축 <br />- 2023.05 ~ 2023.06 <br />- 주요업무: UI 및 프론트
                    개발 <br />- 연계/소속회사: 굿리치
                    <br /> <br />- 굿리치앱 웹뷰페이지 운영 <br />- 2023.05 ~ 2025.04 <br />- 주요업무: UI 및 프론트
                    개발
                    <br />- 연계/소속회사: 굿리치
                    <br /> <br />- 굿리치 마케팅사이트 운영 <br />- 2023.05 ~ 2025.04 <br />- 주요업무: UI 및 프론트
                    개발
                    <br />- 연계/소속회사: 굿리치
                    <br /> <br />- 굿리치 기업사이트, 앱 마이크로사이트 운영 <br />- 2023.05 ~ 2025.04 <br />- 주요업무:
                    UI 및 프론트 개발 <br />- 연계/소속회사: 굿리치
                    <br />
                  </p>
                  <p>
                    <br />- 신한은행 쏠 앱 퇴직연금파트 구축 <br />- 2023.01 ~ 2023.05 <br />- 주요업무 : 마크업 개발
                    <br />- 연계/소속회사 : 픽스다인웨이메이커
                    <br /> <br />- 삼성 SDS 생산관리시스템 구축 <br />- 2022.06 ~ 2022.12 <br />- 주요업무 : vue.js 기반
                    마크업 개발 <br />- 연계/소속회사 : 픽스다인웨이메이커
                    <br /> <br />- 현대커머셜 홈페이지 리뉴얼 <br />- 2021.12 ~ 2022.05 <br />- 주요업무 : 마크업 개발
                    <br />- 연계/소속회사 : 픽스다인웨이메이커 <br />
                    <br />- KCB 기업신용사이트 bizground 구축 <br />- 2021.06 ~ 2021.12
                    <br />- 주요업무 : PL / 마크업 개발 <br />- 연계/소속회사 : 픽스다인웨이메이커
                    <br /> <br />- 신라면세점 운영
                    <br />- 2021.03 ~ 2021.05 <br />- 주요업무 : 마크업 운영 <br />- 연계/소속회사 : 픽스다인웨이메이커
                    <br />
                    <br />- KCB 개인신용사이트 Ok Name 구축 프로젝트 <br />- 2021.02 ~ 2021.03 <br />- 주요업무 : PL /
                    마크업 개발 <br />- 연계/소속회사 : 픽스다인웨이메이커
                    <br />
                  </p>
                  <p>
                    <br />- 자사 홈페이지 리뉴얼 <br />- 2018.01 ~ 2018.03 <br />- 주요업무 : 마크업 개발
                    <br />- 연계/소속회사 : DKBMC
                    <br />
                    <br />- 에뛰드 사내 커뮤니티 플랫폼 운영 <br />- 2018.01 ~ 2018.10
                    <br />- 주요업무 : 마크업 개발 <br />- 연계/소속회사 : DKBMC
                    <br />
                    <br />- Lightning UI Template 플러그인 개발 <br />- 2018.01 ~ 2018.12 <br />- 주요업무 : js플러그인
                    개발
                    <br />- 연계/소속회사 : DKBMC
                    <br />
                    <br />- 올림푸스 영업지원 플랫폼 개발 <br />- 2017.10 ~ 2018.02 <br />- 주요업무 : 마크업 개발{' '}
                    <br />- 연계/소속회사 : DKBMC
                    <br /> <br />- SK Lubricant Global Partner Portal 프로젝트 <br />- 2017.08 ~ 2018.08 <br />-
                    주요업무 : 마크업 개발 <br />- 연계/소속회사 : DKBMC
                    <br />
                    <br />- 에뛰드 사내 커뮤니티 플랫폼 운영 <br />- 2017.06~ 2018.05 <br />- 주요업무 : 마크업 개발{' '}
                    <br />- 연계/소속회사 : DKBMC
                    <br /> <br />- 샘소나이트 온라인몰 구축 및 운영 <br />- 2017.05 ~ 2017.07 <br />- 주요업무 :마크업
                    개발 <br />- 연계/소속회사 : DKBMC <br />
                    <br />- CJ 제일제당 CRM 시스템 구축
                    <br />- 2017.01 ~ 2017.09 <br />- 주요업무 : 마크업 개발 <br />- 연계/소속회사 : DKBMC
                    <br /> <br />- 에뛰드 사내 커뮤니티 플랫폼 개발 <br />- 2017.01 ~ 2017.04 <br />- 주요업무 : 마크업
                    개발 <br />- 연계/소속회사 : DKBMC
                    <br />
                    <br />- 샘소나이트 커머스사이트 리뉴얼 <br />- 2016.11 ~ 2017.01 <br />- 주요업무 : 마크업 개발{' '}
                    <br />
                    - 연계/소속회사 : DKBMC
                    <br />
                  </p>
                </StyledBaseContent>
              </li>
            </StyledBaseList>
          </StyledBase>
        </StyledResume>
      </StyledWrap>
    </AppLayout>
  );
};

export default Resume;

const StyledWrap = styled.div`
  max-width: 940px;
  margin: 0 auto;
`;

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    background-color: var(--white);
    border: 1px solid var(--outline);
    border-radius: 10px;
    font-size: 12px;
  }
`;

const StyledResume = styled.div`
  max-width: 940px;
  padding: 20px;
  margin: 0 auto;
  background-color: #fff;
  color: #030303;
`;
const StyledProfile = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledImg = styled.div``;
const StyledDetail = styled.div`
  flex: 1;
  padding: 36px;
  strong {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;
const StyledDetailList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  dl {
    width: 40%;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    dt {
      color: #888;
    }
    dd {
      margin-left: 10px;
    }
  }
`;
const StyledBase = styled.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  h2 {
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 700;
  }
`;
const StyledBaseList = styled.ul`
  li {
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    &.line {
      margin-top: 10px;
      padding-top: 20px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`;
const StyledBaseDate = styled.div`
  min-width: 200px;
`;
const StyledBaseContent = styled.div`
  margin-left: 40px;
  strong {
    font-weight: 600;
    & + span {
      margin-left: 10px;
      & + p {
        margin-top: 10px;
      }
    }
  }
  p {
    line-height: 1.2;
  }
`;
