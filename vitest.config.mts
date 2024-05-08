import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    exclude: ['node_modules', 'scaffold/template'],
    coverage: {
      enabled: true,
      provider: 'v8',
      exclude: ['excercises/**/bin', 'scaffold/template', 'scaffold/index.ts'],
    },
  },
});
