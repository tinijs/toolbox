import {Router, ContextLite} from '@tinijs/router';

import {showIndicator} from './nav/show-indicator';
import {hideIndicator} from './nav/hide-indicator';
import {go} from './nav/go';
import {back} from './nav/back';

export class NavService {
  private _router?: Router;

  get router() {
    if (!this._router) throw new Error('No router, please init() first.');
    return this._router;
  }

  init(router: Router) {
    this._router = router;
  }

  showIndicator() {
    return showIndicator();
  }

  hideIndicator() {
    return hideIndicator();
  }

  go(pathnameOrContext: string | ContextLite, shouldUpdateHistory?: boolean) {
    return go(this.router, pathnameOrContext, shouldUpdateHistory);
  }

  back() {
    return back();
  }
}

export default NavService;
