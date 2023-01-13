# TiniJS Useful

Useful services, helpers, ... for using in TiniJS apps.

## Install

To install the module: `npm i @tinijs/useful`

It is recommended to download the [Skeleton](https://github.com/tinijs/skeleton) for a ready-to-use structured project.

For more, please visit: <https://tinijs.dev>

## Usage

- Create the `providers.ts`

```ts
const providers = {
  // fetch service
  fetchService: () => import('@tinijs/useful/services/fetch'),
  // convert object to array helper
  o2a: () => import('@tinijs/useful/services/helper/o2a'),
};

export default providers;
export type Providers = typeof providers;
```

- Register the providers in `app.ts`

```ts
import providers from './providers';

@App(providers)
export class AppRoot extends TiniComponent {}
```

- Inject & use the dependency

```ts
import {Inject} from '@tinijs/core';
import {FetchService, O2a} from '@tinijs/usefule';

@Page('page-home')
export class PageHome extends TiniComponent {
  @Inject() fetchService!: FetchService;
  @Inject() o2a!: O2a;

  onInit() {
    // use the "FetchService" service
    this.fetchService
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then(data => {})
    // use the "o2a" helper
    const obj = {
      'item-1': {id: 1, title: 'Item 1'},
      'item-2': {id: 2, title: 'Item 2'},
      'item-3': {id: 3, title: 'Item 3'},
    };
    const arr = this.o2a(obj);
  }
}
```

## API

// TODO

## Developement

- Create a home for TiniJS: `mkdir TiniJS && cd TiniJS`
- Fork the repo: `git clone https://github.com/tinijs/useful.git`
- Install dependencies: `cd useful && npm i`
- Make changes & preview locally: `npm run build && npm pack`
- Push changes & create a PR 👌

## License

**@tinijs/useful** is released under the [MIT](https://github.com/tinijs/useful/blob/master/LICENSE) license.
