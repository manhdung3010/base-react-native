import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark' | 'system';
  language: string;
  notifications: boolean;
  biometrics: boolean;
}

interface AppActions {
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setLanguage: (language: string) => void;
  toggleNotifications: () => void;
  toggleBiometrics: () => void;
  resetSettings: () => void;
}

type AppStore = AppState & AppActions;

const initialState: AppState = {
  theme: 'system',
  language: 'en',
  notifications: true,
  biometrics: false,
};

export const useAppStore = create<AppStore>((set, get) => ({
  ...initialState,

  setTheme: theme =>
    set({
      theme,
    }),

  setLanguage: language =>
    set({
      language,
    }),

  toggleNotifications: () =>
    set(state => ({
      notifications: !state.notifications,
    })),

  toggleBiometrics: () =>
    set(state => ({
      biometrics: !state.biometrics,
    })),

  resetSettings: () => set(initialState),
}));
