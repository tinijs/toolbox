import {Observable, ObservableSubscribe} from '@tinijs/core';
import {LocalstorageService} from './localstorage';

export interface AppSettings {
  theme?: string;
}

export type SettingReadyCallback = (settings: AppSettings) => void;

export class SettingService {
  private readonly _LSK_THEME = 'setting_theme';

  private _settingReadyCallback?: SettingReadyCallback;
  private _localstorageService?: LocalstorageService;

  private _defaultTheme = 'light';
  @Observable() theme = this._defaultTheme;
  themeChanged!: ObservableSubscribe<string>;

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

  onReady(cb: SettingReadyCallback) {
    this._settingReadyCallback = cb;
    return this as SettingService;
  }

  async init() {
    const [theme] = await Promise.all([this._loadTheme()]);
    // set values
    this.changeTheme(theme);
    // trigger ready
    this._settingReadyCallback?.({theme});
  }

  changeTheme(name: string) {
    if (this.theme === name) return;
    // affect
    document.body.dataset.theme = name;
    // set value
    this.theme = name;
    // set local
    this._localstorageService?.set(this._LSK_THEME, name);
    // set remote
    // TODO
  }

  private async _loadTheme() {
    let theme: undefined | null | string = null;
    // from remote
    // TODO
    // from local
    theme ||= await this._localstorageService?.get<string>(this._LSK_THEME);
    // from system or default
    theme ||= matchMedia?.('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : this._defaultTheme;
    // result
    return theme;
  }
}

export default SettingService;
