export type SettingLocalstorageGetter = () => Promise<any>;

async function queryTheme(
  defaultTheme: string,
  localstorageGetter?: SettingLocalstorageGetter
) {
  let theme: undefined | null | string = null;
  // from remote
  // TODO
  // from local
  theme ||= await localstorageGetter?.();
  // from system or default
  theme ||= matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : defaultTheme;
  // result
  return theme;
}

export default queryTheme;
export type QueryTheme = typeof queryTheme;
