import {Observable, ObservableSubscribe} from '@tinijs/core';
import {LocalstorageService} from './localstorage';

import {SettingReadyCallback} from './setting/init';
import changeTheme from './setting/change-theme';
import queryTheme from './setting/query-theme';

export interface AppSettings {
  theme?: string;
}

export class SettingService {
  private readonly _LSK_THEME = 'setting_theme';

  private _localstorageService?: LocalstorageService;

  private _defaultTheme = 'light';
  @Observable() theme = this._defaultTheme;
  themeChanged!: ObservableSubscribe<string>;

  get localstorageGetter() {
    const localstorageService = this
      ._localstorageService as LocalstorageService;
    return !localstorageService
      ? undefined
      : () => localstorageService.get<string>(this._LSK_THEME);
  }

  get localstorageSetter() {
    const localstorageService = this
      ._localstorageService as LocalstorageService;
    return !localstorageService
      ? undefined
      : (input: string) => localstorageService.set(this._LSK_THEME, input);
  }

  integrateLocalstorage(localstorageService: LocalstorageService) {
    this._localstorageService = localstorageService;
    return this as SettingService;
  }

  setDefaults(defaultSettings: AppSettings) {
    const {theme} = defaultSettings;
    if (theme) {
      this._defaultTheme = theme;
    }
    return this as SettingService;
  }

  async init(onReady?: SettingReadyCallback) {
    const [theme] = await Promise.all([this.queryTheme()]);
    // set values
    this.changeTheme(theme);
    // trigger ready
    onReady?.({theme});
  }

  changeTheme(name: string) {
    if (this.theme !== name) {
      this.theme = name;
      changeTheme(name, this.localstorageSetter);
    }
  }

  queryTheme() {
    return queryTheme(this._defaultTheme, this.localstorageGetter);
  }
}

export default SettingService;
