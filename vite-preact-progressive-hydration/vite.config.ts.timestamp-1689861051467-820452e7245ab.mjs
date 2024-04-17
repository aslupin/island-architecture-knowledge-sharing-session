// vite.config.ts
import { defineConfig } from "file:///Users/poon/Documents/works/github/repo/knowledge-sharing-island-architecture/vite-preact-progressive-hydration/node_modules/.pnpm/registry.npmmirror.com+vite@4.3.2_@types+node@20.2.5/node_modules/vite/dist/node/index.js";
import preact from "file:///Users/poon/Documents/works/github/repo/knowledge-sharing-island-architecture/vite-preact-progressive-hydration/node_modules/.pnpm/registry.npmmirror.com+@preact+preset-vite@2.5.0_@babel+core@7.22.1_preact@10.13.1_vite@4.3.2/node_modules/@preact/preset-vite/dist/esm/index.mjs";
import eslint from "file:///Users/poon/Documents/works/github/repo/knowledge-sharing-island-architecture/vite-preact-progressive-hydration/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-eslint@1.8.1_eslint@8.41.0_vite@4.3.2/node_modules/vite-plugin-eslint/dist/index.mjs";
import checker from "file:///Users/poon/Documents/works/github/repo/knowledge-sharing-island-architecture/vite-preact-progressive-hydration/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-checker@0.6.0_eslint@8.41.0_typescript@5.0.2_vite@4.3.2/node_modules/vite-plugin-checker/dist/esm/main.js";
var vite_config_default = defineConfig(({ mode }) => {
  if (mode === "production") {
    return {
      plugins: [
        preact(),
        eslint(),
        checker({
          typescript: true,
          eslint: {
            lintCommand: 'eslint "**/*.{ts,tsx}"'
          }
        })
      ]
    };
  }
  return {
    plugins: [
      preact(),
      eslint()
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcG9vbi9Eb2N1bWVudHMvd29ya3MvZ2l0aHViL3JlcG8va25vd2xlZGdlLXNoYXJpbmctaXNsYW5kLWFyY2hpdGVjdHVyZS92aXRlLXByZWFjdC1wcm9ncmVzc2l2ZS1oeWRyYXRpb25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9wb29uL0RvY3VtZW50cy93b3Jrcy9naXRodWIvcmVwby9rbm93bGVkZ2Utc2hhcmluZy1pc2xhbmQtYXJjaGl0ZWN0dXJlL3ZpdGUtcHJlYWN0LXByb2dyZXNzaXZlLWh5ZHJhdGlvbi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcG9vbi9Eb2N1bWVudHMvd29ya3MvZ2l0aHViL3JlcG8va25vd2xlZGdlLXNoYXJpbmctaXNsYW5kLWFyY2hpdGVjdHVyZS92aXRlLXByZWFjdC1wcm9ncmVzc2l2ZS1oeWRyYXRpb24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHByZWFjdCBmcm9tICdAcHJlYWN0L3ByZXNldC12aXRlJ1xuaW1wb3J0IGVzbGludCBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnXG5pbXBvcnQgY2hlY2tlciBmcm9tICd2aXRlLXBsdWdpbi1jaGVja2VyJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBpZiAobW9kZSA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgcHJlYWN0KCksXG4gICAgICAgIGVzbGludCgpLFxuICAgICAgICBjaGVja2VyKHtcbiAgICAgICAgICB0eXBlc2NyaXB0OiB0cnVlLFxuICAgICAgICAgIGVzbGludDoge1xuICAgICAgICAgICAgbGludENvbW1hbmQ6ICdlc2xpbnQgXCIqKi8qLnt0cyx0c3h9XCInLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIHByZWFjdCgpLFxuICAgICAgZXNsaW50KCksXG4gICAgXSxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK2YsU0FBUyxvQkFBb0I7QUFDNWhCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxhQUFhO0FBR3BCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLE1BQUksU0FBUyxjQUFjO0FBQ3pCLFdBQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxVQUNOLFlBQVk7QUFBQSxVQUNaLFFBQVE7QUFBQSxZQUNOLGFBQWE7QUFBQSxVQUNmO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
