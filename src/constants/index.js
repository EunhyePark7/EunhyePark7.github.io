export const LANGUAGE = {
  EN: 'EN',
  KR: 'KR',
};

export const SMALL_NAME = {
  EN: 'EH',
  KR: '은혜',
};

export const FULL_NAME = {
  EN: 'Eunhye Park',
  KR: '박은혜',
};

export const DEVELOPER = {
  EN: 'Developer',
  KR: '개발자',
};

export const LANGUAGE_SETTING = {
  EN: 'Language',
  KR: '언어 설정',
};

export const LANGUAGE_LABELS = {
  EN: {
    EN: 'English',
    KR: '영어',
  },
  KR: {
    EN: 'Korean',
    KR: '한국어',
  },
};

export const THEME = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  SYSTEM: 'SYSTEM',
};

export const RESUME = {
  EN: 'resume',
  KR: '이력서 한눈에 보기',
};

export const THEME_SETTING = {
  EN: 'Theme',
  KR: '테마 설정',
};
export const THEME_LABELS = {
  LIGHT: {
    EN: 'Light',
    KR: '밝은 테마',
  },
  DARK: {
    EN: 'Dark',
    KR: '어두운 테마',
  },
  SYSTEM: {
    EN: 'System',
    KR: '기기 테마 사용',
  },
};

/**
 * name : language
 * to : url
 * iconType: react-icons type
 * iconName: react-icons name (비활성화 아이콘)
 * activeIconName: react-icons name (활성화 아이콘)
 */
export const MENU = {
  HOME: {
    name: {
      EN: 'Home',
      KR: '홈',
    },
    to: '/',
    iconType: 'ai',
    iconName: 'AiOutlineHome',
    activeIconName: 'AiFillHome',
  },
  ABOUT_ME: {
    name: {
      EN: 'About Me',
      KR: '소개',
    },
    to: '/aboutMe',
    iconType: 'ai',
    iconName: 'AiOutlineSmile',
    activeIconName: 'AiFillSmile',
    contentName: 'About Me',
    thumbnail: 'aboutMe.mp4',
  },
  SKILL: {
    name: {
      EN: 'Skills',
      KR: '보유 기술',
    },
    to: '/skill',
    iconType: 'ai',
    iconName: 'AiTwotoneAppstore',
    activeIconName: 'AiFillAppstore',
    contentName: 'Skills',
    thumbnail: 'skills.png',
  },
  WORK_EXPERIENCE: {
    name: {
      EN: 'Work Experience',
      KR: '경력',
    },
    to: '/work',
    iconType: 'bs',
    iconName: 'BsBuilding',
    activeIconName: 'BsBuildingFill',
  },
  COMPANY: {
    dkbmc: {
      contentName: 'Dkbmc',
      to: '/work#dkbmc',
      thumbnail: 'dkbmc.png',
    },
    pixdine: {
      contentName: 'Pixdine',
      to: '/work#pixdine',
      thumbnail: 'pixdine.png',
    },
    goodrich: {
      contentName: 'GoodRich',
      to: '/work#goodrich',
      thumbnail: 'goodrich.png',
    },
  },
  RESUME: {
    name: {
      EN: 'Resume',
      KR: '이력서',
    },
    to: '/resume',
    iconType: 'ai',
    iconName: 'AiOutlineFileText',
    activeIconName: 'AiFillFileText',
    thumbnail: 'resume.mp4',
  },
  CONTACT: {
    name: {
      EN: 'Contact',
      KR: '메일보내기',
    },
    to: '/contact',
    iconType: 'ai',
    iconName: 'AiOutlineFileText',
    activeIconName: 'AiFillFileText',
  },
};

export const CONTACT_ME = {
  CONTACT: {
    name: {
      EN: 'Contact',
      KR: '메일보내기',
    },
    iconType: 'ai',
    iconName: 'AiOutlineMail',
  },
  GITHUB: {
    name: {
      EN: 'Github',
      KR: 'Github',
    },
    iconType: 'ai',
    iconName: 'AiOutlineGithub',
  },
};

export const WORK_HISTORY = [
  {
    id: 'goodrich',
    company: '굿리치',
    projects: [
      {
        title: '굿리치 기업홈페이지 리뉴얼',
        period: '2024.12~2025.03',
        description: ['UI 및 프론트 개발', 'ReactJs 전환'],
      },
      {
        title: '굿리치앱 마이크로사이트 리뉴얼',
        period: '2024.01~2024.05',
        description: ['UI 및 프론트 개발', 'NextJs 전환'],
      },
      {
        title: '굿리치금융캠퍼스 구축',
        period: '2023.10~2024.05',
        description: ['UI 및 프론트 개발'],
      },
      {
        title: '굿리치x국가대표선수협회 자선골프대회 이벤트페이지 구축',
        period: '2023.09~2023.10',
        description: ['UI 및 프론트 개발'],
      },
      {
        title: '굿리치스마일보장분석 페이지 리뉴얼',
        period: '2023.07~2023.09',
        description: ['UI 및 프론트 개발'],
      },
      {
        title: '굿리치x캐시노트 이벤트페이지 구축',
        period: '2023.05~2023.06',
        description: ['UI 및 프론트 개발'],
      },
      {
        title: '굿리치앱 웹뷰페이지 운영',
        period: '2023.05~ (상시 운영)',
        description: ['UI 및 프론트 개발'],
      },
      {
        title: '굿리치 마케팅사이트 운영',
        period: '2023.05~ (상시 운영)',
        description: ['UI 및 프론트 개발'],
      },
      {
        title: '굿리치 기업사이트, 앱 마이크로사이트 운영',
        period: '2023.05~ (상시 운영)',
        description: ['UI 및 프론트 개발'],
      },
    ],
  },
  {
    id: 'pixdine',
    company: '픽스다인웨이메이커',
    projects: [
      {
        title: '신한은행 쏠 앱 퇴직연금파트 구축',
        period: '2023.01~2023.05',
        description: ['마크업 개발'],
      },
      {
        title: '삼성 SDS 생산관리시스템 구축',
        period: '2022.06~2022.12',
        description: ['VueJs 기반 마크업 개발'],
      },
      {
        title: '현대커머셜 홈페이지 리뉴얼',
        period: '2021.12~2022.05',
        description: ['마크업 개발'],
      },
      {
        title: 'KCB 기업신용사이트 bizground 구축',
        period: '2021.06~2021.12',
        description: ['마크업 개발 / PL'],
      },
      {
        title: '신라면세점 온라인몰 운영',
        period: '2021.03~2021.05',
        description: ['마크업 개발'],
      },
      {
        title: 'KCB 개인신용사이트 OkName 구축',
        period: '2021.02~2021.03',
        description: ['마크업 개발 / PL'],
      },
    ],
  },
  {
    id: 'dkbmc',
    company: 'DKBMC',
    projects: [
      {
        title: '자사 기업홈페이지 리뉴얼',
        period: '2018.01~2018.03',
        description: ['디자인 및 마크업 개발'],
      },
      {
        title: '에뛰드 사내 커뮤니티 플랫폼 운영',
        period: '2018.01~2018.10',
        description: ['디자인 및 마크업 개발'],
      },
      {
        title: 'Lightning UI Template 플러그인 개발',
        period: '2018.01~2018.12',
        description: ['js플러그인 개발', '가이드 페이지 개발'],
      },
      {
        title: '올림푸스 영업지원 플랫폼 개발',
        period: '2017.10~2018.02',
        description: ['디자인 및 마크업 개발'],
      },
      {
        title: 'SK Lubricant Global Partner Portal 프로젝트',
        period: '2017.08~2018.08',
        description: ['디자인 및 마크업 개발'],
      },
      {
        title: '샘소나이트 온라인몰 구축 및 운영',
        period: '2017.05~2017.07',
        description: ['디자인 및 마크업 개발'],
      },
      {
        title: 'CJ 제일제당 CRM 시스템 구축',
        period: '2017.01~2017.09',
        description: ['디자인 및 마크업 개발'],
      },
      {
        title: '에뛰드 사내 커뮤니티 플랫폼 구축',
        period: '2017.01~2017.04',
        description: ['디자인 및 마크업 개발'],
      },
      {
        title: '샘소나이트 커머스사이트 리뉴얼',
        period: '2016.11~2017.01',
        description: ['디자인 및 마크업 개발'],
      },
    ],
  },
];
