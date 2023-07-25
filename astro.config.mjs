import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({
//     base: 'deploy-test'
// });

// astro.config.mjs

// 共通設定
const commonConfig = {
    // 共通のビルドオプションなどを設定
    // 例: buildOptions, plugins, components, etc.
  };
  
  // 開発環境の設定
  const devConfig = {
    // 開発時の設定をここに記述
    // 例: ソースマップの有効化、ホットリロードの設定など
  };
  
  // 本番環境の設定
  const prodConfig = {
    // 本番デプロイ時の設定をここに記述
    // 例: 最適化、パフォーマンス向上のための設定など
    base: 'deploy-test'
  };
  
  // 環境に応じて設定をマージ
  export default process.env.NODE_ENV === "production"
    ? { ...commonConfig, ...prodConfig }
    : { ...commonConfig, ...devConfig };
  