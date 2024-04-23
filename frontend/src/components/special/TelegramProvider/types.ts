export interface TelegramUser {
  id: number;
  is_bot?: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  added_to_attachment_menu?: boolean;
  allows_write_to_pm?: boolean;
  photo_url?: string;
}

export interface TelegramWebAppInitData {
  query_id?: string;
  user?: TelegramUser;
  receiver?: TelegramUser;
  chat?: any;
  chat_type?: string;
  chat_instance?: string;
  start_param?: string;
  can_send_after?: number;
  auth_date: number;
  hash: string;
}

export interface TelegramWebApp {
  initData: string;
  initDataUnsafe: TelegramWebAppInitData;
  version: string;
  platform: string;
  colorScheme: string;
  themeParams: any;
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  headerColor: string;
  backgroundColor: string;
  isClosingConfirmationEnabled: boolean;
  BackButton: any;
  MainButton: any;
  SettingsButton: any;
  HapticFeedback: any;
  CloudStorage: any;
  BiometricManager: any;
  isVersionAtLeast: (version: string) => boolean;
  setHeaderColor: (color: string) => void;
  setBackgroundColor: (color: string) => void;
  enableClosingConfirmation: () => void;
  disableClosingConfirmation: () => void;
  onEvent: any;
  offEvent: any;
  sendData: any;
  switchInlineQuery: any;
  openLink: any;
  openTelegramLink: any;
  openInvoice: any;
  showPopup: any;
  showAlert: any;
  showConfirm: any;
  showScanQrPopup: any;
  closeScanQrPopup: any;
  readTextFromClipboard: any;
  requestWriteAccess: any;
  requestContact: any;
  ready: () => void;
  expand: () => void;
  close: () => void;
}

export interface Telegram {
  user: TelegramUser;
  webApp: TelegramWebApp;
  initData: TelegramWebAppInitData;
}
