import {Router} from '@tinijs/router';

import {showIndicator} from './nav/show-indicator';
import {hideIndicator} from './nav/hide-indicator';
import {go} from './nav/go';
import {back} from './nav/back';

export class NavService {
  private _router?: Router;

  init(router: Router) {
    this._router = router;
  }

  get ROUTER() {
    if (!this._router) throw new Error('No router, please init() first.');
    return this._router;
  }

  showIndicator() {
    return showIndicator();
  }

  hideIndicator() {
    return hideIndicator();
  }

  go(pathnameOrContext: string) {
    return go(this.ROUTER, pathnameOrContext);
  }

  back() {
    return back();
  }
}

export default NavService;
