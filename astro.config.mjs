import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({
//     base: 'deploy-test'
// });

// astro.config.mjs

// 共通設定
const commonConfig = {
    
};

// 開発環境の設定
const devConfig = {
    
};

// 本番環境の設定
const prodConfig = {
    
    base: 'deploy-test',
};

// 環境に応じて設定をマージ
export default process.env.NODE_ENV === "production"
    ? { ...commonConfig, ...prodConfig }
    : { ...commonConfig, ...devConfig };
