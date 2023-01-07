export interface PopupConfigs {
  url: string;
  name?: string;
  options?: string;
  callback?: () => unknown;
}

export function createPopup(config: PopupConfigs) {
  const url = config.url || '/';
  const name = config.name || 'AppOAuthLogin'; // no space for IE
  const options =
    config.options ||
    'location=0,status=0' +
      ',width=' +
      window.innerWidth +
      ',height=' +
      window.innerHeight;
  const callback = config.callback || (() => true);
  // launch window
  const oauthWindow = window.open(url, name, options);
  // cackback
  const oauthInterval = window.setInterval(() => {
    if (oauthWindow && oauthWindow.closed) {
      window.clearInterval(oauthInterval);
      return callback();
    }
  }, 1000);
}
