import {Router} from '@tinijs/router';

import {showIndicator} from './nav/show-indicator';
import {hideIndicator} from './nav/hide-indicator';
import {go} from './nav/go';
import {back} from './nav/back';

export class NavService {
  private _router?: Router;

  get ROUTER() {
    if (!this._router) throw new Error('No router');
    return this._router;
  }

  setRouter(router: Router) {
    this._router = router;
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
