import {AppSettings} from '../setting';

import changeTheme from './change-theme';
import queryTheme, {SettingLocalstorageGetter} from './query-theme';

export type SettingReadyCallback = (settings: AppSettings) => void;

async function init(
  defaults: {theme: string},
  onReadyCallback?: SettingReadyCallback,
  localstorageGetter?: SettingLocalstorageGetter
) {
  const [theme] = await Promise.all([
    queryTheme(defaults.theme, localstorageGetter),
  ]);
  // set values
  changeTheme(theme);
  // trigger ready
  onReadyCallback?.({theme});
}

export default init;
export type Init = typeof init;
