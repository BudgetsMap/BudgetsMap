import type { ThemePreference } from "~/core/interfaces/general";


export const setPreference = (theme: ThemePreference) => {
    localStorage.setItem('theme-preference', theme);
    reflectPreference(theme);
  };
  
  export const reflectPreference = (theme: ThemePreference) => {
    document.firstElementChild?.setAttribute('data-theme', theme);
  };

  export const getColorPreference = (): ThemePreference => {
    if (localStorage.getItem('data-theme')) {
      return localStorage.getItem('data-theme') as ThemePreference;
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  };
  