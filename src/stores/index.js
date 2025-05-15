import { LANGUAGE, THEME } from '@/constants';
import { create } from 'zustand';

const useGlobalStore = create((set, get) => ({
  theme: THEME.WHITE,
  language: LANGUAGE.EN,
  isNavCollapsed: false,
  pageHistory: [],

  setTheme: theme => set({ theme }),
  setLanguage: language => set({ language }),
  toggleNav: () => set(state => ({ isNavCollapsed: !state.isNavCollapsed })),
  setPageHistory: page => {
    const { pageHistory } = get();
    const existingIndex = pageHistory.indexOf(page);

    if (existingIndex > -1) {
      const newHistory = [...pageHistory];
      newHistory.splice(existingIndex, 1);
      set({ pageHistory: [...newHistory, page] });
    } else if (pageHistory.length === 0 || pageHistory[pageHistory.length - 1] !== page) {
      set({ pageHistory: [...pageHistory, page] });
    }
  },
}));

export default useGlobalStore;
