import {
  defineConfig,
  loadEnv,
  UserConfig,
  splitVendorChunkPlugin,
} from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import dynamicImport from 'vite-plugin-dynamic-import';
import tsConfigPaths from 'vite-tsconfig-paths';
import nodeResolve from '@rollup/plugin-node-resolve';

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
