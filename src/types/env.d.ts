declare module 'react-native-config' {
  export interface NativeConfig {
    API_URL?: string;
    APP_ENV?: string;
  }
}
export const Config: NativeConfig;
export default Config;
