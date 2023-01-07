import {Router} from '@tinijs/router';
import {showNavIndicator, hideNavIndicator} from '@tinijs/router';

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
    return showNavIndicator();
  }

  hideIndicator() {
    return hideNavIndicator();
  }

  go(pathnameOrContext: string) {
    return this.ROUTER.render(pathnameOrContext);
  }

  back() {
    return history.back();
  }
}
