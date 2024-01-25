import {initTheme} from './helpers/init-theme';
import {changeTheme} from './helpers/change-theme';
import {share} from './helpers/share';

export class AppService {
  initTheme = initTheme;
  changeTheme = changeTheme;
  share = share;
}

export default AppService;
