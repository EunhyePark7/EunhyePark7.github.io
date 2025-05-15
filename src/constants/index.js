export const LANGUAGE = {
  EN: 'EN',
  KR: 'KR',
};

export const LANGUAGE_SETTING = {
  EN: 'Language',
  KR: '언어 설정',
};

export const THEME = {
  DARK: 'DARK',
  WHITE: 'WHITE',
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

export const RESUME = {
  EN: 'resume',
  KR: '이력서 한눈에 보기',
};

export const THEME_SETTING = {
  EN: 'Theme',
  KR: '테마 설정',
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
      KR: '나',
    },
    to: '/aboutMe',
    iconType: 'ai',
    iconName: 'AiOutlineSmile',
    activeIconName: 'AiFillSmile',
    contentName: 'About Me',
  },
  SKILL: {
    name: {
      EN: 'Skill',
      KR: '스킬',
    },
    to: '/skill',
    iconType: 'ai',
    iconName: 'AiTwotoneAppstore',
    activeIconName: 'AiFillAppstore',
    contentName: 'Skill',
  },
  WORK_EXPERIENCE: {
    name: {
      EN: 'Work Experience',
      KR: '회사',
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
    },
    pixdine: {
      contentName: 'Pixdine',
      to: '/work#pixdine',
    },
    goodrich: {
      contentName: 'GoodRich',
      to: '/work#goodrich',
    },
  },
};
