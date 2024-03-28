# TiniJS Toolbox

> [!IMPORTANT]
> This previously experiment is wrapped up, moving forward the development will happen at <https://github.com/tinijs/tinijs/tree/main/packages/toolbox>.
>
> If you want to use the experimental version still, please use the version `0.16.0`.

Useful services, helpers, ... for using in TiniJS apps.

## Install

To install the module: `npm i @tinijs/toolbox@0.16.0`

It is recommended to download the [Skeleton](https://github.com/tinijs/skeleton) for a ready-to-use structured project.

For more, please visit: <https://tinijs.dev>

## Usage

- Create the `providers.ts`

```ts
import {DependencyProviders} from '@tinijs/core';

export default {
  fetchService: () => import('@tinijs/toolbox/fetch/service'),
} as DependencyProviders;
```

- Register the providers in `app.ts`

```ts
import providers from './providers';

@App({providers})
export class AppRoot extends TiniComponent {}
```

- Inject & use the dependency

```ts
import {Inject} from '@tinijs/core';
import {FetchService} from '@tinijs/toolbox';

@Page({
  name: 'app-page-home',
})
export class AppPageHome extends TiniComponent {
  @Inject() fetchService!: FetchService;

  async onInit() {
    const data = await this.fetchService.get('https://jsonplaceholder.typicode.com/todos/1')
  }
}
```

## API

// TODO

## Developement

- Create a home for TiniJS: `mkdir TiniJS && cd TiniJS`
- Fork the repo
- Install dependencies: `cd toolbox && npm i`
- Make changes & preview locally: `npm run build && npm pack`
- Push changes & create a PR 👌

## License

**@tinijs/toolbox** is released under the [MIT](https://github.com/tinijs/toolbox/blob/master/LICENSE) license.
