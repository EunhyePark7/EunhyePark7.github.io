import { create } from 'zustand';
import { FULL_NAME, LANGUAGE, THEME } from '@/constants';

const useGlobalStore = create((set, get) => ({
  theme: THEME.WHITE,
  language: LANGUAGE.EN,

  setTheme: theme => set({ theme }),
  setLanguage: language => set({ language }),
}));

export default useGlobalStore;
