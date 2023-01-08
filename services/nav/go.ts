import {Router} from '@tinijs/router';

export function go(router: Router, pathnameOrContext: string) {
  return router.render(pathnameOrContext);
}

export default go;
export type Go = typeof go;
