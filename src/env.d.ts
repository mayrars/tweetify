interface ImportMeta {
  readonly env: ImportMetaEnv;
}
// Define the type of the environment variables.
declare interface Env {
  readonly NODE_ENV: string;
  // Replace the following with your own environment variables.
  // Example: NGX_VERSION: string;
  [key: string]: any;
  readonly NG_APP_TOKEN: string;
  readonly NG_APP_ACCESSTOKEN: string;
  readonly NG_APP_SECRETTOKEN: string;
  readonly NG_APP_URL: string;
}
