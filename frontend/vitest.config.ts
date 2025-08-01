import { defineConfig } from 'vitest/config'
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig(({ mode }) => ({
	plugins: mode === "test" ? [tsconfigPaths()] : [tailwindcss(), reactRouter(), tsconfigPaths()],
	test: {
		globals: true,
		root: __dirname,
		environment: "jsdom",
		setupFiles: ['./vitest.setup.ts'],
	},
}))
