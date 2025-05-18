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
