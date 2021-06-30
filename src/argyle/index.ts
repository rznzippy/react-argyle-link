export interface AccountEvent {
  accountId: string;
  userId: string;
  linkItemId?: string;
}

export interface UserEvent {
  userId: string;
  userToken: string;
}

export interface ArgyleCreateOptions {
  pluginKey: string,
  apiHost?: string,
  userToken?: string,
  linkItems?: string[],
  onAccountCreated?: (event: AccountEvent) => void;
  onAccountConnected?: (event: AccountEvent) => void;
  onAccountUpdated?: (event: AccountEvent) => void;
  onAccountRemoved?: (event: AccountEvent) => void;
  onUserCreated?: (event: UserEvent) => void;
  onClose?: () => void;
  onTokenExpired?: (updateToken: (token: string) => void) => void;
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
