import {initTheme} from './helpers/init-theme.js';
import {changeTheme} from './helpers/change-theme.js';
import {share} from './helpers/share.js';

export class AppService {
  initTheme = initTheme;
  changeTheme = changeTheme;
  share = share;
}

export default AppService;
