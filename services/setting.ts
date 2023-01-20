import {Observable, ObservableSubscribe} from '@tinijs/core';
import {LocalstorageService} from './localstorage';

export interface SettingOptions {
  onReady?: () => void;
}

export interface SettingIntegrations {
  localstorageService?: LocalstorageService;
}

export interface AppSettings {
  theme?: string;
}

export class SettingService {
  private readonly _LSK_THEME = 'setting_theme';

  private _options: SettingOptions = {};
  private _integrations: SettingIntegrations = {};

  private _defaultTheme = 'light';
  @Observable() theme = this._defaultTheme;
  themeChanged!: ObservableSubscribe<string>;

  setOptions(options: SettingOptions) {
    this._options = options;
    return this as SettingService;
  }

  setIntegrations(integrations: SettingIntegrations) {
    this._integrations = integrations;
    return this as SettingService;
  }

  setDefaults(defaultSettings: AppSettings) {
    const {theme} = defaultSettings;
    if (theme) {
      this._defaultTheme = theme;
    }
    return this as SettingService;
  }

  async init() {
    const [theme] = await Promise.all([this._loadTheme()]);
    // set values
    this.changeTheme(theme);
    // trigger ready
    this._options.onReady?.();
  }

  changeTheme(name: string) {
    if (this.theme === name) return;
    // affect
    document.body.dataset.theme = name;
    // set value
    this.theme = name;
    // set local
    this._integrations.localstorageService?.set(this._LSK_THEME, name);
    // set remote
    // TODO
  }

  private async _loadTheme() {
    let theme: undefined | null | string = null;
    // from remote
    // TODO
    // from local
    theme ||= await this._integrations.localstorageService?.get<string>(
      this._LSK_THEME
    );
    // from system or default
    theme ||= matchMedia?.('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : this._defaultTheme;
    // result
    return theme;
  }
}

export default SettingService;
