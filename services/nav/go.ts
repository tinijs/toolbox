import {Router, ContextLite} from '@tinijs/router';

export function go(
  router: Router,
  pathnameOrContext: string | ContextLite,
  shouldUpdateHistory?: boolean
) {
  return router.render(pathnameOrContext, shouldUpdateHistory);
}

export default go;
export type Go = typeof go;
