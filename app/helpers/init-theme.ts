import {setTheme} from '@tinijs/core';

export const THEME_LOCAL_STORAGE_KEY = 'theme';

export type InitTheme = typeof initTheme;

export async function initTheme(
  defaultThemeId: string,
  customGetter?: () => Promise<string>
) {
  const customThemeId = !customGetter ? null : await customGetter();
  const localThemeId = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
  const themeId = customThemeId || localThemeId || defaultThemeId;
  const [soulId, skinId] = themeId.split('/');
  setTheme({soulId, skinId});
  return themeId;
}

export default initTheme;
