import {setTheme} from '@tinijs/core';

import {THEME_LOCAL_STORAGE_KEY} from './init-theme.js';

export type ChangeTheme = typeof changeTheme;

export async function changeTheme(
  themeId: string,
  customSetter?: (themeId: string) => Promise<void>
) {
  const [soulId, skinId] = themeId.split('/');
  localStorage.setItem(THEME_LOCAL_STORAGE_KEY, themeId);
  if (customSetter) await customSetter(themeId);
  return setTheme({soulId, skinId});
}

export default changeTheme;
