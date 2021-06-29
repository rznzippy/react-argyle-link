export interface ArgyleCreateOptions {
  pluginKey: string,
  apiHost?: string,
  userToken?: string,
  linkItems?: string[],
  onAccountCreated?: () => void;
}

export interface ArgyleInstance {
  open: () => void;
  close: () => void;
}

export interface Argyle {
  create: (options: ArgyleCreateOptions) => ArgyleInstance;
}

declare global {
  interface Window {
    Argyle: Argyle;
  }
}
