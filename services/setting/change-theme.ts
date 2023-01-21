export type SettingLocalstorageSetter = (value: any) => any;

function changeTheme(
  name: string,
  localstorageSet?: SettingLocalstorageSetter
) {
  // affect
  document.body.dataset.theme = name;
  // set local
  localstorageSet?.(name);
  // set remote
  // TODO
}

export default changeTheme;
export type ChangeTheme = typeof changeTheme;
