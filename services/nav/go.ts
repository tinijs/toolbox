import {Router} from '@tinijs/router';

export function go(router: Router, pathnameOrContext: string) {
  return router.render(pathnameOrContext);
}
