/// <reference types="vitest" />
/// <reference types="vite/client" />

import { fileURLToPath, URL } from 'node:url';

import nodeResolve from '@rollup/plugin-node-resolve';
import vue from '@vitejs/plugin-vue';
import {
  defineConfig,
  loadEnv,
  // UserConfig,
  splitVendorChunkPlugin,
} from 'vite';
import dynamicImport from 'vite-plugin-dynamic-import';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [
      vue(),
      tsConfigPaths(),
      dynamicImport(),
      splitVendorChunkPlugin(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./setup.ts'],
      exclude: ['node_modules', 'dist', 'build', 'coverage'],
      css: true,
      threads: false,
      environmentOptions: {
        jsdom: {
          resources: 'usable',
        },
      },
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
    server: {
      host: env.VITE_APP_HOST,
      port: Number(env.VITE_APP_PORT),
    },
    define: {
      global: {},
    },
    rollupOptions: {
      plugins: [
        nodeResolve({
          browser: true,
          preferBuiltins: false,
        }),
      ],
    },
  };
});
