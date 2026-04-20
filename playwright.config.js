import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e-tests",
  use: {
    baseURL: "http://localhost:8080",
    headless: true,
  },
  webServer: {
    command: "npm run start",
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
});
